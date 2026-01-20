$baseUrl = "http://localhost:3000"

function Test-Redirect {
    param (
        [string]$TestUrl,
        [string]$ExpectedUrl,
        [int]$ExpectedStatus = 308
    )

    $output = cmd /c curl -I $TestUrl 2>&1
    
    if ($output -match "HTTP/1.1 $ExpectedStatus") {
        if ($output -match "location: $ExpectedUrl") {
             Write-Host "✅ PASS: $TestUrl -> $ExpectedUrl ($ExpectedStatus)" -ForegroundColor Green
             return
        }
    }
    
    Write-Host "❌ FAIL: $TestUrl" -ForegroundColor Red
    Write-Host "   Output: $output"
}

function Test-Canonical {
    param (
        [string]$Url,
        [string]$ExpectedCanonical
    )
    
    # Use curl to get content, grep for canonical
    $content = cmd /c curl -s $Url
    
    if ($content -match "<link rel=`"canonical`" href=`"$ExpectedCanonical`"") {
        Write-Host "✅ PASS: Canonical for $Url matches $ExpectedCanonical" -ForegroundColor Green
    } else {
        Write-Host "❌ FAIL: Canonical for $Url" -ForegroundColor Red
        Write-Host "   Expected: $ExpectedCanonical"
        # Try to find what was actually there
        if ($content -match "canonical`" href=`"([^`"]+)") {
             Write-Host "   Got: $($matches[1])"
        } else {
             Write-Host "   Got: (Not found in content)"
        }
    }
}

Write-Host "--- Testing Redirects ---"
Test-Redirect -TestUrl "$baseUrl/index" -ExpectedUrl "/"
Test-Redirect -TestUrl "$baseUrl/about/" -ExpectedUrl "/about"
Test-Redirect -TestUrl "$baseUrl/wedding-budget-calculator/" -ExpectedUrl "/wedding-budget-calculator"
Test-Redirect -TestUrl "$baseUrl/privacy" -ExpectedUrl "/privacy-policy"

Write-Host "`n--- Testing Canonical Tags ---"
Test-Canonical -Url "$baseUrl/about" -ExpectedCanonical "$baseUrl/about"
Test-Canonical -Url "$baseUrl/wedding-budget-calculator" -ExpectedCanonical "$baseUrl/wedding-budget-calculator"

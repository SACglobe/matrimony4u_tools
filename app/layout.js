import './globals.css';
import { SITE_CONFIG } from '@/lib/config';
import { 
  generatePageMetadata, 
  generateWebSiteSchema, 
  generateOrganizationSchema,
  generatePersonSchema,
  JsonLd 
} from '@/lib/seo';

export const revalidate = 604800; // 7 days (weekly revalidation)

// Root metadata
export const metadata = generatePageMetadata({
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  canonicalPath: '',
  ogImage: '/logo-original.png',
  icons: {
    icon: '/favicon-32.png',
    apple: '/icon.png',
  },
  manifest: '/site.webmanifest',
});

export default function RootLayout({ children }) {
  const websiteSchema = generateWebSiteSchema();
  const organizationSchema = generateOrganizationSchema();
  const personSchema = generatePersonSchema();

  return (
    <html lang="en-IN">
      <head>
        <JsonLd data={websiteSchema} />
        <JsonLd data={organizationSchema} />
        <JsonLd data={personSchema} />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}

import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/lib/config';
import { 
  generatePageMetadata, 
  generateWebSiteSchema, 
  generateOrganizationSchema,
  generatePersonSchema,
  JsonLd 
} from '@/lib/seo';

// Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

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
    <html lang="en-IN" className={`${inter.variable} ${playfair.variable}`}>
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

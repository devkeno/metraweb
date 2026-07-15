import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext.jsx';
import SmoothScroll from '@/components/SmoothScroll.jsx';

export const metadata = {
  metadataBase: new URL('https://www.metra.ba'),
  title: 'METRA d.o.o. - Präzisionsbearbeitung & CNC-Technik',
  description: 'Qualität. Präzision. Zuverlässigkeit. Seit 1984. Ihr Partner für Präzisionsbearbeitung, CNC-Technik und Schweißkonstruktionen.',
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://www.metra.ba/',
  },
  openGraph: {
    title: 'METRA d.o.o. - Präzisions-CNC-Fräsen & Drehen seit 1984',
    description: 'Ihr Partner für Präzisionsbearbeitung, CNC-Technik und Schweißkonstruktionen seit 1984.',
    type: 'website',
    url: 'https://www.metra.ba/',
    siteName: 'METRA d.o.o.',
    locale: 'de_DE',
    images: [
      {
        url: '/images/hero-milling-spindle.jpg',
        width: 1200,
        height: 630,
        alt: 'METRA d.o.o. – Präzisions-CNC-Fertigung seit 1984',
      },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/hero-milling-spindle.jpg" fetchPriority="high" />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}

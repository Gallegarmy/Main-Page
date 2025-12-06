import { Footer } from '@/components/layout/Footer/Footer';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { I18nProvider } from '../components/I18nProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sysarmy Galicia',
  description: 'Technology and systems community in Galicia',
  keywords: ['sysarmy', 'galicia', 'technology', 'systems', 'community', 'developers', 'devops', 'sysadmin'],
  authors: [{ name: 'Sysarmy Galicia' }],
  creator: 'Sysarmy Galicia',
  publisher: 'Sysarmy Galicia',
  metadataBase: new URL('https://sysarmy.galicia.dev'),
  openGraph: {
    title: 'Sysarmy Galicia',
    description: 'Technology and systems community in Galicia',
    url: 'https://sysarmy.galicia.dev',
    siteName: 'Sysarmy Galicia',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/communities/sysarmy-galicia/sysarmy-galicia-logo.png',
        width: 1200,
        height: 630,
        alt: 'Sysarmy Galicia Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sysarmy Galicia',
    description: 'Technology and systems community in Galicia',
    images: ['/assets/communities/sysarmy-galicia/sysarmy-galicia-logo.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProvider>
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}

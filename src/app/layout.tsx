import './global.css';

import type * as i from 'types';
import { Inter } from 'next/font/google';

import { cn } from 'utils';
import { RootLayout } from 'modules/layouts/RootLayout';

const inter = Inter({ subsets: ['latin'] });

const siteName = 'Ronny Rook';

export const metadata = {
  title: {
    default: `Webshop op maat | ${siteName}`,
    template: `%s | ${siteName}`,
  },
  description: 'Op zoek naar een Shopify webshop op maat? Ronny Rook is Shopify expert en helpt je graag!',
  openGraph: {
    title: siteName,
    description: 'Op zoek naar een Shopify webshop op maat? Ronny Rook is Shopify expert en helpt je graag!',
    url: 'https://rnny.nl',
    siteName,
    images: [
      {
        url: 'https://rnny.nl/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteName,
    card: 'summary_large_image',
  },
  manifest: '/images/favicon/site.webmanifest',
  icons: {
    icon: '/images/favicon/favicon-32x32.png',
    shortcut: '/images/favicon/favicon.ico',
    apple: '/images/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/images/favicon/safari-pinned-tab.svg',
      },
    ],
  },
};

const Layout = ({ children }: Props) => {
  return (
    <html
      lang="en"
      className={cn('text-black bg-white', inter.className)}
    >
      <head />
      <RootLayout>{children}</RootLayout>
    </html>
  );
};

type Props = i.NextPageProps<{
  children: React.ReactNode;
}>;

export default Layout;

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: '17Suit - Innovative App Suite for Modern Life',
  description:
    'Experience a seamless integration of apps designed to enhance your daily life. From travel planning to productivity, 17Suit has you covered.',
  keywords: [
    'app suite',
    'productivity apps',
    'travel apps',
    'lifestyle apps',
    '17Suit',
  ],
  openGraph: {
    title: '17Suit - Your All-in-One App Solution',
    description:
      'Discover a world of possibilities with 17Suit, the app suite that simplifies your life across various domains.',
    url: 'https://www.17suit.com',
    siteName: '17Suit',
    images: [
      {
        url: 'https://www.17suit.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '17Suit App Suite Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '17Suit - Empowering Your Digital Life',
    description:
      'One suite, endless possibilities. Explore 17Suit and transform the way you interact with technology.',
    creator: '@17suit',
    images: ['https://www.17suit.com/twitter-image.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#17171a', // Ajusta este color al color principal de tu marca
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

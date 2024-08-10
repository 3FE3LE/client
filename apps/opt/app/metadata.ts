import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'One Plan Trip - Your All-in-One Travel Planner',
  description:
    'Plan, organize, and enjoy your travels with One Plan Trip. Manage destinations, budgets, activities, and more in one place.',
  keywords: [
    'travel planner',
    'trip organizer',
    'vacation planner',
    'travel app',
  ],
  openGraph: {
    title: 'One Plan Trip - Simplify Your Travel Planning',
    description:
      'Create and manage your perfect trip with our all-in-one travel planning app.',
    url: 'https://www.oneplantrip.com',
    siteName: 'One Plan Trip',
    images: [
      {
        url: 'https://www.oneplantrip.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'One Plan Trip App Screenshot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Plan Trip - Your Travel Companion',
    description:
      'Simplify your travels, maximize your experiences with One Plan Trip.',
    creator: '@3FE3LE',
    images: ['https://www.oneplantrip.com/twitter-image.jpg'],
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
  },
  manifest: '/site.webmanifest',
};

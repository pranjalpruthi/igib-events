import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import * as React from 'react';
import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';
import appCss from '@/styles/app.css?url';
import { RootProvider } from 'fumadocs-ui/provider/tanstack';
import { ThemeProvider } from '@/components/theme-provider';

// Microsoft Clarity Project ID
const CLARITY_PROJECT_ID = 'v9zix01itc';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'BioinformaticsOnLine Events - Workshops & Training',
      },
      {
        name: 'description',
        content: 'Official events portal for BioinformaticsOnLine (BOL) at CSIR-IGIB. Explore upcoming workshops, training programs, and resources for bioinformatics skill development.',
      },
      {
        name: 'keywords',
        content: 'bioinformatics, genomics, one health, AMR, pathogen research, metagenomics, CSIR-IGIB, workshop, training, skill india, BOL',
      },
      {
        name: 'author',
        content: 'CSIR-Institute of Genomics and Integrative Biology',
      },
      // Open Graph / Facebook
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'BioinformaticsOnLine Events - Workshops',
      },
      {
        property: 'og:description',
        content: 'Official events portal for BioinformaticsOnLine (BOL) at CSIR-IGIB.',
      },
      {
        property: 'og:site_name',
        content: 'BioinformaticsOnLine',
      },
      {
        property: 'og:image',
        content: '/assests/meta-banner.webp',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:image:type',
        content: 'image/webp',
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'BioinformaticsOnLine Events - Workshops',
      },
      {
        name: 'twitter:description',
        content: 'Official events portal for BioinformaticsOnLine (BOL) at CSIR-IGIB.',
      },
      {
        name: 'twitter:image',
        content: '/assests/meta-banner.webp',
      },
      // Additional meta tags
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'language',
        content: 'English',
      },
      {
        name: 'theme-color',
        content: '#ec4899',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap' },
      { rel: 'canonical', href: 'https://igib-events.vercel.app' },
      { rel: 'icon', type: 'image/png', href: '/assests/bol/favicon-192.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/assests/bol/favicon-192.png' },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  // Initialize Microsoft Clarity on mount
  useEffect(() => {
    Clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    "name": "Five-day Hands-on Workshop on Bioinformatics for One Health",
    "description": "Comprehensive training in One Health bioinformatics, focusing on pathogen genomics, metagenomics, and antimicrobial resistance (AMR) surveillance.",
    "startDate": "2025-11-03T08:00:00+05:30",
    "endDate": "2025-11-07T14:00:00+05:30",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "CSIR-Institute of Genomics and Integrative Biology",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mathura Road Campus",
        "addressLocality": "Delhi",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "CSIR-Institute of Genomics and Integrative Biology",
      "url": "https://www.igib.res.in/"
    },
    "funder": {
      "@type": "Organization",
      "name": "Indian Council of Medical Research (ICMR)"
    },
    "keywords": "bioinformatics, genomics, one health, AMR, pathogen research, metagenomics",
    "inLanguage": "en",
    "maximumAttendeeCapacity": 25,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <html suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}

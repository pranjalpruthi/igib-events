import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router';
import * as React from 'react';
import appCss from '@/styles/app.css?url';
import { RootProvider } from 'fumadocs-ui/provider/tanstack';

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
        title: 'IGIB Events - Bioinformatics for One Health Workshop | CSIR-IGIB',
      },
      {
        name: 'description',
        content: 'Five-day hands-on workshop on Bioinformatics for One Health and Pathogen-Specific Research. November 3-7, 2025 at CSIR-IGIB, Delhi. Expert-led training in genomics, metagenomics, and AMR surveillance.',
      },
      {
        name: 'keywords',
        content: 'bioinformatics, genomics, one health, AMR, pathogen research, metagenomics, CSIR-IGIB, workshop, training, Delhi, ICMR',
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
        content: 'IGIB Events - Bioinformatics for One Health Workshop',
      },
      {
        property: 'og:description',
        content: 'Five-day hands-on workshop on Bioinformatics for One Health. November 3-7, 2025 at CSIR-IGIB, Delhi. Expert training in genomics, metagenomics, and AMR surveillance.',
      },
      {
        property: 'og:site_name',
        content: 'IGIB Events',
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'IGIB Events - Bioinformatics for One Health Workshop',
      },
      {
        name: 'twitter:description',
        content: 'Five-day hands-on workshop on Bioinformatics for One Health. November 3-7, 2025 at CSIR-IGIB, Delhi.',
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
      { rel: 'canonical', href: 'https://igib-events.vercel.app' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.svg' },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
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
    <html className="light" style={{ colorScheme: 'light' }}>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <Scripts />
      </body>
    </html>
  );
}

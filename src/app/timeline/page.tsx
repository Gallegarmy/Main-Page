import type { Metadata } from 'next';
import React from 'react';

import { Header } from '../Header';
import { TimelineGrid } from '../TimelineGrid';

export const metadata: Metadata = {
  title: 'Timeline - Sysarmy Galicia',
  description:
    'Explore the timeline of events, talks and activities from the Sysarmy Galicia community. Discover our history and upcoming events.',
  openGraph: {
    title: 'Timeline - Sysarmy Galicia',
    description:
      'Explore the timeline of events, talks and activities from the Sysarmy Galicia community. Discover our history and upcoming events.',
  },
  twitter: {
    title: 'Timeline - Sysarmy Galicia',
    description:
      'Explore the timeline of events, talks and activities from the Sysarmy Galicia community. Discover our history and upcoming events.',
  },
};

export default function Timeline() {
  return (
    <>
      <Header />
      <div className="container mx-auto my-0">
        <h1 className="my-8 text-center text-2xl font-bold lg:text-4xl xl:text-5xl">Timeline</h1>
        <TimelineGrid />
      </div>
    </>
  );
}

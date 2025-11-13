import React from 'react';

import { Header } from '../Header';
import { TimelineGrid } from '../TimelineGrid';

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

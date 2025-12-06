'use client';

import { Header } from '@/components/layout/Header';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { TimelineGrid } from '../../components/sections/TimelineGrid';

export default function Timeline() {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <div className="container mx-auto my-0">
        <h1 className="my-8 text-center text-2xl font-bold lg:text-4xl xl:text-5xl">{t('timeline.title')}</h1>
        <TimelineGrid />
      </div>
    </>
  );
}

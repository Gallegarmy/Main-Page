'use client';

import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

export const MerchHero = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-6 px-6 pt-8 xl:pt-16">
      <div className="w-fit border border-white px-4 py-2 text-white uppercase">{t('merch.badge')}</div>
      <h1 className="text-5xl">
        <Trans i18nKey="merch.title" components={{ 1: <span className="font-bold text-blue-600" /> }} />
      </h1>
      <p className="text-gray-500">{t('merch.subtitle')}</p>
    </section>
  );
};

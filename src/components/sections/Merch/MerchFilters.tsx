'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export const MerchFilters = () => {
  const { t } = useTranslation();

  return (
    <nav aria-label="Product filters" className="my-3.5 flex gap-3 px-6 py-3">
      <button className="cursor-pointer border px-2.5 py-1.5">{t('merch.filterAll')}</button>
    </nav>
  );
};

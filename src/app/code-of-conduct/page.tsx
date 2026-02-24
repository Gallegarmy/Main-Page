'use client';

import { Header } from '@/components/layout/Header';
import { IMAGE_BASE_URL, buildImagePreviewUrl } from '@/config';
import { CodeOfConductSectionData } from '@/types/CodeOfConduct';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { codeOfConductSections } from './data';

export default function CodeOfConduct() {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <div className="container mx-auto my-0 p-3">
        <section className="mb-4 grid gap-3 md:grid-cols-2 md:gap-16">
          <div className="self-center">
            <h1 className="pb-1.5 text-center text-3xl font-bold md:text-left md:text-6xl">{t('meta.title')}</h1>
            <h1 className="pb-1.5 text-center text-3xl font-bold md:text-left md:text-6xl">
              {t('codeOfConduct.meta.title')}
            </h1>
            <p className="text-md text-center md:text-left md:text-lg">
              {t('codeOfConduct.meta.lastUpdated', { date: 2025 })}
            </p>
          </div>
          <div className="flex justify-evenly md:grid md:justify-center">
            <Image
              height={256}
              width={256}
              src={`${IMAGE_BASE_URL}/remote.php/dav/photospublic/sw6tEvMmlvC4ORgeM2kqIMQXJO1rdBRz/4912-20250927_220731.jpg`}
              alt="Sysarmy Galicia event photo"
              className="w-36 rounded-md md:col-start-2 md:col-end-2 md:w-64"
            />
            <Image
              height={256}
              width={256}
              src={buildImagePreviewUrl(4259, 'sw6tEvMmlvC4ORgeM2kqIMQXJO1rdBRz')}
              alt="Sysarmy Galicia community gathering"
              className="w-36 rounded-md md:w-64"
            />
          </div>
        </section>
        <section>
          {codeOfConductSections.map((section) => {
            const sectionData = t(`codeOfConduct.${section.id}`, {
              returnObjects: true,
            }) as CodeOfConductSectionData;

            const rules = sectionData?.rules;

            return (
              <div key={section.id} className="mb-11">
                <h3 className="mb-3 text-center text-3xl font-bold md:text-justify md:text-4xl">
                  {t(section.titleKey)}
                </h3>
                {Array.isArray(rules) && rules.length > 0 ? (
                  <ul className="list-disc pl-6">
                    {rules.map((rule, index) => (
                      <li key={`${section.id}-rule-${index}`} className="mb-2">
                        {rule}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

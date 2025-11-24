'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Header } from '../Header';
import { codeOfConductSections } from './data';

export default function CodeOfConduct() {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <div className="container mx-auto my-0 p-3">
        <section className="mb-4 grid gap-3 md:grid-cols-2 md:gap-16">
          <div className="self-center">
            <h1 className="pb-1.5 text-center text-3xl font-bold md:text-left md:text-6xl">
              {t('pages.codeOfConduct.sysarmy')}
            </h1>
            <h1 className="pb-1.5 text-center text-3xl font-bold md:text-left md:text-6xl">
              {t('pages.codeOfConduct.title')}
            </h1>
            <p className="text-md text-center md:text-left md:text-lg">{t('pages.codeOfConduct.lastUpdated')}</p>
          </div>
          <div className="flex justify-evenly md:grid md:justify-center">
            <Image
              height={256}
              width={256}
              src="https://cloud.sysarmy.galicia.dev/remote.php/dav/photospublic/sw6tEvMmlvC4ORgeM2kqIMQXJO1rdBRz/4912-20250927_220731.jpg"
              alt="Sysarmy Galicia Logo"
              className="w-36 rounded-md md:col-start-2 md:col-end-2 md:w-64"
            />
            <Image
              height={256}
              width={256}
              src="https://cloud.sysarmy.galicia.dev/apps/photos/api/v1/publicPreview/4259?x=2048&y=2048&token=sw6tEvMmlvC4ORgeM2kqIMQXJO1rdBRz"
              alt="Sysarmy Galicia Logo"
              className="w-36 rounded-md md:w-64"
            />
          </div>
        </section>
        <section>
          {codeOfConductSections.map((section) => (
            <div key={section.id} className="mb-11">
              <h3 className="mb-3 text-center text-3xl font-bold md:text-justify md:text-4xl">{t(section.titleKey)}</h3>
              <ul className="list-disc pl-6">
                {section.rules.map((rule) => (
                  <li key={rule}>{t(`codeOfConduct.${section.id}.${rule}`)}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

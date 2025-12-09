'use client';

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'gal', name: 'Galego', flag: '🏴󠁥󠁳󠁧󠁡󠁿' },
];

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation('common');

  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = useMemo(
    () => languages.find((lang) => lang.code === i18n.language) || languages[0],
    [i18n.language],
  );

  const handleLanguageChange = useCallback(
    (languageCode: string) => {
      i18n.changeLanguage(languageCode);
      setIsOpen(false);
    },
    [i18n],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors duration-300 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        aria-label={t('language.selector')}
      >
        <FontAwesomeIcon icon={faGlobe} className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <span className="mt-1 sm:hidden">{currentLanguage.flag}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-1 min-w-[160px] rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-600 dark:bg-gray-800">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                language.code === i18n.language
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span>{language.name}</span>
              {language.code === i18n.language && (
                <svg
                  className="ml-auto h-4 w-4 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

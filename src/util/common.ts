import { i18n } from '@src/i18n';

export const changeLanguage = (lng: 'en' | 'ja') => {
  i18n.setLocale(lng);
};

export const getResourceLabel = (key: string) => {
  return i18n.__(key) || '';
};

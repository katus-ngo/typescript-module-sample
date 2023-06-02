import { I18n, GlobalCatalog, LocaleCatalog } from 'i18n';
import { resources as en } from '../../../Locales/en/resources.json';
import { resources as ja } from '../../../Locales/ja/resources.json';

const staticCatalog: GlobalCatalog = {
  en: en as LocaleCatalog,
  ja: ja as LocaleCatalog,
};

export const i18n = new I18n({
  defaultLocale: 'ja',
  objectNotation: true,
  updateFiles: false,
  locales: ['en', 'ja'],
  extension: '.json',
  staticCatalog,
});

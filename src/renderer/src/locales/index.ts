import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'

const savedLang = localStorage.getItem('lang') || 'zh'

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: {
    en,
    zh
  }
})

export default i18n

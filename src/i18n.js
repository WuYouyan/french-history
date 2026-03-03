import { createI18n } from 'vue-i18n'
import zh from '../resources/locales/zh.js'

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'fr',
  messages: {
    zh
  }
})

export async function loadLocaleMessages(locale) {
  // 已加载的语言直接切换
  if (i18n.global.availableLocales.includes(locale)) {
    i18n.global.locale.value = locale
    return
  }

  try {
    // 根据 locale 动态加载对应语言文件，例如 ../resources/fr.js
    const mod = await import(`../resources/locales/${locale}.js`)
    i18n.global.setLocaleMessage(locale, mod.default)
    i18n.global.locale.value = locale
  } catch (err) {
    // 找不到对应语言文件时，回退到默认语言并在控制台提示
    console.error(`[i18n] Failed to load locale "${locale}"`, err)
  }
}

export default i18n


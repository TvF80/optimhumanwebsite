import { useState } from 'react'
import { type Lang, translations } from '../i18n/translations'

export function useLang() {
  const [lang, setLang] = useState<Lang>('pl')
  const t = translations[lang]
  return { lang, setLang, t }
}

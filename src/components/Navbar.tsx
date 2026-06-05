import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { type Lang } from '../i18n/translations'

interface NavbarProps {
  lang: Lang
  setLang: (l: Lang) => void
  t: any
}

const navLinks = (t: any) => [
  { href: '#about', label: t.nav.about },
  { href: '#services', label: t.nav.services },
  { href: '#process', label: t.nav.howWeWork },
  { href: '#clients', label: t.nav.clients },
  { href: '#partners', label: t.nav.partners },
  { href: '#contact', label: t.nav.contact },
]

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Optim Human"
              className="h-8 lg:h-10 w-auto"
              style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks(t).map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: lang + CTA */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="hidden sm:flex items-center gap-1 glass rounded-lg p-1">
              {(['pl', 'en', 'fr'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs font-semibold rounded uppercase tracking-wider transition-all duration-200 ${
                    lang === l
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo('#contact')}
              className="hidden sm:block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30"
            >
              {t.nav.cta}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
            >
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-white rounded" />
              <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-white rounded" />
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-white rounded" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks(t).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-3 py-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10">
                {(['pl', 'en', 'fr'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1 text-xs font-semibold rounded uppercase tracking-wider transition-all ${
                      lang === l ? 'bg-blue-600 text-white' : 'text-slate-300'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

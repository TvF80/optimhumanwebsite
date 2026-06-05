import { type Lang } from '../i18n/translations'

interface FooterProps { t: any; lang: Lang; setLang: (l: Lang) => void }

const navSections = (t: any) => [
  { label: t.nav.about, href: '#about' },
  { label: t.nav.services, href: '#services' },
  { label: t.nav.howWeWork, href: '#process' },
  { label: t.nav.clients, href: '#clients' },
  { label: t.nav.partners, href: '#partners' },
  { label: t.nav.contact, href: '#contact' },
]

export default function Footer({ t, lang, setLang }: FooterProps) {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#040810] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/logo.svg" alt="Optim Human" className="h-10 mb-4" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
            <div className="flex gap-3 mt-5">
              {(['pl', 'en', 'fr'] as Lang[]).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg uppercase tracking-wider transition-all ${
                    lang === l ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-white glass'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-slate-300 font-semibold text-sm mb-4 uppercase tracking-wider">Menu</div>
            <ul className="space-y-2">
              {navSections(t).map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-500 hover:text-slate-200 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-slate-300 font-semibold text-sm mb-4 uppercase tracking-wider">Kontakt</div>
            <div className="space-y-2 text-sm text-slate-500">
              <a href="tel:+48228476117" className="block hover:text-slate-200 transition-colors">(+48) 22 847 61 17</a>
              <a href="mailto:biuro@optimhuman.com" className="block hover:text-slate-200 transition-colors">biuro@optimhuman.com</a>
              <div>ul. Pileckiego 67/200</div>
              <div>02–781 Warszawa</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-600">
          <span>{t.footer.rights}</span>
          <div className="flex gap-4">
            <span>{t.footer.nip}</span>
            <span>{t.footer.regon}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

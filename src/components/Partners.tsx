import { motion } from 'framer-motion'

interface PartnersProps { t: any }
const vp = { once: true, amount: 0.1 }

const countryList = [
  '🇵🇱 Polska', '🇫🇷 Francja', '🇩🇪 Niemcy', '🇬🇧 UK',
  '🇧🇪 Belgia', '🇨🇭 Szwajcaria', '🇺🇸 USA', '🇨🇦 Kanada',
  '🇯🇵 Japonia', '🇦🇺 Australia', '🇧🇷 Brazylia', '🇮🇳 Indie',
]

export default function Partners({ t }: PartnersProps) {
  return (
    <section id="partners" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #0a0f1e 100%)' }}>
      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          #3b82f6 0px,
          #3b82f6 1px,
          transparent 1px,
          transparent 28px
        )`,
      }} />
      {/* Large soft circle top-right */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ecosystem header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.55 }} className="text-center mb-14">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">Ecosystem</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-slate-800">{t.partners.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t.partners.subtitle}</p>
        </motion.div>

        {/* Partner cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* EXCO */}
          <motion.a
            href="https://exco.pl" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="block rounded-3xl p-8 border border-blue-200/60 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 group"
            style={{ background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)' }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-14 rounded-2xl bg-white flex items-center justify-center border border-blue-100 shadow-sm px-3 py-2">
                <img src="/exco-logo.svg" alt="EXCO A2A Polska" className="h-10 w-auto object-contain" />
              </div>
              <div className="flex-1">
                <span className="text-blue-600 text-xs font-semibold uppercase tracking-wide">Właściciel · Spółka matka</span>
              </div>
              <svg className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{t.partners.exco}</p>
            <div className="flex flex-wrap gap-2">
              {['Audyt', 'Podatki', 'Księgowość', 'Doradztwo prawne', '6 biur PL'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100">{tag}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-blue-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Odwiedź exco.pl</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </motion.a>

          {/* Kreston */}
          <motion.a
            href="https://kreston.com" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.55, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="block rounded-3xl p-8 border border-slate-200/60 hover:border-slate-400/80 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300 group"
            style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-14 rounded-2xl bg-white flex items-center justify-center border border-slate-100 shadow-sm px-3 py-2">
                <img src="/kreston-logo.svg" alt="Kreston International" className="h-10 w-auto object-contain" />
              </div>
              <div className="flex-1">
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">Sieć globalna · Top 10 worldwide</span>
              </div>
              <svg className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{t.partners.kreston}</p>
            <div className="flex flex-wrap gap-2">
              {['120+ krajów', '25 000+ ekspertów', 'Audyt', 'Podatki', 'Advisory'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200">{tag}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-slate-500 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Odwiedź kreston.com</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </motion.a>
        </div>

        {/* Global reach */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-10 text-center"
        >
          <div className="text-7xl mb-4 select-none">🌍</div>
          <div className="text-white text-2xl sm:text-3xl font-bold mb-2">{t.partners.globalTitle}</div>
          <div className="text-slate-400 text-sm mb-2">{t.partners.globalSubtitle}</div>

          <div className="flex justify-center gap-3 mt-6 flex-wrap max-w-2xl mx-auto">
            {countryList.map(c => (
              <span key={c} className="px-3 py-1.5 glass border border-white/10 text-slate-300 text-sm rounded-xl hover:border-white/30 hover:text-white transition-all">
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8 max-w-md mx-auto">
            {[
              { num: '120+', label: t.partners.countries },
              { num: '740+', label: t.partners.firms },
              { num: '25k+', label: t.partners.experts },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-blue-400">{s.num}</div>
                <div className="text-slate-400 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

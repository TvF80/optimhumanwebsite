import { motion } from 'framer-motion'

interface PartnersProps { t: any }
const vp = { once: true, amount: 0.1 }

export default function Partners({ t }: PartnersProps) {
  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-[#f0f4ff] to-[#0e1a3a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-500 text-sm font-semibold uppercase tracking-widest">Network</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-slate-800">{t.partners.title}</h2>
          <p className="text-slate-500 text-lg">{t.partners.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-light rounded-3xl p-8 card-3d"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">E</div>
              <div>
                <div className="font-bold text-slate-800 text-lg">EXCO A2A Polska</div>
                <div className="text-sm text-slate-500">Spółka-matka · od 1999</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{t.partners.excoDesc}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {['Audyt', 'Doradztwo', 'Consulting', '6 biur PL'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-light rounded-3xl p-8 card-3d"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">K</div>
              <div>
                <div className="font-bold text-slate-800 text-lg">KRESTON INTERNATIONAL</div>
                <div className="text-sm text-slate-500">Globalna sieć doradcza</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{t.partners.krestonDesc}</p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {['740+ biur', '108 krajów', 'Top 15 globalnie', 'Standardy jakości'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 text-center"
        >
          <div className="text-6xl mb-4">🌍</div>
          <div className="text-white text-2xl font-bold mb-2">108 krajów · 740+ biur</div>
          <div className="text-slate-400 text-sm">Globalny zasięg — lokalna wiedza</div>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            {['🇵🇱 Polska', '🇩🇪 Niemcy', '🇫🇷 Francja', '🇬🇧 UK', '🇺🇸 USA', '🇯🇵 Japonia'].map(c => (
              <span key={c} className="text-slate-300 text-sm">{c}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

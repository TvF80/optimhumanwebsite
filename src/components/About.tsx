import { motion } from 'framer-motion'

interface AboutProps { t: any }

const icons = ['🧩', '💡', '📈']
const vp = { once: true, amount: 0.1 }
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: vp,
  transition: { duration: 0.55, delay },
})

export default function About({ t }: AboutProps) {
  const values = [
    { icon: icons[0], title: t.about.value1Title, text: t.about.value1Text },
    { icon: icons[1], title: t.about.value2Title, text: t.about.value2Text },
    { icon: icons[2], title: t.about.value3Title, text: t.about.value3Text },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0f1e] to-[#f0f4ff]">
      {/* Circuit-board geometric pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cpath d='M0 50h40M60 50h40M50 0v40M50 60v40M35 50a15 15 0 1 1 30 0 15 15 0 0 1-30 0z' fill='none' stroke='%233b82f6' stroke-width='1.5'/%3E%3Ccircle cx='0' cy='50' r='3' fill='%233b82f6'/%3E%3Ccircle cx='100' cy='50' r='3' fill='%233b82f6'/%3E%3Ccircle cx='50' cy='0' r='3' fill='%233b82f6'/%3E%3Ccircle cx='50' cy='100' r='3' fill='%233b82f6'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px',
      }} />
      {/* Soft accent blobs */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div {...fadeUp()} className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Optim Human</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">{t.about.title}</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">{t.about.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-slate-200 text-lg leading-relaxed mb-6">{t.about.text1}</p>
            <p className="text-slate-300 text-base leading-relaxed">{t.about.text2}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                { label: t.about.founded, value: '2019' },
                { label: t.about.parent, value: 'EXCO A2A' },
                { label: t.about.network, value: 'KRESTON INT.' },
              ].map((b) => (
                <div key={b.label} className="glass rounded-xl px-4 py-3 border border-blue-500/20">
                  <div className="text-xs text-slate-400 mb-0.5">{b.label}</div>
                  <div className="text-sm font-bold text-blue-300">{b.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-amber-500" />
            {[
              { year: '1999', event: 'Założenie EXCO A2A Polska', color: 'bg-blue-500' },
              { year: '2018', event: 'Strategia i plan biznesowy Optim Human', color: 'bg-cyan-500' },
              { year: '2019', event: 'Oficjalne uruchomienie Optim Human Sp. z o.o.', color: 'bg-amber-500' },
              { year: '2026', event: 'Nowoczesna agencja HR w sieci KRESTON', color: 'bg-emerald-500' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={vp}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
                className="flex items-start gap-4 pl-10 pb-8 relative"
              >
                <div className={`absolute left-2.5 w-3 h-3 rounded-full ${item.color} ring-2 ring-white/20 top-1`} />
                <div>
                  <div className="text-xs font-bold text-blue-400 mb-0.5">{item.year}</div>
                  <div className="text-slate-200 text-sm">{item.event}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-light rounded-2xl p-6 card-3d cursor-default group"
            >
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">{v.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AboutProps { t: any }

const icons = ['🧩', '💡', '📈']

export default function About({ t }: AboutProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const values = [
    { icon: icons[0], title: t.about.value1Title, text: t.about.value1Text },
    { icon: icons[1], title: t.about.value2Title, text: t.about.value2Text },
    { icon: icons[2], title: t.about.value3Title, text: t.about.value3Text },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0a0f1e] to-[#f0f4ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Optim Human</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">
            {t.about.title}
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">{t.about.subtitle}</p>
        </motion.div>

        {/* Text + badges */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
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

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
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
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
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

        {/* Values cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
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

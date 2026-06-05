import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ServicesProps { t: any }

const serviceIcons = ['🔍', '👥', '📋', '⚙️', '⏱️', '🧭', '📊', '🌡️', '🏆', '🤝']
const serviceColors = [
  'from-blue-500/20 to-blue-600/10 border-blue-500/30',
  'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30',
  'from-amber-500/20 to-amber-600/10 border-amber-500/30',
  'from-purple-500/20 to-purple-600/10 border-purple-500/30',
  'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
  'from-rose-500/20 to-rose-600/10 border-rose-500/30',
  'from-indigo-500/20 to-indigo-600/10 border-indigo-500/30',
  'from-teal-500/20 to-teal-600/10 border-teal-500/30',
  'from-orange-500/20 to-orange-600/10 border-orange-500/30',
  'from-sky-500/20 to-sky-600/10 border-sky-500/30',
]
const accentColors = ['text-blue-400','text-cyan-400','text-amber-400','text-purple-400','text-emerald-400','text-rose-400','text-indigo-400','text-teal-400','text-orange-400','text-sky-400']
const vp = { once: true, amount: 0.05 }

export default function Services({ t }: ServicesProps) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#f0f4ff] to-[#0e1a3a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">HR Services</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-slate-800">{t.services.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {t.services.items.map((item: any, i: number) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              onClick={() => setSelected(i)}
              className={`text-left rounded-2xl p-5 border bg-gradient-to-br ${serviceColors[i]} card-3d group hover:border-opacity-60 transition-all duration-300`}
            >
              <div className="text-3xl mb-3">{serviceIcons[i]}</div>
              <h3 className={`font-bold text-base mb-2 ${accentColors[i]}`}>{item.title}</h3>
              <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">{item.short}</p>
              <div className={`mt-3 text-xs font-semibold ${accentColors[i]} flex items-center gap-1`}>
                {t.services.learnMore} <span>→</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-lg w-full rounded-3xl p-8 border bg-gradient-to-br ${serviceColors[selected]} glass shadow-2xl`}
            >
              <div className="text-5xl mb-4">{serviceIcons[selected]}</div>
              <h3 className={`text-2xl font-bold mb-3 ${accentColors[selected]}`}>
                {t.services.items[selected].title}
              </h3>
              <p className="text-slate-200 leading-relaxed mb-6">{t.services.items[selected].detail}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => { setSelected(null); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all text-sm"
                >
                  {t.nav?.cta || 'Kontakt'}
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="px-5 py-2.5 glass text-slate-200 hover:text-white font-medium rounded-xl transition-all text-sm border border-white/20"
                >
                  {t.services.close}
                </button>
              </div>
              <button onClick={() => setSelected(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl">✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

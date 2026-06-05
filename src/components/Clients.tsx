import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ClientsProps { t: any }
const vp = { once: true, amount: 0.1 }

export default function Clients({ t }: ClientsProps) {
  const [active, setActive] = useState(0)

  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-[#0a0f1e] to-[#f0f4ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Clients</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">{t.clients.title}</h2>
          <p className="text-slate-400 text-lg">{t.clients.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4 mb-6">
          {t.clients.items.map((item: any, i: number) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={vp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-2 p-5 rounded-2xl border transition-all duration-300 ${
                active === i
                  ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20'
                  : 'glass border-white/10 hover:border-white/30'
              }`}
            >
              <span className="text-3xl">{item.icon}</span>
              <span className={`text-sm font-semibold ${active === i ? 'text-white' : 'text-slate-300'}`}>
                {item.title}
              </span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="glass-light rounded-2xl p-8 text-center"
          >
            <span className="text-5xl">{t.clients.items[active].icon}</span>
            <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">{t.clients.items[active].title}</h3>
            <p className="text-slate-600 max-w-lg mx-auto">{t.clients.items[active].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

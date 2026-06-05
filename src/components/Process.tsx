import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProcessProps { t: any }

const stepColors = ['bg-blue-600', 'bg-cyan-500', 'bg-amber-500', 'bg-emerald-500']
const stepBorder = ['border-blue-500/40', 'border-cyan-500/40', 'border-amber-500/40', 'border-emerald-500/40']
const stepGlow = [
  'shadow-blue-500/30',
  'shadow-cyan-500/30',
  'shadow-amber-500/30',
  'shadow-emerald-500/30',
]
const stepRing = [
  'ring-blue-500/30',
  'ring-cyan-500/30',
  'ring-amber-500/30',
  'ring-emerald-500/30',
]
const vp = { once: true, amount: 0.1 }

export default function Process({ t }: ProcessProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0e1a3a] to-[#0a0f1e]">
      {/* Topographic wave lines */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cellipse cx='100' cy='100' rx='80' ry='30' fill='none' stroke='%2360a5fa' stroke-width='1'/%3E%3Cellipse cx='100' cy='100' rx='60' ry='22' fill='none' stroke='%2360a5fa' stroke-width='1'/%3E%3Cellipse cx='100' cy='100' rx='40' ry='15' fill='none' stroke='%2360a5fa' stroke-width='1'/%3E%3Cellipse cx='100' cy='100' rx='20' ry='8' fill='none' stroke='%2360a5fa' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
      }} />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-2xl opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #34d399, transparent)' }} />
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-2xl opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Process</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">{t.process.title}</h2>
          <p className="text-slate-400 text-lg">{t.process.subtitle}</p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 via-amber-500 to-emerald-500 opacity-50" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.process.steps.map((step: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Step number bubble */}
                <motion.div
                  animate={hovered === i ? { scale: 1.15 } : { scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className={`relative z-10 w-20 h-20 rounded-full ${stepColors[i]} flex items-center justify-center text-2xl font-bold text-white mb-5 shadow-lg ${stepGlow[i]}`}
                >
                  {i + 1}
                  <div className={`absolute inset-0 rounded-full ${stepColors[i]} opacity-30 animate-ping`} style={{ animationDuration: `${2 + i * 0.5}s` }} />
                </motion.div>

                {/* Card */}
                <motion.div
                  animate={hovered === i
                    ? { scale: 1.04, y: -6 }
                    : { scale: 1, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className={`glass rounded-2xl border ${stepBorder[i]} w-full overflow-hidden transition-shadow duration-300 ${hovered === i ? `shadow-xl ${stepGlow[i]} ring-1 ${stepRing[i]}` : ''}`}
                  style={{ zIndex: hovered === i ? 10 : 1, position: 'relative' }}
                >
                  <div className="p-5">
                    <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className={`px-5 pb-5 pt-0 border-t ${stepBorder[i]} mt-0`}>
                          <p className="text-slate-300 text-xs leading-relaxed pt-3">{step.extra}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

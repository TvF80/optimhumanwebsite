import { motion } from 'framer-motion'

interface ProcessProps { t: any }

const stepColors = ['bg-blue-600', 'bg-cyan-500', 'bg-amber-500', 'bg-emerald-500']
const stepBorder = ['border-blue-500/40', 'border-cyan-500/40', 'border-amber-500/40', 'border-emerald-500/40']
const vp = { once: true, amount: 0.1 }

export default function Process({ t }: ProcessProps) {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0e1a3a] to-[#0a0f1e]">
      {/* Topographic wave lines */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cellipse cx='100' cy='100' rx='80' ry='30' fill='none' stroke='%2360a5fa' stroke-width='1'/%3E%3Cellipse cx='100' cy='100' rx='60' ry='22' fill='none' stroke='%2360a5fa' stroke-width='1'/%3E%3Cellipse cx='100' cy='100' rx='40' ry='15' fill='none' stroke='%2360a5fa' stroke-width='1'/%3E%3Cellipse cx='100' cy='100' rx='20' ry='8' fill='none' stroke='%2360a5fa' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px',
      }} />
      {/* Corner accent */}
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
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 via-amber-500 to-emerald-500" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div className={`relative z-10 w-20 h-20 rounded-full ${stepColors[i]} flex items-center justify-center text-2xl font-bold text-white mb-5 shadow-lg`}>
                  {i + 1}
                  <div className={`absolute inset-0 rounded-full ${stepColors[i]} opacity-30 animate-ping`} style={{ animationDuration: `${2 + i * 0.5}s` }} />
                </div>
                <div className={`glass rounded-2xl p-5 border ${stepBorder[i]} w-full`}>
                  <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

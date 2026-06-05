import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ClientsProps { t: any }
const vp = { once: true, amount: 0.1 }

const caseStudies = [
  {
    icon: '👤',
    cases: [
      { title: 'Zmiana ścieżki kariery', result: '+40% wynagrodzenie', desc: 'Manager z branży retail przeszedł do sektora IT dzięki naszemu programowi coachingowemu i przygotowaniu do rozmów rekrutacyjnych.' },
      { title: 'Powrót na rynek pracy', result: '3 tygodnie', desc: 'Specjalistka po 5-letniej przerwie wróciła do pracy w finansach. Opracowaliśmy CV, przygotowaliśmy do AC i przedstawiliśmy 3 oferty.' },
      { title: 'Awans na stanowisko kierownicze', result: '100% realizacja', desc: 'Program mentoringowy + assessment DISC pomógł przygotować się do roli Dyrektora Operacyjnego w firmie produkcyjnej.' },
    ],
  },
  {
    icon: '🏢',
    cases: [
      { title: 'Rekrutacja działu sprzedaży', result: '15 osób / 8 tyg.', desc: 'Zbudowaliśmy dział handlowy od podstaw dla firmy logistycznej — profilowanie stanowisk, selekcja i onboarding.' },
      { title: 'Outsourcing kadrowy', result: 'oszczędność 35%', desc: 'Przejęliśmy pełną obsługę kadrowo-płacową dla firmy produkcyjnej z 80 pracownikami. Wdrożyliśmy w 2 tygodnie.' },
      { title: 'Projekt HR Interim', result: '4 miesiące', desc: 'Nasz konsultant zarządzał działem HR podczas wdrożenia nowego systemu ERP i nieobecności CHRO.' },
    ],
  },
  {
    icon: '⭐',
    cases: [
      { title: 'Employer Branding dla banku', result: '3× więcej aplikacji', desc: 'Strategia EB dla instytucji finansowej: audit EVP, kampania LinkedIn, program ambasadorski dla 500+ pracowników.' },
      { title: 'Diagnoza klimatu organizacyjnego', result: 'NPS +28 pkt', desc: 'Mozaika Klimatyczna w korporacji z 300 osobami — zidentyfikowaliśmy kluczowe obszary do poprawy i wdrożyliśmy plan działania.' },
      { title: 'Program Leadership Development', result: '20 menedżerów', desc: 'Ścieżka rozwojowa oparta na TTI Success Insights dla kadry kierowniczej w spółce notowanej na GPW.' },
    ],
  },
  {
    icon: '💼',
    cases: [
      { title: 'HR Due Diligence', result: 'pre-akwizycja', desc: 'Audyt HR dla funduszu PE przed przejęciem spółki e-commerce — ocena struktury, wynagrodzeń i ryzyk kadrowych.' },
      { title: 'Restrukturyzacja HR portfela', result: '3 spółki', desc: 'Post-merger: standaryzacja procesów HR w 3 spółkach portfelowych funduszu VC, wdrożenie wspólnych procedur.' },
      { title: 'Rekrutacja C-level', result: 'CFO + COO', desc: 'Executive search dla spółki inwestycyjnej — wyłoniliśmy CFO i COO w 10 tygodni, w pełni zgodnie z profilem.' },
    ],
  },
  {
    icon: '🚀',
    cases: [
      { title: 'HR od zera do 30 FTE', result: '6 miesięcy', desc: 'Startup FinTech: stworzyliśmy politykę HR, regulamin pracy, system wynagrodzeń i przeprowadziliśmy pierwsze 15 rekrutacji.' },
      { title: 'Praca tymczasowa w scale-up', result: '+12 osób w 2 tyg.', desc: 'E-commerce w szczycie sezonu: dostarczyliśmy 12 pracowników operacyjnych w 2 tygodnie, z pełną obsługą formalną.' },
      { title: 'Employer Branding dla młodej marki', result: '500% więcej CV', desc: 'Strategia EB dla start-upu medtech — profil LinkedIn, strona kariery i kampania na uczelniach technicznych.' },
    ],
  },
]

export default function Clients({ t }: ClientsProps) {
  const [active, setActive] = useState(0)

  return (
    <section id="clients" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #f0f4ff 100%)' }}>
      {/* Hexagonal grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 17.3V34.7L30 52L0 34.7V17.3z' fill='none' stroke='%233b82f6' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '60px 52px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #f59e0b 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.55 }} className="text-center mb-16">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Clients</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">{t.clients.title}</h2>
          <p className="text-slate-400 text-lg">{t.clients.subtitle}</p>
        </motion.div>

        {/* Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {t.clients.items.map((item: any, i: number) => (
            <motion.button key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 ${active === i ? 'bg-blue-600/20 border-blue-500 shadow-lg shadow-blue-500/20' : 'glass border-white/10 hover:border-white/30'}`}>
              <span className="text-2xl">{item.icon}</span>
              <span className={`text-xs font-semibold text-center leading-tight ${active === i ? 'text-white' : 'text-slate-300'}`}>{item.title}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}>
            {/* Header */}
            <div className="glass-light rounded-2xl p-6 mb-6 flex items-center gap-4">
              <span className="text-4xl">{t.clients.items[active].icon}</span>
              <div>
                <h3 className="text-xl font-bold text-slate-800">{t.clients.items[active].title}</h3>
                <p className="text-slate-600">{t.clients.items[active].desc}</p>
              </div>
            </div>

            {/* Case studies */}
            <div className="grid sm:grid-cols-3 gap-5">
              {caseStudies[active].cases.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-xs font-bold rounded-full mb-3 border border-blue-500/20">
                    ✓ {c.result}
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">{c.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

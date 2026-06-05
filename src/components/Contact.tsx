import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactProps { t: any; lang: string }

const serviceOptions = {
  pl: ['Interim Recruiter', 'Rekrutacja i selekcja', 'Outsourcing kadr i płac', 'Procesy HR', 'Praca tymczasowa', 'Konsulting HR', 'TTI Success Insights', 'Mozaika Klimatyczna', 'Employee Branding', 'Leasing pracowniczy', 'Inne'],
  en: ['Interim Recruiter', 'Recruitment & Selection', 'HR & Payroll Outsourcing', 'HR Processes', 'Temporary Work', 'HR Consulting', 'TTI Success Insights', 'Mozaika Klimatyczna', 'Employee Branding', 'Employee Leasing', 'Other'],
  fr: ['Recruteur Intérimaire', 'Recrutement & Sélection', 'Externalisation RH & Paie', 'Processus RH', 'Travail Temporaire', 'Conseil RH', 'TTI Success Insights', 'Mozaika Klimatyczna', 'Marque Employeur', 'Portage Salarial', 'Autre'],
}
const vp = { once: true, amount: 0.05 }

export default function Contact({ t, lang }: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const subject = `[Optim Human] ${form.service || 'Zapytanie'} — ${form.name}`
    const body = `Imię i nazwisko: ${form.name}\nE-mail: ${form.email}\nTelefon: ${form.phone}\nUsługa: ${form.service}\n\nWiadomość:\n${form.message}`
    window.location.href = `mailto:biuro@optimhuman.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setTimeout(() => { setLoading(false); setSent(true) }, 800)
  }

  const opts = serviceOptions[lang as keyof typeof serviceOptions] || serviceOptions.pl

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0e1a3a] to-[#061229]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="text-rose-400 text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">{t.contact.title}</h2>
          <p className="text-slate-400 text-lg">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-8">
              <AnimatePresence>
                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t.contact.successMsg}</h3>
                    <button onClick={() => setSent(false)} className="mt-4 text-blue-400 hover:text-blue-300 text-sm">← Wyślij kolejną wiadomość</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input required type="text" placeholder={t.contact.namePlaceholder} value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all" />
                      <input required type="email" placeholder={t.contact.emailPlaceholder} value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="tel" placeholder={t.contact.phonePlaceholder} value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all" />
                      <select value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                        className="w-full bg-[#0e1a3a] border border-white/10 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-blue-500 transition-all">
                        <option value="">{t.contact.servicePlaceholder}</option>
                        {opts.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <textarea required rows={5} placeholder={t.contact.messagePlaceholder} value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-all resize-none" />
                    <button type="submit" disabled={loading}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 text-base">
                      {loading ? t.contact.sending : t.contact.send}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {[
              { icon: '📍', label: 'Adres', value: t.contact.address },
              { icon: '📞', label: 'Telefon', value: '(+48) 22 847 61 17', href: 'tel:+48228476117' },
              { icon: '✉️', label: 'E-mail', value: 'biuro@optimhuman.com', href: 'mailto:biuro@optimhuman.com' },
              { icon: '🕐', label: 'Godziny', value: t.contact.hours },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-5 flex items-start gap-4">
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-blue-300 hover:text-blue-200 font-medium text-sm transition-colors">{item.value}</a>
                  ) : (
                    <div className="text-slate-200 text-sm">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
            <div className="glass rounded-2xl overflow-hidden h-40">
              <iframe
                title="Optim Human location"
                src="https://maps.google.com/maps?q=ul.+Pileckiego+67,+Warszawa&output=embed"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

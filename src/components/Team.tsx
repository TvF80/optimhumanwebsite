import { motion } from 'framer-motion'

interface TeamProps { t: any }
const vp = { once: true, amount: 0.1 }

const team = [
  {
    name: 'Raphael Vieuxmaire',
    role: { pl: 'Współzałożyciel · Prezes Zarządu', en: 'Co-founder · President', fr: 'Co-fondateur · Président' },
    bio: {
      pl: 'Współtwórca i prezes Optim Human. Strateg i lider z wieloletnim doświadczeniem w budowaniu organizacji doradczych. Nadzoruje kierunek strategiczny firmy i relacje z kluczowymi partnerami.',
      en: 'Co-creator and President of Optim Human. Strategist and leader with many years of experience building advisory organisations. Oversees the company\'s strategic direction and key partner relationships.',
      fr: 'Co-créateur et Président d\'Optim Human. Stratège et leader avec de nombreuses années d\'expérience dans la construction d\'organisations de conseil.',
    },
    initials: 'RV',
    color: 'from-blue-600 to-blue-800',
    linkedin: null,
    tags: { pl: ['Strategia', 'Leadership', 'Business Development'], en: ['Strategy', 'Leadership', 'Business Development'], fr: ['Stratégie', 'Leadership', 'Développement commercial'] },
  },
  {
    name: 'Laurent Le Pajolec',
    role: { pl: 'Współzałożyciel · Główny Doradca i Mentor', en: 'Co-founder · Senior Advisor & Mentor', fr: 'Co-fondateur · Conseiller Senior & Mentor' },
    bio: {
      pl: 'Członek Zarządu EXCO A2A Polska oraz Optim Human. Ekspert w dziedzinie doradztwa biznesowego, finansów i zarządzania. Mentor i architekt modelu biznesowego grupy EXCO w Polsce. Prezes Corporate Advisors Poland.',
      en: 'Board Member at EXCO A2A Polska and Optim Human. Expert in business advisory, finance and management. Mentor and architect of the EXCO business model in Poland. President of Corporate Advisors Poland.',
      fr: 'Membre du Conseil d\'Administration d\'EXCO A2A Polska et Optim Human. Expert en conseil aux entreprises, finance et management. Mentor et architecte du modèle commercial du groupe EXCO en Pologne.',
    },
    initials: 'LLP',
    color: 'from-amber-500 to-amber-700',
    linkedin: 'https://www.linkedin.com/in/laurent-le-pajolec-19359ab/',
    tags: { pl: ['Doradztwo biznesowe', 'Finanse', 'Zarządzanie', 'EXCO Group'], en: ['Business Advisory', 'Finance', 'Management', 'EXCO Group'], fr: ['Conseil aux entreprises', 'Finance', 'Management', 'Groupe EXCO'] },
  },
  {
    name: 'Dagmara Jaśkowska',
    role: { pl: 'Head of Operations & HR Business Partner', en: 'Head of Operations & HR Business Partner', fr: 'Head of Operations & HR Business Partner' },
    bio: {
      pl: 'Certyfikowany praktyk DISC & WPMOT (TTI Success Insights). Absolwentka Uniwersytetu SWPS. Specjalistka rekrutacji, konsultingu HR i zarządzania talentami. Prowadzi operacje Optim Human i buduje relacje z klientami.',
      en: 'Certified DISC & WPMOT Practitioner (TTI Success Insights). Graduate of SWPS University. Specialist in recruitment, HR consulting and talent management. Runs Optim Human operations and builds client relationships.',
      fr: 'Praticienne certifiée DISC & WPMOT (TTI Success Insights). Diplômée de l\'Université SWPS. Spécialiste en recrutement, conseil RH et gestion des talents.',
    },
    initials: 'DJ',
    color: 'from-cyan-500 to-cyan-700',
    linkedin: 'https://www.linkedin.com/in/dagmara-jaskowska/',
    tags: { pl: ['DISC Certified', 'Rekrutacja', 'Talent Management', 'HR Consulting'], en: ['DISC Certified', 'Recruitment', 'Talent Management', 'HR Consulting'], fr: ['DISC Certifiée', 'Recrutement', 'Gestion des talents', 'Conseil RH'] },
  },
]

export default function Team({ t, lang }: TeamProps & { lang: string }) {
  const l = (lang as 'pl' | 'en' | 'fr') || 'pl'

  return (
    <section id="team" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0e1a3a 100%)' }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.55 }} className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Team</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">{t.team.title}</h2>
          <p className="text-slate-400 text-lg">{t.team.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="glass rounded-3xl p-7 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Avatar */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold text-white mb-5 shadow-xl ring-4 ring-white/10 group-hover:ring-white/20 transition-all`}>
                {member.initials}
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-blue-400 text-sm font-medium mb-4">{member.role[l]}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{member.bio[l]}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-5">
                {member.tags[l].map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-white/5 text-slate-300 text-xs rounded-full border border-white/10">{tag}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-auto">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-[#0077B5] hover:bg-[#006699] text-white text-xs font-semibold rounded-lg transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    {t.team.linkedinBtn}
                  </a>
                )}
                <a href="#contact"
                  onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="px-4 py-2 glass hover:bg-white/10 text-slate-200 text-xs font-semibold rounded-lg transition-all border border-white/10">
                  {t.team.contactBtn}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

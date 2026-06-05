import { motion } from 'framer-motion'

interface LinkedInProps { t: any }
const vp = { once: true, amount: 0.1 }

const posts = [
  {
    date: 'Maj 2026',
    text: 'Rynek pracy w Polsce zmienia się dynamicznie. W Optim Human obserwujemy rosnące zapotrzebowanie na specjalistów HR z kompetencjami analitycznymi. Czy Twoja firma jest gotowa na te zmiany?',
    likes: 47,
    tag: 'HR Trends',
    color: 'border-blue-500/40',
  },
  {
    date: 'Kwiecień 2026',
    text: 'Outsourcing kadr i płac to nie tylko oszczędność czasu — to strategiczna decyzja, która pozwala skupić się na tym, co naprawdę ważne: rozwoju biznesu. Sprawdź jak możemy pomóc Twojej firmie.',
    likes: 63,
    tag: 'Outsourcing',
    color: 'border-cyan-500/40',
  },
  {
    date: 'Marzec 2026',
    text: 'Assessment DISC to jedno z najpotężniejszych narzędzi w rekrutacji. W Optim Human jesteśmy certyfikowanymi praktykami TTI Success Insights. Dowiedz się, jak lepiej poznać potencjał kandydatów.',
    likes: 89,
    tag: 'DISC & TTI',
    color: 'border-amber-500/40',
  },
]

export default function LinkedIn({ t }: LinkedInProps) {
  return (
    <section id="linkedin" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #061229 0%, #0a0f1e 100%)' }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(135deg, #0077B5 0%, transparent 50%)', pointerEvents: 'none' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.55 }} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0077B5] rounded-2xl mb-4 shadow-lg shadow-[#0077B5]/30">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-white">{t.linkedin.title}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.linkedin.subtitle}</p>
        </motion.div>

        {/* Posts preview */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.linkedin.com/company/optim-human/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`glass rounded-2xl p-6 border ${post.color} hover:bg-white/8 transition-all duration-300 hover:-translate-y-1 cursor-pointer block`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 bg-[#0077B5]/20 text-[#4fb3df] text-xs font-semibold rounded-full border border-[#0077B5]/30">{post.tag}</span>
                <span className="text-slate-500 text-xs">{post.date}</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-4">{post.text}</p>
              <div className="flex items-center gap-1 text-slate-500 text-xs">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                {post.likes} · Optim Human
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.linkedin.com/company/optim-human/posts/?feedView=all" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0077B5] hover:bg-[#006699] text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#0077B5]/30 hover:-translate-y-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            {t.linkedin.viewAll}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface HeroProps { t: any }

export default function Hero({ t }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    type Particle = {
      x: number; y: number; vx: number; vy: number
      life: number; maxLife: number; r: number; color: string; trail: {x:number;y:number}[]
    }

    const particles: Particle[] = []
    const colors = ['#3b82f6', '#06b6d4', '#f59e0b', '#8b5cf6', '#10b981', '#f43f5e']

    const burst = (cx: number, cy: number) => {
      const count = 60 + Math.random() * 40
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3
        const speed = 2 + Math.random() * 6
        particles.push({
          x: cx, y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          life: 1, maxLife: 0.6 + Math.random() * 0.6,
          r: 1.5 + Math.random() * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          trail: [],
        })
      }
    }

    // Initial bursts
    const w = canvas.width, h = canvas.height
    setTimeout(() => burst(w * 0.3, h * 0.35), 200)
    setTimeout(() => burst(w * 0.7, h * 0.25), 500)
    setTimeout(() => burst(w * 0.5, h * 0.45), 800)
    setTimeout(() => burst(w * 0.2, h * 0.55), 1100)
    setTimeout(() => burst(w * 0.8, h * 0.4), 1400)

    // Ambient floating dots
    type Dot = { x: number; y: number; vx: number; vy: number; r: number; alpha: number }
    const dots: Dot[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 0.5 + Math.random() * 1.5,
      alpha: 0.1 + Math.random() * 0.4,
    }))

    const draw = () => {
      ctx.fillStyle = 'rgba(10,15,30,0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Ambient dots
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0) d.x = canvas.width
        if (d.x > canvas.width) d.x = 0
        if (d.y < 0) d.y = canvas.height
        if (d.y > canvas.height) d.y = 0
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59,130,246,${d.alpha})`
        ctx.fill()
      })

      // Firework particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.trail.push({ x: p.x, y: p.y })
        if (p.trail.length > 6) p.trail.shift()

        p.x += p.vx; p.y += p.vy
        p.vy += 0.08
        p.vx *= 0.98
        p.life -= 0.012 / p.maxLife

        if (p.life <= 0) { particles.splice(i, 1); continue }

        const alpha = Math.max(0, p.life)
        // Trail
        if (p.trail.length > 1) {
          ctx.beginPath()
          ctx.moveTo(p.trail[0].x, p.trail[0].y)
          p.trail.forEach(pt => ctx.lineTo(pt.x, pt.y))
          ctx.strokeStyle = p.color + Math.floor(alpha * 80).toString(16).padStart(2,'0')
          ctx.lineWidth = p.r * 0.5
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.floor(alpha * 255).toString(16).padStart(2,'0')
        ctx.shadowBlur = 6
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  const words = t.hero.tagline.split(' ')

  const stats = [
    { value: 108, suffix: '', label: t.hero.stat1 },
    { value: 740, suffix: '+', label: t.hero.stat2 },
    { value: 25, suffix: '+', label: t.hero.stat3 },
    { value: 10, suffix: '', label: t.hero.stat4 },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e]/40 via-transparent to-[#0a0f1e]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-blue-300 mb-8 border border-blue-500/30"
        >
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          EXCO A2A Polska · KRESTON INTERNATIONAL
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
          {words.map((word: string, i: number) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="inline-block mr-3"
            >
              {i === words.length - 1 ? (
                <span className="text-gradient">{word}</span>
              ) : word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/40 hover:shadow-blue-500/50 hover:-translate-y-1 text-lg"
          >
            {t.hero.cta1} ↓
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-1 text-lg border border-white/20"
          >
            {t.hero.cta2}
          </button>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-16 mb-8"
      >
        <div className="glass rounded-2xl p-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">
                {statsInView ? (
                  <CountUp end={s.value} duration={2.5} delay={i * 0.2} />) : '0'}
                {s.suffix}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

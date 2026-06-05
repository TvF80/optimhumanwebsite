import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface PartnersProps { t: any }
const vp = { once: true, amount: 0.1 }

const countries = [
  { flag: '🇵🇱', name: 'Polska' }, { flag: '🇫🇷', name: 'Francja' },
  { flag: '🇩🇪', name: 'Niemcy' }, { flag: '🇬🇧', name: 'W. Brytania' },
  { flag: '🇧🇪', name: 'Belgia' }, { flag: '🇳🇱', name: 'Holandia' },
  { flag: '🇨🇭', name: 'Szwajcaria' }, { flag: '🇨🇿', name: 'Czechy' },
  { flag: '🇸🇰', name: 'Słowacja' }, { flag: '🇦🇹', name: 'Austria' },
  { flag: '🇺🇸', name: 'USA' }, { flag: '🇨🇦', name: 'Kanada' },
]

function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const size = 300
    canvas.width = size
    canvas.height = size
    const cx = size / 2
    const cy = size / 2
    const r = size * 0.42
    let angle = 0
    let animId: number

    function drawGlobe(t: number) {
      ctx!.clearRect(0, 0, size, size)

      // Outer glow
      const glow = ctx!.createRadialGradient(cx, cy, r * 0.6, cx, cy, r + 20)
      glow.addColorStop(0, 'rgba(59,130,246,0.0)')
      glow.addColorStop(1, 'rgba(59,130,246,0.12)')
      ctx!.beginPath()
      ctx!.arc(cx, cy, r + 20, 0, Math.PI * 2)
      ctx!.fillStyle = glow
      ctx!.fill()

      // Sphere body
      const sphere = ctx!.createRadialGradient(cx - r * 0.3, cy - r * 0.3, r * 0.05, cx, cy, r)
      sphere.addColorStop(0, 'rgba(37,99,235,0.92)')
      sphere.addColorStop(0.45, 'rgba(15,23,42,0.95)')
      sphere.addColorStop(1, 'rgba(3,7,18,0.98)')
      ctx!.beginPath()
      ctx!.arc(cx, cy, r, 0, Math.PI * 2)
      ctx!.fillStyle = sphere
      ctx!.fill()

      // Latitude lines
      for (let lat = -75; lat <= 75; lat += 25) {
        const latRad = (lat * Math.PI) / 180
        const y = cy - r * Math.sin(latRad)
        const rLat = r * Math.cos(latRad)
        ctx!.beginPath()
        ctx!.ellipse(cx, y, rLat, rLat * 0.14, 0, 0, Math.PI * 2)
        ctx!.strokeStyle = 'rgba(59,130,246,0.22)'
        ctx!.lineWidth = 0.8
        ctx!.stroke()
      }

      // Longitude lines (rotating with globe)
      for (let i = 0; i < 9; i++) {
        const a = t + (i * Math.PI) / 4.5
        const cosA = Math.cos(a)
        ctx!.beginPath()
        ctx!.strokeStyle = `rgba(59,130,246,${0.06 + Math.abs(cosA) * 0.20})`
        ctx!.lineWidth = 0.8
        for (let lat = -88; lat <= 88; lat += 4) {
          const latRad = (lat * Math.PI) / 180
          const px = cx + r * Math.cos(latRad) * cosA
          const py = cy - r * Math.sin(latRad)
          if (lat === -88) ctx!.moveTo(px, py)
          else ctx!.lineTo(px, py)
        }
        ctx!.stroke()
      }

      // Points of presence
      const points: [number, number][] = [
        [52.2, 21.0],   // Warsaw
        [48.9, 2.4],    // Paris
        [51.5, -0.1],   // London
        [52.4, 13.4],   // Berlin
        [50.1, 14.4],   // Prague
        [47.4, 8.5],    // Zurich
        [50.8, 4.3],    // Brussels
        [40.7, -74.0],  // New York
        [43.7, -79.4],  // Toronto
        [35.7, 139.7],  // Tokyo
      ]
      points.forEach(([lat, lon]) => {
        const latRad = (lat * Math.PI) / 180
        const lonRad = (lon * Math.PI) / 180 + t
        const cosLon = Math.cos(lonRad)
        if (cosLon < 0) return
        const px = cx + r * Math.cos(latRad) * cosLon
        const py = cy - r * Math.sin(latRad)
        const b = cosLon
        // Dot
        ctx!.beginPath()
        ctx!.arc(px, py, 3, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(96,165,250,${b})`
        ctx!.fill()
        // Halo
        ctx!.beginPath()
        ctx!.arc(px, py, 6, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(96,165,250,${b * 0.18})`
        ctx!.fill()
      })

      // Sheen
      const sheen = ctx!.createRadialGradient(cx - r * 0.32, cy - r * 0.32, 0, cx - r * 0.15, cy - r * 0.15, r * 0.75)
      sheen.addColorStop(0, 'rgba(255,255,255,0.12)')
      sheen.addColorStop(1, 'rgba(255,255,255,0.00)')
      ctx!.beginPath()
      ctx!.arc(cx, cy, r, 0, Math.PI * 2)
      ctx!.fillStyle = sheen
      ctx!.fill()
    }

    function tick() {
      angle += 0.004
      drawGlobe(angle)
      animId = requestAnimationFrame(tick)
    }
    tick()
    return () => cancelAnimationFrame(animId)
  }, [])

  return <canvas ref={canvasRef} className="drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]" style={{ width: 300, height: 300 }} />
}

function WavingFlag({ flag, delay }: { flag: string; delay: number }) {
  return (
    <motion.span
      className="text-3xl inline-block select-none"
      animate={{ rotate: [-5, 5, -5], y: [0, -3, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {flag}
    </motion.span>
  )
}

export default function Partners({ t }: PartnersProps) {
  return (
    <section id="partners" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #0a0f1e 100%)' }}>
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 55 }).map((_, i) => (
          <motion.div key={i} className="absolute w-px h-px bg-white rounded-full"
            style={{ left: `${(i * 17.3) % 100}%`, top: `${(i * 23.7) % 100}%`, opacity: 0.15 + (i % 5) * 0.1 }}
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: 2.5 + (i % 4), repeat: Infinity, delay: (i % 7) * 0.4 }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Ecosystem header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.55 }} className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Ecosystem</span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4 text-slate-800">{t.partners.title}</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t.partners.subtitle}</p>
        </motion.div>

        {/* Partner cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* EXCO */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.55 }}
            className="rounded-3xl p-8 border border-blue-200/60 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-1 group"
            style={{ background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)' }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 shadow-sm p-2">
                <img src="/exco-logo.svg" alt="EXCO A2A" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg leading-tight">EXCO A2A Polska</h3>
                <span className="text-blue-600 text-xs font-semibold uppercase tracking-wide">Właściciel · Spółka matka</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{t.partners.exco}</p>
            <div className="flex flex-wrap gap-2">
              {['Audyt', 'Podatki', 'Księgowość', 'Doradztwo prawne', '6 biur PL'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-100">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Kreston */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl p-8 border border-slate-200/60 hover:border-slate-400/60 transition-all duration-300 hover:-translate-y-1 group"
            style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm p-2.5">
                <img src="/kreston-logo.svg" alt="Kreston" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg leading-tight">Kreston International</h3>
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wide">Sieć globalna · Top 10 worldwide</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{t.partners.kreston}</p>
            <div className="flex flex-wrap gap-2">
              {['120+ krajów', '25 000+ ekspertów', 'Audyt', 'Podatki', 'Advisory'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-200">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Globe section header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.55 }} className="text-center mb-12">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Global Reach</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-3 text-white">{t.partners.globalTitle}</h2>
          <p className="text-slate-400 max-w-xl mx-auto">{t.partners.globalSubtitle}</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Animated Globe */}
          <motion.div initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.7 }}
            className="flex-shrink-0 flex items-center justify-center">
            <AnimatedGlobe />
          </motion.div>

          {/* Flags + stats */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-8">
              {countries.map((c, i) => (
                <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.05 }}
                  className="glass rounded-2xl p-3 flex flex-col items-center gap-1.5 border border-white/10 hover:border-white/25 transition-all group">
                  <WavingFlag flag={c.flag} delay={(i * 0.18) % 1.5} />
                  <span className="text-slate-400 text-xs font-medium group-hover:text-white transition-colors text-center">{c.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {([
                { num: '120+', key: 'countries' },
                { num: '740+', key: 'firms' },
                { num: '25k+', key: 'experts' },
              ] as const).map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass rounded-2xl p-4 text-center border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">{s.num}</div>
                  <div className="text-slate-400 text-xs mt-1">{t.partners[s.key]}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

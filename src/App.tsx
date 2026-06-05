import { useEffect, useState } from 'react'
import { useLang } from './hooks/useLang'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Clients from './components/Clients'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  const { lang, setLang, t } = useLang()
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const handler = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <>
      <div
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      <Navbar lang={lang} setLang={setLang} t={t} />

      <main>
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Process t={t} />
        <Clients t={t} />
        <Partners t={t} />
        <Contact t={t} lang={lang} />
      </main>

      <Footer t={t} lang={lang} setLang={setLang} />
    </>
  )
}

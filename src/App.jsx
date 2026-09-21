import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Flower from './components/Flower'
import FloatingParticles from './components/FloatingParticles'
import Envelope from './components/Envelope'
import './App.css'

function App() {
  const [bloomed, setBloomed] = useState(false)
  const [letterOpen, setLetterOpen] = useState(false)
  const letterTrigger = useRef(null)
  const reduceMotion = useReducedMotion()
  const openLetter = () => { letterTrigger.current = document.activeElement; setLetterOpen(true) }
  const closeLetter = () => { setLetterOpen(false); requestAnimationFrame(() => letterTrigger.current?.focus?.()) }
  return <main className="gift">
    <FloatingParticles active={bloomed} />
    <section className="scene" aria-hidden={letterOpen}>
      <motion.div className="intro" initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 1.1 }}>
        <p className="date">21 de septiembre</p><h1>Para mi flor amarilla favorita.</h1>
        <p className="lead">Hay flores que se regalan una vez.<br />Esta es para que la tengas siempre.</p>
      </motion.div>
      <div className="flower-area"><Flower bloomed={bloomed} onBloom={() => setBloomed(true)} /></div>
      <AnimatePresence>{!bloomed ? <motion.p className="touch-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: .7 }}>Toca la flor, mi amor <span>✦</span></motion.p> :
        <motion.div className="after-bloom" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .7 }}><p>Hoy no pude llevarte flores amarillas, así que decidí hacerte una que nunca se marchite.</p><button ref={letterTrigger} type="button" className="letter-cta" onClick={openLetter}>Tengo una carta para ti <span aria-hidden="true">💌</span></button></motion.div>}</AnimatePresence>
    </section>
    <AnimatePresence>{letterOpen && <Envelope onClose={closeLetter} />}</AnimatePresence>
  </main>
}
export default App

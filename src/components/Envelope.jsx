import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { X } from 'lucide-react'
import letter from '../content/letter'

export default function Envelope({ onClose }) {
  const reduceMotion = useReducedMotion()
  const [stage, setStage] = useState(reduceMotion ? 'reading' : 'closed')
  const [surprise, setSurprise] = useState(false)

  useEffect(() => {
    if (reduceMotion) return undefined
    const opening = window.setTimeout(() => setStage('opening'), 650)
    const extracting = window.setTimeout(() => setStage('extracting'), 1250)
    const reading = window.setTimeout(() => setStage('reading'), 2350)
    return () => [opening, extracting, reading].forEach(window.clearTimeout)
  }, [reduceMotion])

  return (
    <motion.section className="letter-layer" role="dialog" aria-modal="true" aria-label="Carta para Eelin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className={'envelope-scene stage-' + stage}>
        <motion.div className="envelope-back" animate={{ opacity: stage === 'reading' ? 0 : 1, scale: stage === 'reading' ? .9 : 1 }} transition={{ duration: .35 }}>
          <motion.div className="envelope-flap" animate={{ rotateX: stage === 'opening' || stage === 'extracting' || stage === 'reading' ? -178 : 0 }} transition={{ duration: .55, ease: [0.22, .72, .25, 1] }}><span className="envelope-seal">E</span></motion.div>
          <div className="envelope-back-panel" />
        </motion.div>
        <motion.div className="letter-preview" animate={{ y: stage === 'extracting' ? -116 : 30, opacity: stage === 'extracting' ? 1 : 0 }} transition={{ duration: .75, ease: [0.2, .72, .22, 1] }} aria-hidden="true"><span>Mi amor:</span><i /><i /><i /></motion.div>
        <motion.div className="envelope-front" animate={{ opacity: stage === 'reading' ? 0 : 1 }} transition={{ duration: .3 }} aria-hidden="true"><span className="front-left" /><span className="front-right" /></motion.div>
        <AnimatePresence>{stage === 'reading' && <motion.article className="paper" initial={{ opacity: 0, y: 28, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduceMotion ? 0 : .48, ease: 'easeOut' }}>
          <button className="close-letter" type="button" onClick={onClose} aria-label="Cerrar carta"><X size={18} /></button>
          <div className="paper-content">{letter.paragraphs.map((paragraph, index) => <p key={index} className={paragraph === 'Mi amor:' || paragraph === 'Con todo mi amor,' ? 'letter-greeting' : ''}>{paragraph}</p>)}
            <p className="signature">Tu moreno <span>💛</span></p><div className="surprise"><button type="button" onClick={() => setSurprise(!surprise)} aria-expanded={surprise} className="heart-button"><span aria-hidden="true">♥</span>Un último detallito para ti</button>
            <AnimatePresence>{surprise && <motion.div className="surprise-message" initial={{ opacity: 0, height: 0, y: -7 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0 }}><span>✦</span> Si pudiera elegir entre regalarte mil flores o vivir mil momentos contigo, elegiría los momentos contigo. Siempre. <span>✦</span></motion.div>}</AnimatePresence></div>
          </div>
        </motion.article>}</AnimatePresence>
      </div>
    </motion.section>
  )
}

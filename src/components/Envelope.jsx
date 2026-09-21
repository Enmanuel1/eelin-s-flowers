import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { X } from 'lucide-react'
import letter from '../content/letter'
export default function Envelope({ onClose }) {
  const [surprise, setSurprise] = useState(false)
  const reduceMotion = useReducedMotion()
  return <motion.section className="letter-layer" role="dialog" aria-modal="true" aria-label="Carta para Eelin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.div className="envelope-scene" initial={{ scale: .9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .55 }}>
      <div className="envelope" aria-hidden="true"><span className="envelope-flap" /><span className="envelope-fold fold-left" /><span className="envelope-fold fold-right" /></div>
      <motion.article className="paper" initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: reduceMotion ? 0 : .35, duration: reduceMotion ? 0 : .7, ease: 'easeOut' }}>
        <button className="close-letter" type="button" onClick={onClose} aria-label="Cerrar carta"><X size={18} /></button>
        <div className="paper-content">{letter.paragraphs.map((paragraph, index) => <p key={index} className={paragraph === 'Mi amor:' || paragraph === 'Con todo mi amor,' ? 'letter-greeting' : ''}>{paragraph}</p>)}
          <p className="signature">Tu Enmanuel <span>💛</span></p><div className="surprise"><button type="button" onClick={() => setSurprise(!surprise)} aria-expanded={surprise} className="heart-button"><span aria-hidden="true">♥</span>Un último detallito para ti</button>
          <AnimatePresence>{surprise && <motion.div className="surprise-message" initial={{ opacity: 0, height: 0, y: -7 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0 }}><span>✦</span> Si pudiera elegir entre regalarte mil flores o vivir mil momentos contigo, elegiría los momentos contigo. Siempre. <span>✦</span></motion.div>}</AnimatePresence></div>
        </div>
      </motion.article>
    </motion.div>
  </motion.section>
}

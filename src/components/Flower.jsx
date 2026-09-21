import { motion, useReducedMotion } from 'motion/react'
const petals = Array.from({ length: 12 })
export default function Flower({ bloomed, onBloom }) {
  const reduceMotion = useReducedMotion()
  return <button className={'flower-button ' + (bloomed ? 'is-bloomed' : '')} type="button" onClick={onBloom} aria-label={bloomed ? 'La flor amarilla ha florecido' : 'Toca para hacer florecer la flor amarilla'}>
    <motion.span className="flower" animate={bloomed && !reduceMotion ? { rotate: [0, .8, 0, -.8, 0], y: [0, -3, 0] } : {}} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}>
      <span className="stem" /><span className="leaf leaf-left" /><span className="leaf leaf-right" /><span className="bloom-glow" />
      <span className="petal-ring" aria-hidden="true">{petals.map((_, i) => <span className="petal" style={{ '--i': i }} key={i} />)}</span>
      <span className="flower-center"><i /><i /><i /><i /><i /><i /></span>
    </motion.span>
  </button>
}

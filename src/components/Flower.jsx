import { motion, useReducedMotion } from 'motion/react'

const outerPetals = Array.from({ length: 18 })
const innerPetals = Array.from({ length: 14 })
const sparks = Array.from({ length: 10 })

export default function Flower({ bloomed, onBloom }) {
  const reduceMotion = useReducedMotion()

  return (
    <button className={'flower-button ' + (bloomed ? 'is-bloomed' : '')} type="button" onClick={() => !bloomed && onBloom()} aria-label={bloomed ? 'La flor amarilla ha florecido' : 'Toca para hacer florecer la flor amarilla'}>
      <motion.span className="flower-sway" animate={reduceMotion ? {} : { rotate: [0, 1.15, 0, -1.15, 0], y: [0, -3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}>
        <span className="flower">
          <span className="stem-group" aria-hidden="true"><span className="stem" /><span className="leaf leaf-left" /><span className="leaf leaf-right" /></span>
          <span className="halo" /><span className="bloom-glow" />
          <span className="petal-ring outer-ring" aria-hidden="true">{outerPetals.map((_, index) => <span className="petal outer-petal" style={{ '--angle': (index * 20) + 'deg', '--delay': (index * .05) + 's' }} key={index} />)}</span>
          <span className="petal-ring inner-ring" aria-hidden="true">{innerPetals.map((_, index) => <span className="petal inner-petal" style={{ '--angle': (index * (360 / 14) + 10) + 'deg', '--delay': (.48 + index * .055) + 's' }} key={index} />)}</span>
          <span className="flower-center" aria-hidden="true"><b /><b /><b /><i /><i /><i /><i /><i /><i /></span>
          {bloomed && <span className="flower-sparks" aria-hidden="true">{sparks.map((_, index) => <i style={{ '--angle': (index * 36) + 'deg', '--delay': (.35 + index * .07) + 's' }} key={index} />)}</span>}
        </span>
      </motion.span>
    </button>
  )
}

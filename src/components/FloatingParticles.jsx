export default function FloatingParticles({ active }) {
  return <div className={'particles ' + (active ? 'active' : '')} aria-hidden="true">{Array.from({ length: 22 }, (_, index) => <i key={index} style={{ '--i': index }} />)}</div>
}

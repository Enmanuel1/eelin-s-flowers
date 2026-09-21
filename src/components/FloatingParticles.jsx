const stars = [
  [8, 13, 4.8, 0], [84, 9, 6.2, -1.9], [93, 29, 5.3, -3.1],
  [13, 47, 6.8, -4.4], [88, 57, 5.7, -2.6], [7, 79, 6.4, -5.2],
  [78, 87, 5, -1.1], [28, 91, 7.1, -3.8], [96, 94, 5.9, -6],
]

export default function FloatingParticles({ active }) {
  return <div className={'particles ' + (active ? 'active' : '')} aria-hidden="true">
    {stars.map(([x, y, duration, delay], index) => <i key={index} style={{ '--x': x, '--y': y, '--duration': duration + 's', '--delay': delay + 's' }} />)}
  </div>
}

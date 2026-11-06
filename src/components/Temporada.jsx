import { temporada } from '../data.js'

export default function Temporada() {
  return (
    <section id="temporada">
      <div className="w">
        <h2>Cajas de temporada</h2>
        <p className="sub">San Valentín, Navidad y más. Pregunta por disponibilidad.</p>
        <div className="gal">
          {temporada.map((t) => (
            <img loading="lazy" key={t.img} src={`/images/${t.img}.jpg`} alt={t.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}

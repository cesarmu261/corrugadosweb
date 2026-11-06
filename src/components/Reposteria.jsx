import { reposteria } from '../data.js'

export default function Reposteria() {
  return (
    <section className="rep" id="reposteria">
      <div className="w">
        <img loading="lazy" src="/images/bolsas-reposteria.jpg" alt="Bolsas kraft para repostería con ventana" />
        <div>
          <h2>{reposteria.titulo}</h2>
          <p>{reposteria.texto}</p>
          <ul>
            {reposteria.puntos.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <a className="btn" href="#contacto">Pregunta por medidas y precios</a>
        </div>
      </div>
    </section>
  )
}

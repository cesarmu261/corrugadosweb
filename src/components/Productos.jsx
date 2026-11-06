import { productos } from '../data.js'

export default function Productos() {
  return (
    <section id="productos">
      <div className="w">
        <h2>Nuestros productos</h2>
        <p className="sub">Empaque para negocio, mudanza, fiesta o regalo.</p>
        <div className="grid">
          {productos.map((p) => (
            <div className="card" key={p.img}>
              <img loading="lazy" src={`/images/${p.img}.jpg`} alt={p.titulo} />
              <div>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

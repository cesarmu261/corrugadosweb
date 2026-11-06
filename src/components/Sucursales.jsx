import { sucursales } from '../data.js'

export default function Sucursales() {
  return (
    <section id="sucursales" style={{ background: 'var(--bg2)' }}>
      <div className="w">
        <h2>Sucursales</h2>
        <p className="sub">Visítanos en el centro de Delicias y de Meoqui.</p>
        <div className="suc">
          {sucursales.map((s) => (
            <div className="box" key={s.nombre}>
              <h3>📍 {s.nombre}</h3>
              {s.lineas.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { negocio } from '../data.js'

export default function Header() {
  return (
    <header>
      <div className="w">
        <a className="logo" href="#inicio">
          📦 {negocio.nombre} <span style={{ fontWeight: 400 }}>{negocio.apellido}</span>
        </a>
        <nav>
          <a href="#productos">Productos</a>
          <a href="#reposteria">Repostería</a>
          <a href="#temporada">Temporada</a>
          <a href="#sucursales">Sucursales</a>
          <a className="keep" href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

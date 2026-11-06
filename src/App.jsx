import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Productos from './components/Productos.jsx'
import Reposteria from './components/Reposteria.jsx'
import Temporada from './components/Temporada.jsx'
import Sucursales from './components/Sucursales.jsx'
import Contacto from './components/Contacto.jsx'
import { negocio } from './data.js'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Productos />
        <Reposteria />
        <Temporada />
        <Sucursales />
        <Contacto />
      </main>
      <footer>
        © {new Date().getFullYear()} {negocio.razonSocial} · Calle Central Sur #409, Delicias, Chih.
      </footer>
    </>
  )
}

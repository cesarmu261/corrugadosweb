import { negocio } from '../data.js'

export default function Contacto() {
  const { telefonos, whatsapp } = negocio
  return (
    <section className="cta" id="contacto">
      <div className="w">
        <h2>¿Listo para tu pedido?</h2>
        <p>Escríbenos y te cotizamos.</p>
        <p>✉️ <a href={`mailto:${negocio.correo}`}>{negocio.correo}</a></p>
        {telefonos.length > 0 && (
          <p className="tel">
            📞{' '}
            {telefonos.map((t, i) => (
              <span key={t}>
                {i > 0 && ' · '}
                <a href={`tel:+52${t}`}>{t}</a>
              </span>
            ))}
          </p>
        )}
        <p>
          {whatsapp && (
            <a className="btn" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          )}
          <a className="btn" href={negocio.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="btn" href={negocio.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </div>
    </section>
  )
}

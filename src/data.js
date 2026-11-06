// Edita aquí los datos del negocio. El resto del sitio se actualiza solo.

export const negocio = {
  nombre: 'Corrugados y Cajas',
  apellido: 'de Delicias',
  razonSocial: 'Corrugados y Cajas de Delicias S.A. de C.V.',
  correo: 'ventas@corrugadosycajasdedelicias.com',
  facebook: 'https://www.facebook.com/corrugadosycajas/',
  instagram: 'https://www.instagram.com/corrugadosycajas_de_delicias/',
  // Agrega los teléfonos como texto con 10 dígitos, por ejemplo: '6391234567'
  telefonos: [],
  // Número de WhatsApp con lada de país, por ejemplo: '526391234567' (déjalo vacío para ocultar el botón)
  whatsapp: '',
}

export const productos = [
  { img: 'cajas-archivo', titulo: 'Cajas de archivo y mudanza', texto: 'Con tapa y asas. Resistentes para guardar y transportar.' },
  { img: 'portavasos', titulo: 'Portavasos', texto: 'Kraft y blanco, para bebidas frías y calientes.' },
  { img: 'cajitas-colores', titulo: 'Cajitas de colores', texto: 'Para palomitas, dulces, botanas y fiestas.' },
  { img: 'caja-ventana', titulo: 'Cajas con ventana', texto: 'Luce tu pastel o regalo con un moño a tu gusto.' },
]

export const reposteria = {
  titulo: 'Dale una presentación irresistible a tus postres',
  texto: 'Nuestras bolsas para repostería son ideales para panadería, galletas, cupcakes, brownies, regalos y mucho más.',
  puntos: [
    'Resistentes',
    'Elegantes',
    'Con ventana transparente para lucir tus productos',
    'Perfectas para emprendedores y negocios de repostería',
  ],
}

export const temporada = [
  { img: 'sanvalentin-cajas', alt: 'Cajas San Valentín con moño' },
  { img: 'sanvalentin-dulces', alt: 'Caja San Valentín con dulces' },
  { img: 'sanvalentin-chocolates', alt: 'Caja San Valentín con chocolates' },
  { img: 'sanvalentin-charolas', alt: 'Charolas San Valentín' },
  { img: 'navidad-mono', alt: 'Cajas Merry Christmas con moño' },
  { img: 'navidad-ilustradas', alt: 'Cajas navideñas ilustradas' },
  { img: 'navidad-cajitas', alt: 'Cajitas navideñas' },
  { img: 'caja-puntos', alt: 'Caja blanca con puntos dorados' },
]

export const sucursales = [
  { nombre: 'Matriz Delicias', lineas: ['Calle Central Sur #409, Col. Centro', 'A un lado de Cinemas Delicias', 'Delicias, Chihuahua 33000'] },
  { nombre: 'Sucursal Meoqui', lineas: ['Calle Ocampo #113-C, Col. Centro', 'Frente a Funeraria Rodríguez', 'Meoqui, Chihuahua'] },
]

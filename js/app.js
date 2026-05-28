class Producto {
  #precio; // Propiedad privada
  #stock;  // Propiedad privada
  constructor(nombre, marca, precio, stock, imagen) {
    this.nombre = nombre;
    this.marca  = marca;
    this.precio = precio; 
    this.stock  = stock;
    this.imagen = imagen;
  }
 
// agregar getters (get precio() y get stock()  Agregar setters (set precio() y set stock()). Reemplazar los setters básicos por setters con validación
  get precio() {
    return this.#precio;
  }
  set precio(valor) {
    if (valor <= 0) {
      console.log("Precio invalido")
    }
    this.#precio = valor;
  }

  get stock () {
    return this.#stock;
  }
  set stock (valor) {
    if (valor < 0) {
      console.log("Stock invalido")
    }
    this.#stock = valor;
  }
  

  descripcion() {
    return `${this.nombre} — ${this.marca}`;
  }
 
  get estaDisponible() {
    return this.stock > 0;
  }
 
  get precioFormateado() {
    return `$${this.precio.toLocaleString('es-AR')}`;
  }
 
  resumen() {
    const disponible = this.estaDisponible ? `${this.stock} en stock` : 'Sin stock';
    return `${this.descripcion()} | ${this.precioFormateado} | ${disponible}`;
  }
}
 

class Notebook extends Producto {
  constructor(nombre, marca, precio, stock, imagen, procesador, ramGB, almacenamientoGB, pantallaPulgadas) {
    super(nombre, marca, precio, stock, imagen);
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.almacenamientoGB = almacenamientoGB;
    this.pantallaPulgadas = pantallaPulgadas;
  }
  fichaTecnica() {
    return `${this.nombre} - ${this.procesador} - ${this.almacenamientoGB}`;
}

  }

class Celular extends Producto {
  constructor(nombre, marca, precio, stock, imagen, pantallaPulgadas, bateriaMah, camaraMp, almacenamientoGB) {
    super(nombre, marca, precio, stock, imagen);
    this.pantallaPulgadas = pantallaPulgadas;
    this.bateriaMah = bateriaMah;
    this.camaraMp = camaraMp;
    this.almacenamientoGB = almacenamientoGB;
  }
  fichaTecnica() {
    return `${this.nombre} - ${this.almacenamientoGB} - ${this.bateriaMah}`;
  }
}
  
class Auricular extends Producto {
  constructor (nombre, marca, precio, stock, imagen, tipo, wireless, cancelacionRuido) {
    super(nombre, marca, precio, stock, imagen);
    this.tipo = tipo;
    this.wireless = wireless;
    this.cancelacionRuido = cancelacionRuido;
  }
  fichaTecnica() {
    return `${this.nombre} - ${this.wireless} - ${this.cancelacionRuido}`;
  }
}

class Monitor extends Producto {
  constructor (nombre, marca, precio, stock, imagen, pulgadas, resolucion, panelTipo, hz) {
    super(nombre, marca, precio, stock, imagen);
    this.pulgadas = pulgadas;
    this.resolucion = resolucion;
    this.panelTipo = panelTipo;
    this.hz = hz;
  }
  fichaTecnica() { 
    return `${this.nombre} - ${this.pulgadas} - ${this.hz}`;
  }
  }

class PCEscritorio extends Producto {
  constructor (nombre, marca, precio, stock, imagen, procesador, ramGB, almacenamientoGB, placaVideo, fuenteW) {
    super(nombre, marca, precio, stock, imagen);
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.almacenamientoGB = almacenamientoGB;
    this.placaVideo = placaVideo;
    this.fuenteW = fuenteW;
  }
  fichaTecnica() {
    return `${this.nombre} - ${this.procesador} - ${this.almacenamientoGB}`;
  }
  }

// ── Catálogo de productos ────────────────────────────────────
// Array global — definido fuera de cualquier función o clase
const catalogo = [
  new Producto(
    'MacBook Air M2', 'Apple', 2100000, 4,
    'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400'
  ),
  new Producto(
    'iPhone 15', 'Apple', 1650000, 12,
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400'
  ),
  new Producto(
    'Sony WH-1000XM5', 'Sony', 420000, 0,
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400'
  ),
  new Producto(
    'LG UltraGear 27GP850', 'LG', 480000, 6,
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'
  ),
  new Producto(
    'PC Gamer Entry Level', 'Armada', 1200000, 5,
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400'
  ),
  new Notebook(
    'Dell XPS 13', 'Dell', 1800000, 7,
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    'Intel i7', 16, 512, 13.4
  ),
  new Notebook(
    'Lenovo ThinkPad X1 Carbon', 'Lenovo', 2000000, 3,
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    'Intel i7', 16, 512, 14
  ),
  new Celular(
    'iPhone 15', 'Apple', 1650000, 12,
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400',
    6.1, 3200, 12, 128
  ),
  new Celular(
    'Samsung Galaxy S23', 'Samsung', 1500000, 8,
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    6.1, 4000, 50, 256
  ),
  new Celular(  
    'Google Pixel 7', 'Google', 1300000, 10,
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    6.3, 3700, 50, 128
  ),
  new Auricular(
    'Sony WH-1000XM5', 'Sony', 420000, 0,
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400',
    'Over-ear', true, true 
  ),
  new Auricular(
    'Bose QuietComfort 45', 'Bose', 380000, 5,
    'https://images.unsplash.com/photo-15173367120-9c1e9b8c8f0c?w=400',
    'Over-ear', true, true 
  ),
  new Monitor(  
    'LG UltraGear 27GP850', 'LG', 480000, 6,
    'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400',
    27, '2560x1440', 'IPS', 165
  ),
  new Monitor(
    'Dell S2721DGF', 'Dell', 450000, 4,
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    27, '2560x1440', 'IPS', 165
  ),
  new PCEscritorio(
    'PC Gamer Entry Level', 'Armada', 1200000, 5, 
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400',
    'Intel i5', 16, 512, 'GTX 1660', 550
  ),
  new PCEscritorio(
    'PC Gamer High End', 'Armada', 2500000, 2, 
    'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400',
    'Intel i7', 32, 1024, 'RTX 3080', 750
  ),
];

function crearTarjeta(producto) {



// document hace referencia al HTML
  const article = document.createElement('article');
  article.className = 'tarjeta'

  // Imagen del producto
 // defino su src (url) y el texto alternativo (alt)
  const img = document.createElement('img');
  img.src     = producto.imagen;
  img.alt     = producto.nombre;

  // Nombre
  const h3 = document.createElement('h3');
  h3.textContent = producto.nombre;



  // Características básicas con lista
  const ul = document.createElement('ul');

  const liMarca = document.createElement('li');
  liMarca.textContent = `Marca: ${producto.marca}`;

  const liStock = document.createElement('li');
  liStock.textContent = producto.estaDisponible
    ? `Stock: ${producto.stock} unidades`
    : 'Sin stock';

// el appendChild nos permite vincular el código HTML creado en JS en nuestro HTML
  ul.appendChild(liMarca);
  ul.appendChild(liStock);

  // Precio
  const precio = document.createElement('p');
  precio.textContent = producto.precioFormateado;

  // Ficha técnica (solo si el producto tiene el método)
  const ficha = document.createElement('p');
  ficha.textContent = producto.fichaTecnica ? producto.fichaTecnica() : '';

  // Botón
  const btn = document.createElement('button');
  btn.textContent = producto.estaDisponible ? 'Agregar al carrito' : 'Sin stock';
  btn.disabled    = !producto.estaDisponible;

  // Armar la tarjeta
  const info = document.createElement('div');
  info.className = 'tarjeta-info';
  info.appendChild(h3);
  info.appendChild(precio);
  info.appendChild(ficha);
  info.appendChild(ul);
  info.appendChild(btn);

  article.appendChild(img);
  article.appendChild(info);

  return article;
}

// Insertar todas las tarjetas en el div#productos
const contenedor = document.getElementById('productos');
catalogo.forEach(producto => contenedor.appendChild(crearTarjeta(producto)));





  






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
    'https://images.unsplash.com/photo-1611186871525-5a0c4f200c34?w=400'
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
];
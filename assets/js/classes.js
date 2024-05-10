import { animales } from "./animalesController.js";



export class Animal {
    #nombre;
    #edad;
    #img;
    #comentario;
    #sonido;
  
    constructor(nombre, edad, img, comentario, sonido) {
      this.#nombre = nombre;
      this.#edad = edad;
      this.#img = img;
      this.#comentario = comentario;
      this.#sonido = sonido;
    }
  
    get nombre() { return this.#nombre; }
    set nombre(nuevoNombre) { this.#nombre = nuevoNombre; }
    
    get edad() { return this.#edad; }
    set edad(nuevaEdad) { this.#edad = nuevaEdad; }
  
    get img() { return this.#img; }
    set img(nuevaImg) { this.#img = nuevaImg; }
  
    get comentario() { return this.#comentario; }
    set comentario(nuevoComentario) { this.#comentario = nuevoComentario; }
  
    get sonido() { return this.#sonido; }
    set sonido(nuevoSonido) { this.#sonido = nuevoSonido; }
}


export class Leon extends Animal {
  constructor(edad, img, comentario, sonido) {
    super('Leon', edad, img, comentario, sonido);
  }

  rugir() {
    console.log('Estoy rugiendo');
    return this.sonido;
  }
}

export class Lobo extends Animal {
  constructor(edad, img, comentario, sonido) {
    super('Lobo', edad, img, comentario, sonido);
  }

  aullar() {
    console.log('Estoy aullando');
    return this.sonido;
  }
}

export class Oso extends Animal {
  constructor(edad, img, comentario, sonido) {
    super('Oso', edad, img, comentario, sonido);
  }

  gruñir() {
    console.log('Estoy gruñendo');
    return this.sonido;
  }
}

export class Serpiente extends Animal {
  constructor(edad, img, comentario, sonido) {
    super('Serpiente', edad, img, comentario, sonido);
  }

  sisear() {
    console.log('Estoy siseando');
    return this.sonido;
  }
}

export class Aguila extends Animal {
  constructor(edad, img, comentario, sonido) {
    super('Aguila', edad, img, comentario, sonido);
  }

  chillar() {
    console.log('Estoy chillando');
    return this.sonido;
  }
}

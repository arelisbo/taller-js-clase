class Libro {
    constructor(titulo, autor, genero) {
      this.titulo = titulo;
      this.autor = autor;
      this.genero = genero;
      this.leido = false;
    }
  
    marcarComoLeido() {
      this.leido = true;
    }
  
    marcarComoNoLeido() {
      this.leido = false;
    }
  
    informacion() {
      const leidoStatus = this.leido ? "Sí" : "No";
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${leidoStatus}`);
    }
  }
  
  
  const libro1 = new Libro("cronicas de una muerte anunciada", "Gabriel García Marquéz", "novela");
  const libro2 = new Libro("Guerra y la paz", "Ramachandran", "novela");
  
  
  libro1.marcarComoLeido();
  

  console.log("Información del Libro 1:");
  libro1.informacion();
  
  console.log("Información del Libro 2:");
  libro2.informacion();
  
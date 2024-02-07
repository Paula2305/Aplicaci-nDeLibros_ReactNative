export class Libro {
    id: number;
    nombre: string;
    autor: string;
    paginas: number;
    ISBN: string;
    precio: number;

    constructor(id: number, nombre: string, autor: string, paginas: number, ISBN: string, precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.autor = autor;
        this.paginas = paginas;
        this.ISBN = ISBN;
        this.precio = precio;
    }
}
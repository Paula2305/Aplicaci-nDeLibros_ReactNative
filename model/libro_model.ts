export class Libro {
    id: number;
    titulo: string;
    autor: string;
    ISBN: string;
    precio: number;
    genero: string;
    sinopsis: string;
    url_foto: string;

    constructor(id: number, titulo: string, autor: string, ISBN: string, precio: number, genero: string, sinopsis: string, url_foto: string) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.ISBN = ISBN;
        this.precio = precio;
        this.genero = genero;
        this.sinopsis = sinopsis;
        this.url_foto = url_foto;
    }
}
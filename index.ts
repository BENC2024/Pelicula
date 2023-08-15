import { Genero } from "./Genero";
import { Pelicula } from "./Pelicula";

let genero1 = new Genero(1, "Aventura")
let genero2 = new Genero(2, "Catástrofe")
let genero3 = new Genero(3, "Comedia")
let genero4 = new Genero(4, "Documentales")
let genero5 = new Genero(5, "Fantasía")
let genero6 = new Genero(6, "Musicales")
let genero7 = new Genero(7, "Suspenso")
let genero8 = new Genero(8, "Terror")
let genero9 = new Genero(9, "Ciencia ficcion")
let genero10 = new Genero(10, "Accion")

let pelicula1 = new Pelicula("Openheimer","Christofer Nolan", 180, 2023, 8,[genero1,genero2,genero3])
let pelicula2 = new Pelicula("Flash","Andrés Muschietti", 144, 2023, 6, [genero1,genero10])

pelicula1.imprimir()

pelicula2.imprimir()



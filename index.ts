import { Genero } from "./Genero";
import { Pelicula } from "./Pelicula";

const diccionarioGen : { [id:number] : Genero } = {
    1 : new Genero(1, "Aventura"),
    2 : new Genero(2, "Catástrofe"),
    3 : new Genero(3, "Comedia"),
    4 : new Genero(4, "Documentales"),
    5 : new Genero(5, "Fantasía"),
    6 : new Genero(6, "Musicales"),
    7 : new Genero(7, "Suspenso"),
    8 : new Genero(8, "Terror"),
    9 : new Genero(9, "Ciencia ficcion"),
    10 : new Genero(10, "Accion"),
}

function epica(pelicula:Pelicula){
    if (pelicula.accederEsEpica() == true){
        console.log("la pelicula "+pelicula.getNombre()+" es una pelicula epica")
    }
    else{
        console.log("la pelicula "+pelicula.getNombre()+" no es una pelicula epica")
    }
    console.log("------------------------------------")
}

//Creacion de los objetos
let pelicula1 = new Pelicula("Openheimer","Christofer Nolan", 180, 2023, 8,[diccionarioGen[1],diccionarioGen[2],diccionarioGen[3]])
let pelicula2 = new Pelicula("Flash","Andrés Muschietti", 144, 2023, 6, [diccionarioGen[1],diccionarioGen[10]])

//Imprimiendo datos de peliculas
pelicula1.imprimir()
pelicula2.imprimir()

//Saber si la pelicula es epica
epica(pelicula1)
epica(pelicula2)

//Valoracion
console.log(pelicula1.accederCalcularValoracion())
console.log(pelicula2.accederCalcularValoracion())

//Saber si las peliculas son similares

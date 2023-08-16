import { Genero } from "./Genero";
import { Pelicula } from "./Pelicula";

function similares(pelicula1:Pelicula,pelicula2:Pelicula){
    if (pelicula1.accederEsSimilar(pelicula2) == true){
        console.log("La pelicula " + pelicula1.getNombre() + 
                    " y la pelicula " + pelicula2.getNombre() + " son similares")
    }
    else{
        console.log("La pelicula " + pelicula1.getNombre() + 
                    " y la pelicula " + pelicula2.getNombre() + " no son similares")
    }
}

function epica(pelicula:Pelicula){
    if (pelicula.accederEsEpica() == true){
        console.log("La pelicula "+pelicula.getNombre()+" es del tipo epica")
    }
    else{
        console.log("La pelicula "+pelicula.getNombre()+" no es del tipo epica")
    }
}

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

//Creacion de las peliculas
let pelicula1 = new Pelicula("Oppenheimer","Christofer Nolan", 180, 2023, 6,[diccionarioGen[1],diccionarioGen[2],diccionarioGen[3]])
let pelicula2 = new Pelicula("Flash","Andrés Muschietti", 144, 2023, 6, [diccionarioGen[1],diccionarioGen[10]])

//Imprimiendo datos de peliculas
pelicula1.imprimir()
pelicula2.imprimir()

//Saber si la pelicula es epica
epica(pelicula1)
epica(pelicula2)
console.log("------------------------------------")

//Valoracion
console.log(pelicula1.accederCalcularValoracion())
console.log(pelicula2.accederCalcularValoracion())
console.log("------------------------------------")

//Saber si las peliculas son similares
similares(pelicula1,pelicula2)

// Agregar funcionalidad alquilarpelicula () donde se puede saber si esta disponible o no

// Agregar funcionalidad mostrarCarteleraDisponible () donde se puede ver las peliculas que no estan alquiladas

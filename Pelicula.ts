import { Genero } from "./Genero"

export class Pelicula{

    private nombre : string
    private director: string
    private duracion : number
    private anio : number
    private calificacion : number
    private generoPelicula : Array<Genero>

    constructor( nombre:string, director:string, duracion:number, anio:number, calificacion: number, generoPelicula:Array<Genero> ){
        this.nombre = nombre
        this.director = director
        this.duracion = duracion
        this.anio = anio
        this.calificacion = calificacion
        this.generoPelicula = generoPelicula
    }

    public getNombre() : string {
        return this.nombre
    }
    public getDirector() : string {
        return this.director
    }
    public getDuracion() : number {
        return this.duracion
    }
    public getAnio() : number {
        return this.anio
    }
    public getCalificacion() : number {
        return this.calificacion
    }
    public getGeneroPelicula() : Array<Genero> {
        return this.generoPelicula
    }

    private setNombre(nombre:string){
        this.nombre = nombre
    }
    private setDirector(director:string){
        this.director = director
    }
    private setDuracion(duracion:number){
        this.duracion = duracion
    }
    private setAnio(anio:number){
        this.anio = anio
    }
    private setCalificacion(calificacion:number){
        this.calificacion = calificacion
    }
    private setGeneroPelicula(generoPelicula:Array<Genero>){
        this.generoPelicula = generoPelicula
    }

    //METODOS

    public imprimir(){
        let genero : string = ""
        for (let i = 0; i < this.generoPelicula.length; i++){
            genero = genero + this.generoPelicula[i].getNombre() + ", "
        }
        console.log("Descripcion de la pelicula: \n" +
                    "Nombre: " + this.nombre + "\n" +
                    "Director: " + this.director + "\n" +
                    "Duracion: " + this.duracion + "\n" +
                    "Genero: " + genero + "\n" +
                    "Anio de publicacion: " + this.anio + "\n" +
                    "Calificacion: " + this.calificacion + "\n" + 
                    "------------------------------------"
        )
    }
    //Devolver un valor verdadero si es mayor a tres horas = 180 minutos
    private esPeliculaEpica():boolean{
        if (this.duracion >= 180){
            return true
        }
        else{
            return false
        }
    }

    private calcularValoracion():string{
        if(this.calificacion >= 0 && this.calificacion <=2){
            return "Con una calificacion de " + this.calificacion + 
                    " la pelicula " + this.nombre + " parece ser muy mala"
        }
        else if(this.calificacion > 2 && this.calificacion <= 5){
            return "Con una calificacion de " + this.calificacion + 
                    " la pelicula " + this.nombre + " parece ser mala"
        }
        else if(this.calificacion > 5 && this.calificacion <= 7){
            return "Con una calificacion de " + this.calificacion + 
                    " la pelicula " + this.nombre + " parece ser regular"
        }
        else if(this.calificacion > 7 && this.calificacion <= 8){
            return "Con una calificacion de " + this.calificacion + 
                    " la pelicula " + this.nombre + " parece ser buena"
        }
        else if(this.calificacion > 8 && this.calificacion <= 10){
            return "Con una calificacion de " + this.calificacion + 
                    " la pelicula " + this.nombre + " parece ser muy buena"
        }
        else{
            return "No tiene asignada una valoracion valida"
        }
        console.log("------------------------------------")
    }

    private esSimilar(pelicula:Pelicula): boolean {
        let similar = false
        if (pelicula.getCalificacion() == this.getCalificacion()){
            if (this.comparandoGeneros(pelicula) == true){
                similar = true
            }
            else{
                similar = false
            }
        }
        else{
            similar = false
        }
        return similar
    }
    
    comparandoGeneros(pelicula:Pelicula): boolean {
        let comparar = false
        for (let i = 0; i < pelicula.getGeneroPelicula().length; i++) {
            for (let j = 0 ; j < this.getGeneroPelicula().length; j++){
                if (pelicula.getGeneroPelicula()[i].getNombre() == this.getGeneroPelicula()[j].getNombre()){
                    comparar = true
                    break
                }
                else{
                    comparar = false
                }
            }

        }
        return comparar
    }

    //Como los metodos son privados se crea otros metodos para acceder a esos metodos
    accederEsEpica():boolean{
        return this.esPeliculaEpica()
    }
    accederCalcularValoracion():string{
        return this.calcularValoracion()
    }
    accederEsSimilar(pelicula:Pelicula):boolean{
        return this.esSimilar(pelicula)
    }

}
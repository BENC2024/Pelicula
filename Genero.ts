export class Genero{

    private id : number
    private nombre : string // Accion, comedia, epica, drama, tragicomedia

    constructor(id:number, nombre:string){
        this.id = id
        this.nombre = nombre
    }

    public getId():number {
        return this.id
    }
    public getNombre():string {
        return this.nombre
    }

    public setId(id:number){
        this.id = id
    }
    public setNombre(nombre:string){
        this.nombre = nombre
    }

}
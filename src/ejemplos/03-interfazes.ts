//las interfaces son similares a los tipos personalizados forzan a cumplir el molde
//con la diferencia que las interfaces se pueden itilizan para las clases en POO
interface Empleado {
    id:number,
    name:string,
    departamento:string,
    activo:boolean
}

class Obrero implements Empleado{
    public id: number;
    public name: string;
    public departamento: string;
    public activo: boolean;

    constructor(){
        this.id = 1;
        this.name = "Ricardo";
        this.departamento = "Sistemas"
        this.activo = true;

    }
}
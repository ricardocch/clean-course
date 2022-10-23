//para hacer opcional algo se debe de utilizar un ? antes de los 2 puntos y el tipo
//Ejemplo variable?:tipo

//parametro opcional
const pontenciarNumero = (numero:number,exponente?:number):number =>{

    return exponente ? numero ** exponente : numero ** 2;
}

pontenciarNumero(3)
pontenciarNumero(2,4)

//propiedad tipo opcional en tipo
type persona = {
    nombre:string,
    edad:number,
    sexo?:string
}

let persona2:persona = {
    edad:33,
    nombre:"Carolina",
}

let persona1:persona = {
    edad:22,
    nombre:"Ricardo",
    sexo:"Hombre"
}


//propiedad tipo opcional en interfaz

interface Ciudadano  {
    nombre:string,
    edad:number,
    sexo?:string
}

let empleado1:Ciudadano = {
    edad:33,
    nombre:"Carolina",
}

let empleado2:Ciudadano = {
    edad:22,
    nombre:"Ricardo",
    sexo:"Hombre"
}
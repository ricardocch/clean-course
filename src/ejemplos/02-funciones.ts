const suma = (primerNumero:number,segundoNumero:number):number =>{
    return primerNumero + segundoNumero;
}

//al escribir la funcion nos dice que parametros espera y de que tipo son los parametros 
//y que tipo regresa
suma(2,2);

const regresarSumaCadena = (primerNumero:number,segundoNumero:number):string =>{

    let resultado:number = primerNumero + segundoNumero;
    return resultado.toString();    
}

let resultadoCadene:string = regresarSumaCadena(1,2);

//forzar salida esperada
type personaInfo = {
    nombre:string,
    edad:number,
    esSoltero:boolean
}

//en consola se muestra la salida de esta funcion
export const crearInfoPersona = (nombre:string,edad:number):personaInfo =>{

    return {
        nombre,
        edad,
        esSoltero: edad < 18 ? true : false
    }
}

//destructuring y no retorno

const guardarInfoPersona = ({nombre , edad ,esSoltero}:personaInfo):void =>{

    let informacion:personaInfo = {
        nombre,
        edad,
        esSoltero
    }

}

guardarInfoPersona({nombre:"Ricardo",edad:20,esSoltero:true})


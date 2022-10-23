
    let numero:number;
    let cadena:string;
    let booleano:boolean;
    let cualquierValor:any;
    let arreglo:number[];
    let objeto:object;
    let arregloObjetos:object[];
    let arregloVariosTipos:(string|number)[]
    let nulo:null;
    let indefinido:undefined; 

    //Tipos Personalizado
    type custom = "hola" |"mundo" | 200
    type person = {
        name:string,
        edad:number
    }

    let implementacionCustom:custom;
    let implementacionPerson:person; 
    

    //codigo aceptado
    numero = 2;
    cadena = "";
    booleano = true;
    cualquierValor = "hola mundo"
    cualquierValor = 22
    cualquierValor = true;
    arreglo = [1,2,3]
    objeto = {
        propiedad: "valor"
    }
    arregloObjetos = [
        {
            propiedad: "valor"
        },
        {
            propiedad: "valor"
        }
    ]

    arregloVariosTipos = [1,"2"]

    implementacionCustom  = "hola"
    implementacionCustom  = "mundo"
    implementacionCustom = 200;
    
    implementacionPerson = {
        name:"Ricardo",
        edad:200
    }

    //ventajas nos autocompleta el metodo o nosmarca error si un metodo es valido
    numero.toFixed(2)
    cadena.includes("hola")
    implementacionPerson.edad

    //codigo no permitido 
    numero = "";
    cadena = true;
    booleano = 1;
    arreglo = [1,"hola",3];

    objeto = 200

    arregloObjetos = [1,2,3]
    arregloObjetos = {
        propiedad: "valor"
    }

    implementacionCustom = 1200


    implementacionPerson = {
        color:"Ricardo"
    }

    numero.replace("1","2")
    cadena.toFixed(2)
    booleano.includes("hola")


import { Pokemon} from './interfaces/PokemonResponse'

const getPokemonInfo = async (id:(string | undefined)):Promise<Pokemon | undefined> =>{
    if(id){
        let response:(Response | Promise<any>)  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        let pokemonInfo:Promise<Pokemon> = response.status !== 404 ? await response.json() : undefined;  
        return pokemonInfo;
    }

    return undefined;
}

const drawPokemon = (pokemonInfo:(Pokemon | undefined)):(void | undefined) =>{

    const pokemonContainer:(HTMLDivElement | null) = document.querySelector<HTMLDivElement>('#Pokemon')

    if(!pokemonContainer)
        return undefined;

    if(pokemonInfo){
        pokemonContainer.innerHTML = `
            <img src="${pokemonInfo.sprites.other['official-artwork'].front_default}"/> 
            <br>
            nombre:${pokemonInfo.name}
            <br>
            tipo: ${pokemonInfo.types[0].type.name}  
            <br>
            peso: ${pokemonInfo.weight}
            <br>
            altura: ${pokemonInfo.height}
        `
    }
    else{
        pokemonContainer.innerHTML = 'Pokemon no encontrado'
    }
}


(() =>{
    const app = document.querySelector<HTMLDivElement>('#app')!
    app.innerHTML = `
    <h1>Buscador pokemon</h1>
    <input type="text" name="Pokemon" placeholder="Ingresa nombre pokemon o id"/>
    <button>Buscar</button>
    <div id="Pokemon">
    </div>
    `
    let buscador:(HTMLInputElement | null)= document.querySelector("#app input");
    let botonBuscador:(HTMLElement | null) = document.querySelector("#app button");
    
    botonBuscador?.addEventListener("click",  () =>{
        getPokemonInfo(buscador?.value)
        .then((pokemonInfo) => drawPokemon(pokemonInfo))
        
    })
   
    
    
})()



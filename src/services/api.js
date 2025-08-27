import Pokemon from "../models/Pokemon.js";
const API_URL = "https://pokeapi.co/api/v2/pokemon/";
export async function fetchPokemon(id){
    try{
        const res = await fetch(API_URL + id);
        if (!res.ok) throw new Error("No se encontró el pokémon");
        const data = await res.json();

        //Extraer los tipos
        const Types = data.types.map(t => t.type.name);

        //Crear instancia de Pokemon 
        return new Pokemon(
            data.id,
            data,name,
            types,
            data.sprites,other["official-artwork"].front_default
        );
    } catch (error) {
        console.error(error);
        return null;
    }
} 

//Extraer las habilidades 
const abilities = data.abilities.map(a => a.ability.name);

//Extraer las estadisticas
const stats = data.stats.map(s => ({
    stat: s.stat.name,
    base: s.base_stat
}));
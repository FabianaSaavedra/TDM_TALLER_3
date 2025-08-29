import Pokemon from "../models/Pokemon.js";
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function fetchPokemon(id) {
    try {
        const res = await fetch(API_URL + id);
        if (!res.ok) throw new Error("No se encontró el pokémon");
        const data = await res.json();

        // Extraer los tipos
        const types = data.types.map(t => t.type.name);

        // Extraer las habilidades
        const abilities = data.abilities.map(a => a.ability.name);

        // Extraer las estadísticas
        const stats = data.stats.map(s => ({
            stat: s.stat.name,
            base: s.base_stat
        }));

        // Crear instancia de Pokemon
        return new Pokemon(
            data.id,
            data.name,
            types,
            data.sprites.other["official-artwork"].front_default,
            data.height / 10,
            data.weight / 10,
            abilities,
            stats
        );
    } catch (error) {
        console.error(error);
        return null;
    }
}




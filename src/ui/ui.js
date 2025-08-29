// Mostrar Pokémon en la card principal
export function showPokemon(pokemon) {
    if (!pokemon) return;

    // Datos del Pokémon
    document.getElementById("pokemon-img").src = pokemon.sprite;
    document.getElementById("pokemon-name").textContent = capitalize(pokemon.name);
    document.getElementById("pokemon-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");

    // Tipos
    const typesDiv = document.querySelector(".types");
    typesDiv.innerHTML = "";
    pokemon.types.forEach(t => {
        const span = document.createElement("span");
        span.classList.add("type", t);
        span.textContent = capitalize(t);
        typesDiv.appendChild(span);
    });

    // Evento para abrir modal
    document.querySelector(".pokemon-img").onclick = () => showModal(pokemon);
}

// Mostrar modal con detalles
export function showModal(pokemon) {
    const modal = document.querySelector(".modal");
    modal.classList.remove("hidden");

    // Datos principales
    document.getElementById("modal-img").src = pokemon.sprite;
    document.getElementById("modal-name").textContent = capitalize(pokemon.name);
    document.getElementById("modal-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");

    // Altura y peso
    document.getElementById("modal-height").textContent = pokemon.height + " m";
    document.getElementById("modal-weight").textContent = pokemon.weight + " kg";

    // Habilidades
    const abilitiesDiv = document.querySelector(".abilities");
    abilitiesDiv.innerHTML = "";
    pokemon.abilities.forEach(a => {
        const li = document.createElement("li");
        li.textContent = capitalize(a);
        abilitiesDiv.appendChild(li);
    });

    // Estadísticas
    const statsDiv = document.querySelector(".stats");
    statsDiv.innerHTML = "";
    pokemon.stats.forEach(s => {
        const statRow = document.createElement("div");
        statRow.classList.add("stat");

        const statName = document.createElement("span");
        statName.textContent = capitalize(s.stat);

        const statValue = document.createElement("span");
        statValue.textContent = s.base;

        statRow.appendChild(statName);
        statRow.appendChild(statValue);
        statsDiv.appendChild(statRow);
    });

    // Botón cerrar
    document.querySelector(".close-modal").onclick = () => {
        modal.classList.add("hidden");
    };
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

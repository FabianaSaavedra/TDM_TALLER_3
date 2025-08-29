export function showPokemon(pokemon) {
    if (!pokemon) return;

    // Datos del Pokémon
    const img = document.getElementById("pokemon-img");
    if (img) {
        img.src = pokemon.sprite;
        img.onclick = () => showModal(pokemon); // Asignar evento solo si el elemento existe
    }

    document.getElementById("pokemon-name").textContent = capitalize(pokemon.name);
    document.getElementById("pokemon-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");

    // Tipos
    const typesDiv = document.querySelector(".types");
    if (typesDiv) {
        typesDiv.innerHTML = "";
        pokemon.types.forEach(t => {
            const span = document.createElement("span");
            span.classList.add("type", t);
            span.textContent = capitalize(t);
            typesDiv.appendChild(span);
        });
    }
}

// Mostrar modal con detalles
export function showModal(pokemon) {
    const modal = document.querySelector(".modal");
    if (!modal) return;

    modal.classList.remove("hidden");

    // Datos principales
    document.getElementById("modal-img").src = pokemon.sprite;
    document.getElementById("modal-name").textContent = capitalize(pokemon.name);
    document.getElementById("modal-id").textContent = "#" + pokemon.id.toString().padStart(3, "0");

    // Altura y peso
    document.getElementById("modal-height").textContent = pokemon.height;
    document.getElementById("modal-weight").textContent = pokemon.weight;

    // Habilidades (usando span con ID, no clase)
    const abilitiesSpan = document.getElementById("modal-abilities");
    if (abilitiesSpan) {
        abilitiesSpan.innerHTML = "";
        abilitiesSpan.textContent = pokemon.abilities.map(capitalize).join(", ");
    }

    // Estadísticas (usando id="modal-stats" en lugar de clase ".stats")
    const statsDiv = document.getElementById("modal-stats");
    if (statsDiv) {
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
    }

    // Botón cerrar
    const closeBtn = document.getElementById("close-modal");
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.add("hidden");
        };
    }
}

// Función para capitalizar palabras
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


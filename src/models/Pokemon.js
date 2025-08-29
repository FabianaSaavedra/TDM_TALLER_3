export default class Pokemon {
    constructor(id, name, types, sprite, height, weight, abilities, stats) {
        this.id = id;
        this.name = name;
        this.types = types;
        this.sprite = sprite;
        this.height = height;        // altura en metros
        this.weight = weight;        // peso en kg
        this.abilities = abilities;  // arreglo con nombres de habilidades
        this.stats = stats;          // arreglo de objetos con { name, base }
    }
}
const headerOption = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    // method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache"
}

$('form').on("submit", function (e) {
    e.preventDefault();
    let types = $('input[type=text]').val().replace("/\s/g", "").split(",");
    // fetch code
    console.log(types);
    let trainerType = types.map((elm) => {
        return fetch(`https://pokeapi.co/api/v2/type/${elm}/`, headerOption);
    });
    getPromiseData(trainerType).then(data => {
        getDoubleDamagePockemon(data);
    });

});
function getPromiseData(promiseArray) {
    return new Promise((resolve, reject) => {
        Promise.all(promiseArray).then(res => {
            Promise.all(res).then(resolve);
        }).catch(reject);
    });
}
function getDoubleDamagePockemon(pokemonTypes) {
    pokemonTypes.map(types => {
        return types.damage_relations.double_damage_from;
    }).reduce((a, b) => [...a, ...b], []);
    console.log(pokemonTypes);
}
function displayPokemon(data) {
    data.array.forEach(pokemon => {
        var container = $("div").addClass("pokemon");
        var image = $("img").attr("src", `https://pokeapi.co/media/img/${pokemon.id}.png`);
        var title = $("h1").text(pokemon.name);
        container.append(image, title);
        $(".pokemon-container").append(container);
    });
}
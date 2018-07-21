'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var headerOption = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    // method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache"
};

$('form').on("submit", function (e) {
    e.preventDefault();
    var types = $('input[type=text]').val().replace("/\s/g", "").split(",");
    // fetch code
    console.log(types);
    var trainerType = types.map(function (elm) {
        return fetch('https://pokeapi.co/api/v2/type/' + elm + '/', headerOption);
    });
    getPromiseData(trainerType).then(function (data) {
        getDoubleDamagePockemon(data);
    });
});
function getPromiseData(promiseArray) {
    return new Promise(function (resolve, reject) {
        Promise.all(promiseArray).then(function (res) {
            Promise.all(res).then(resolve);
        }).catch(reject);
    });
}
function getDoubleDamagePockemon(pokemonTypes) {
    pokemonTypes.map(function (types) {
        return types.damage_relations.double_damage_from;
    }).reduce(function (a, b) {
        return [].concat(_toConsumableArray(a), _toConsumableArray(b));
    }, []);
    console.log(pokemonTypes);
}
function displayPokemon(data) {
    data.array.forEach(function (pokemon) {
        var container = $("div").addClass("pokemon");
        var image = $("img").attr("src", 'https://pokeapi.co/media/img/' + pokemon.id + '.png');
        var title = $("h1").text(pokemon.name);
        container.append(image, title);
        $(".pokemon-container").append(container);
    });
}
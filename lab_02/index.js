const axios = require("axios");

axios("https://pokeapi.co/api/v2/pokemon/grookey")
    .then(function (response) {
        const pokemon = response.data;

        if (pokemon.name == "scorbunny") {
            console.log("Don't forget to give " + pokemon.name + " a snack after a hard fight!");
        } else if (pokemon.name == "grookey") {
            console.log("Don't forget to give " + pokemon.name + " a snack after a hard fight!");
        } else if (pokemon.name == "sobble") {
            console.log("Don't forget to give " + pokemon.name + " a snack after a hard fight!");
        } else {
            console.log("Not all pokemon need snacks...")
        }
    })
    .catch(function (error) {
        console.log("error: " + error);
    });
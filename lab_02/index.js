const axios = require("axios");

//gets the pokemon info from the site
axios("https://pokeapi.co/api/v2/pokemon/grookey")
    //if successful at getting the data
    .then(function (response) {
        //puts the pokemon data in a object
        const pokemon = response.data;
        //checks to see which pokemon was pulled
        if (pokemon.name == "scorbunny") {
            console.log("Don't forget to give " + pokemon.name + " a snack after a hard fight!");//if its a scorbunny
        } else if (pokemon.name == "grookey") {
            console.log("Don't forget to give " + pokemon.name + " a snack after a hard fight!");//if its a grookey
        } else if (pokemon.name == "sobble") {
            console.log("Don't forget to give " + pokemon.name + " a snack after a hard fight!");//if its a sobble
        } else {
            console.log("Not all pokemon need snacks...")
        }
    })
    //if failed at getting the data it will log the error
    .catch(function (error) {
        console.log("error: " + error);
    });
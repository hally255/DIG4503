const axios = require('axios');

//fetch the url
axios('/user?ID=12345')
    //then
    .then(function (response) {
        //handles the success
        console.log(response);
    })
    .catch(function (error) {
        //handles error
        console.log(error);
    });
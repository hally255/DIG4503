const Express = require("express");
const App = Express();
const port = 3001

App.get("/", function (request, response) {
    response.send("Hello World");
}); //will put Hello World on the homapge

App.use('/public', Express.static("public"));
//looks for the folder public and looks at its contents

App.listen(port, function () {
    console.log("server running!");
}); //listens for the server on the port 
    //simple way to check if the server is running
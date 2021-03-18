import Express from "express";
import fs from "fs";

const App = Express();
const port = 3003;

let fileContents = fs.readFileSync("database.json");
//reads the file contents and makes it a string
let database = JSON.parse(fileContents);
//takes the contents and converts into a json object

//looks throught the json object for the names and returns the object
App.get("/employees/name/:name", (req, res) => {
    let result = { "error": "not found" };

    database.forEach((value) => {
        if (req.params.name == value.name) {
            result = value;
        }
    });

    res.json(result);
});

//looks through the json object for an age and returns the object
App.get("/employees/age/:age", (req, res) => {
    let result = { "error": "not found" };

    database.forEach((value) => {
        if (req.params.age == value.age) {
            result = value;
        }
    });

    res.json(result);
})

App.listen(port, () => {
    console.log("server running");
});
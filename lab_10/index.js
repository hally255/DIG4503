import Express from "express";
import fs from "fs";
import cors from "cors";

const App = Express();
const port = 3000;
App.use(cors());

let fileContents = fs.readFileSync("database.json");
//reads the file contents and makes it a string
let database = JSON.parse(fileContents);
//takes the contents and converts into a json object

//looks throught the json object for the names and returns the object
App.use("/", Express.static("client/build"));

App.get("/employees/name/:name", (req, res) => {
    let result = { "error": "not found" };

    database.forEach((value) => {
        if (req.params.name == value.name) {
            result = value;
        } else { }
    });

    res.json(result);
});

//looks through the json object for an age and returns the object
App.get("/employees/age/:age", (req, res) => {
    let result = { "error": "not found" };

    database.forEach((value) => {
        if (req.params.age == value.age) {
            result = value;
        } else { }
    });

    res.json(result);
});

App.post("/employees/:name/:age", (req, res) => {
    let result = {
        "name": req.params.name,
        "age": parseInt(req.params.age)
    };

    database.push(result);

    fs.writeFileSync("database.json", JSON.stringify(database, null, "\t"));

    res.json(result);
});

App.listen(port, () => {
    console.log("server running");
});
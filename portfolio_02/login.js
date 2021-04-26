import Express from "express";
import fs from "fs";
import cors from "cors";
import MongoClient from "mongodb";

const URL = "mongodb+srv://sgeraci:YIWPoBUKRuUhcrEM@cluster0.oewwc.mongodb.net/test";

const App = Express();
const port = 1001;
App.use(cors());

let fileContents = fs.readFileSync("database.json");
//reads the file contents and makes it a string
let database = JSON.parse(fileContents);
//takes the contents and converts into a json object

//looks throught the json object for the names and returns the object
App.use("/", Express.static("public"));

App.get("/users/username/:username", (req, res) => {
    let result = { "error": "not found" };

    database.forEach((value) => {
        if (req.params.username == value.username) {
            result = value;
        } else { }
    });

    res.json(result);
});

//looks through the json object for an age and returns the object
App.get("/users/password/:password", (req, res) => {
    let result = { "error": "not found" };

    database.forEach((value) => {
        if (req.params.password == value.password) {
            result = value;
        } else { }
    });

    res.json(result);
});

MongoClient.connect(URL, { useUnifiedTopology: true }).then(connetion => {
    let database = connetion.db("sample_mflix");

    let collection = database.collection("movies");

    let cursor = collection.find({ runtime: { $lte: 60 }, year: { $gte: 1995 } });

    cursor.forEach(document => {
        let movieName = document.title;
        const movieList = [];

        movieList.push(movieName);

        console.log(movieList);

    }, () => {
        connetion.close();
    });
}).catch(error => {
    console.log("Error: " + error);
});

App.listen(port, () => {
    console.log("server running");
});
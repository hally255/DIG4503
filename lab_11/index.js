import MongoClient from "mongodb";

const URL = "mongodb+srv://sgeraci:YIWPoBUKRuUhcrEM@cluster0.oewwc.mongodb.net/test";

MongoClient.connect(URL, { useUnifiedTopology: true }).then(connetion => {
    let database = connetion.db("sample_airbnb");

    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({ minimum_nights: { $eq: 2 } });

    cursor.forEach(document => {
        console.log(document.name);
    }, () => {
        connetion.close();
    })
}).catch(error => {
    console.log("Error: " + error);
});
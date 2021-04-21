import MongoClient from "mongodb";

const URL = "mongodb+srv://sgeraci:YIWPoBUKRuUhcrEM@cluster0.oewwc.mongodb.net/test";

MongoClient.connect(URL, { useUnifiedTopology: true }).then(connetion => {
    let database = connetion.db("sample_airbnb");

    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({ number_of_reviews: { $gte: 99 }, beds: { $gte: 5 }, price: { $lte: 200 } });

    cursor.forEach(document => {
        console.log(document.name);
    }, () => {
        connetion.close();
    });
}).catch(error => {
    console.log("Error: " + error);
});
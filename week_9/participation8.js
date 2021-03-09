import Express from 'express';
const App = Express();
const port = 3010;


App.get('/andriod/:id', (req, res) => {
    res.send("Hello Andriod #" + req.params.id + "! Please wait for further software updates!");
});

App.get('/dog/:breed', (req, res) => {
    res.send("Your favorite dog breed is a " + req.params.breed);
});

App.listen(port, () => {
    console.log("The server is running")
});
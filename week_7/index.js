//GET
//GET method allows for the script to gather data either from the server or another source.
app.get('/', function (res, req) {
    var userID = req.param('id');
}); //will get the user id from the server or url

//PUT
//This will allow the scripts to create or edit a resource.
app.put('/user', function (req, res) {
    res.send("PUT response to /user")
}); //could run a function to update or create user data

//POST
//gathers the values of a source. its similar to the GET method
app.post('/user', function (req, res) {
    var user = req.body.user;
}); //will get the post date from the form

//DELETE
//This method will delete a resource off the server data
app.delete('/user', function (req, res) {
    res.send("DELETE method called");
}); //Will delete the user data from the server
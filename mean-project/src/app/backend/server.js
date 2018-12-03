// Connect to Mongo Database
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoDB = "mongodb://admin:admin123@ds235711.mlab.com:35711/movie-database"
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Database connected");
});

// User schema in the database
var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: String,
    password: String
});
var users = mongoose.model('users', userSchema);

// Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
   res.send('Hello from Express');
}) // Send a message when access to localhost:8081

app.post('/api/users', function(req, res){
    users.create({
        username : req.body.username,
        password : req.body.password
    });
    console.log("Create an account");
}) // Create a user account to the database

app.get('/getUser/:username', function(req, res){
    users.find({ 'username': req.params.username },
    function(err, user) {
        if (err)
            res.send(err)
        res.json(user);
    });
    console.log("Get " + req.params.username + " account");
}) // Get and return a specific user account by username from the database

app.get('/api/users', function(req, res){
    users.find(function(err, users) {
        if (err)
            res.send(err)
        res.json(users);
    });
    console.log("Get all accounts");
}) // Get and return all user accounts from the database

app.put('/api/users/:id', function(req,res){
    users.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
            res.json(post);
    });
    console.log("Update " + req.params.id + " account");
}) // Update a user account by id to the database

app.delete('/api/users/:id', function(req,res) {
    users.deleteOne({ _id: req.params.id },
    function (err) {});
    console.log("Delete an account");
}) // Delete a user account from the database

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("App listening at http://%s:%s", host, port)
}) // Listen server at localhost:8081
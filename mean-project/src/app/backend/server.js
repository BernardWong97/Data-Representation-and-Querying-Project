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

var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: String,
    password: String
})
var users = mongoose.model('users', userSchema);

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.post('/api/users', function(req, res){
    users.create({
        username : req.body.username,
        password : req.body.password
    });
})

app.get('/api/users', function(req, res){
    users.find(function(err, users) {
        if (err)
            res.send(err)
        res.json(users);
    });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("App listening at http://%s:%s", host, port)
})
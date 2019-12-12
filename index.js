// Variables

var PORT                    = 3000,
    https                   = "mongodb://localhost:27017/hotel-db";


// importing modules

var express                 = require('express'),
    app                     = express(),
    bodyParser              = require('body-parser'),
    mongoose                = require('mongoose');

// importing routes

var roomRoutes = require('./routes/room');

// malware addition

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

mongoose.connect(https, {useUnifiedTopology: true, useNewUrlParser: true}, function(err, res){
    if(err){
        console.log(err);
    }
    else{
        console.log("connected to the Mongo server");
    }
});

// connecting public files to the html
app.use(express.static(__dirname + '/public'));

//=========================================================Routes=============================================//

app.use(roomRoutes)

// ==========================================================================================================//

app.listen(PORT, function(){
    console.log("server started at port: ", PORT);
});
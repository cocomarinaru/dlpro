"use strict";

var express = require("express");
var hbs = require("expres-hbs");

var app = express();
var PORT = 80;


app = express();

// set the view engine
app.set('view engine', 'hbs');

// configure the view engine
app.engine('hbs', hbs.express4({
  defaultLayout: __dirname + '/views/layouts/default.hbs',
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts'
}));

// configure views path
app.set('views', path.join(__dirname,'/views'));


app.get("/", function (request, response) {
    response.send("In curand : fara intermediar, direct de la proprietar !");
});

app.get("/:name", function (request, response) {
    var name = request.params.name;
    response.send("Hello " + name);
});

app.listen(process.env.PORT || PORT, function () {
    console.log("Listening on port: " + PORT);
});

app.post("");

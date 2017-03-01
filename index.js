'use strict';

var PORT = 777;

var express = require("express");
var app = express();

app = express();


configure_handlebars(app);


app.get("/", function (request, response) {
    response.send("In curand : fara intermediar, direct de la proprietar !");
});

app.get("/test/:name", function (request, response) {
    var name = request.params.name;
    response.render("test", {name: name, pageTitle: "My Title!"});
});

app.listen(process.env.PORT || PORT, function () {
    console.log("Listening on port: " + PORT);
});


function configure_handlebars(app) {
    var hbs = require('express-handlebars');

    app.engine('.hbs', hbs(
        {
            defaultLayout: 'main.hbs',
            partialsDir: __dirname + '/views/partials',
            layoutsDir: __dirname + '/views/layouts',
            extname: '.hbs'
        }));
    app.set('view engine', '.hbs');
    app.set('views', __dirname + '/views');
}
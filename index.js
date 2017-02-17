var express = require("express");
var app = express();
var PORT = 771

app.get("/", function (request, response) {
    response.send("In curand : fara intermediar, direct de la proprietar !");
});

app.get("/:name", function (request, response) {
    var name = request.params.name;
    response.send("Hello " + name);
});

app.listen(process.env.PORT || PORT, function () {
    console.log("Listening on port: " + PORT);
})

var express = require("express");

var app = express();


var port = process.env.PORT || 8080;

var apiRoutes = require("./app/routing/apiRoutes");

var htmlRoutes = require("./app/routing/htmlRoutes");

app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(port, function () {
    console.log("app is listening on Port http://localhost:" + port);
});
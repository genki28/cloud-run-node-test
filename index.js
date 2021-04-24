"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var PORT = 8080;
app.get('/', function (req, res) {
    res.send('Cloud Runのテストしてみたよ');
});
app.listen(PORT, function () {
    console.log("Running http://localhost:8080");
});

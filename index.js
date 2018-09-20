var express = require("express");
var moment = require("moment");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.listen(3000, () => {
 console.log(moment().format() + "Server running on port 3000");
});

app.get("/geturl", (req, res, next) => {
    console.log('Received a request');
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.post('/posturl', function(req, res) {
    console.log(moment().format() + ' Received a callback: ' + JSON.stringify(req.body));
    res.status(200).json({});
});
var express=require("express");
var app=express();


var bodyparser=require("body-parser");
// var session = require('express-session');
// var cookieParser = require('cookie-parser');
app.use(express.json());
app.use(bodyparser());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(require("./controllers/connect"));

app.listen(process.env.PORT || 2000 ,function(){
	console.log("server");
})
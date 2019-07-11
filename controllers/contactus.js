var express=require("express");
var router=express();
var mongo = require("../model/mongo");

var app=express();

var bodyparser=require("body-parser");

app.use(express.json());
app.use(bodyparser());
app.use(bodyparser.urlencoded({ extended: true }));

router.post("/",function(req,res){
    var u = req.body.username;
    var m = req.body.mobile;
    var e = req.body.email;
    var msg = req.body.message;
    mongo.insertOne({username : u , mobile: m ,email: e, message: msg}, function(err, result){
		if(err)
    throw err;
		else
		{
			var data={ };
			data.response="success"
			data.result=result[0];
			res.send(data)
		}
	});

})

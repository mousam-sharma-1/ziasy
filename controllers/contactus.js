var express=require("express");
var router=express.Router();
var mongoD = require("../models/mongo");
// var app=express();

// var bodyparser=require("body-parser");
// app.use(express.json());
// app.use(bodyparser());
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.json());

router.post("/data",function(req,res){
	console.log(req.body.username);
	//var u= req.body.username;
    // var m = req.body.mobile;
    // var e = req.body.email;
    // var msg = req.body.message;
    mongoD.insertOne({username: req.body.username , mobile: req.body.mobile , email: req.body.email , message: req.body.message}, function(err, result){
		if(err)
    throw err;
		else
		{
			var data={ };
			data.response="success"
			data.result=result;
			res.send(data)
			console.log(data.response);
		}
	});
})
module.exports=router;
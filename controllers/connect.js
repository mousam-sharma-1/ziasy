var express=require("express");
var router=express.Router();

router.use("/contactus", require("./contactus"));
// router.use("/internship", require("./internship"));
// router.use("/freshers", require("./freshers"));
// router.use("/android", require("./android"));
// router.use("/angular", require("./angular"));
// router.use("/mean", require("./mean"));
// router.use("/java", require("./java"));
// router.use("/php", require("./php"));

console.log("hiii")

router.use("/",function(req,res){
	res.send({'status':200,'message':'good'});
	console.log("nice")
})
module.exports=router;
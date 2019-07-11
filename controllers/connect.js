var express=require("express");
var router=express();

router.use("/contactus", require("./contactus"));
router.use("/internship", require("./internship"));
router.use("/freshers", require("./freshers"));
router.use("/android", require("./android"));
router.use("/angular", require("./contactus"));
router.use("/mean", require("./mean"));
router.use("/java", require("./java"));
router.use("/php", require("./php"));



router.use("/",function(req,res){
	res.send({'status':500,'message':'you are not authorised for this'});
});

module.exports=router;
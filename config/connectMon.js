var MongoClient =  require('mongodb').MongoClient;
var url = "mongodb+srv://Mousam:mousam1399@cluster0-8wdc3.mongodb.net/test?retryWrites=true&w=majority";

//var url = "mongodb://localhost:27017";



module.exports.init=function(cb){

MongoClient.connect(url,{useNewUrlParser:true},cb);
	
}
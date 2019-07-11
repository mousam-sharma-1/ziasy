var MongoClient =  require('mongodb').MongoClient;
var url = "";

// var url = "mongodb://localhost:27017";

module.exports.init=function(cb){
	MongoClient.connect(url, cb);
	
}
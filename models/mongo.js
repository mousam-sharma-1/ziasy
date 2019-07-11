var connection = require('../config/connectMon');
var config = require('../config/db');


module.exports.insertOne=function(obj, cb){
	connection.init(function(err, client){
		var db = client.db(config.dbName);
		db.collection('contactus').insertOne(obj, cb);
	});
}
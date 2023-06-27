var MongoClient = require('mongodb').MongoClient;
const murl = "mongodb+srv://shree:shreekay@cluster0.zqi5iln.mongodb.net/vasthra?retryWrites=true&w=majority";

var MongoDbClient;
var db;

module.exports = {
	getDb: async function() {

		await new Promise((resolve, reject) => {
			if(!MongoDbClient)
			{
				MongoClient.connect(murl,{useNewUrlParser:true, useUnifiedTopology:true}, async function(error, client){
					if(error)
					{
						reject(error);
					}
					else{
						MongoDbClient=client;
						db = await client.db("vasthra");
						resolve();
					}
				});
			}
			else if(MongoDbClient.isConnected())
			{
				resolve();
			}
			else
			{
				MongoClient.connect(murl,{useNewUrlParser:true, useUnifiedTopology:true}, function(error, client){
					if(error)
					{
						reject(error);
					}
					else{
						db = client.db("vasthra");
						MongoDbClient=client;
						resolve();
					}
				});
			}
		});
		return db;
	}

};


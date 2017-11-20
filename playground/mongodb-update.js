// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err) {
		return console.log( 'Unable to connect to MongoDB server.' );
	}

	console.log( 'Connected to MongoDB server');

	// db.collection('Users').findOneAndUpdate({
	// 	name: 'MM'
	// 	}, {
	// 		$set: {
	// 			name: 'Monty'
	// 			}
	// 		}, {
	// 			returnOriginal: false
	// 			}).then((res) => {
	// 				console.log( res   );
	// 				});  // close update then



 db.collection('Users').update(
		{ name: 'Monty' },
		{ $inc: { age: 1 }},
		{ returnOriginal: false }).then((res) => {
               console.log( res   );
               });  // close update then



	// db.close();

});














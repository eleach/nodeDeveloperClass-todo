// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err) {
		return console.log( 'Unable to connect to MongoDB server.' );
	}

	console.log( 'Connected to MongoDB server');


	//deleteMany

	// db.collection('Todos').deleteMany({text: 'Eat luch'}).then((result) => {
	// 	console.log( result );
	// 	});


	//deleteOne, deletes first matching

	// db.collection('Todos').deleteOne({text: 'Eat luch'}).then((result) => {
	// 	console.log( result );
	// 	});


	// findOneAndDelete, returns item that was deleted

	// db.collection('Users').deleteMany({name: 'NN' }).then((result) => {
	// 	console.log( result );
	// 	});

   //////////////// challenge


	db.collection('Todos').findOneAndDelete({
		_id: new ObjectID('5a3001817408ac4652c7f74c')}).then((result) => {
		console.log( result );
	});

// 5a121035a49f735b47465537


	// db.close();

});














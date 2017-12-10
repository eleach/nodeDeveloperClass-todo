// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err) {
		return console.log( 'Unable to connect to MongoDB server.' );
	}

	console.log( 'Connected to MongoDB server');


	db.collection('users').find().toArray().then((docs) => {
		console.log('users' );
		console.log(	JSON.stringify(docs, undefined, 2));
		}, (err) => {
			console.log( 'Unable to fetch todos'  );
		});


   // db.collection('todos').find().toArray().then((docs) => {
   //    console.log('todos' );
   //    console.log(   JSON.stringify(docs, undefined, 2));
   //    }, (err) => {
   //       console.log( 'Unable to fetch todos'  );
   //    });



	// db.collection('todos').find().count().then((count) => {
	// 	console.log(`todos count: ${count}` );
	// 	}, (err) =>{
	// 	console.log( 'Unable to fetch todos.'   );
	// 	});  // end promise then



	db.close();

});


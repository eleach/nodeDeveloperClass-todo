var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	console.log( req.body );
	var todo = new Todo ({
		text: req.body.text
	})

	todo.save().then((doc) => {
		res.send(doc);
		}, (e) => {
			res.status(400).send(e);
		});
});

app.listen(3000, () => {
	console.log("server started on port 3000");
});


// var newTodo = new Todo({
// 	text: 'Cook dinner'
// 	});

// newTodo.save().then((doc) => {
// 	console.log( 'Saved todo.', doc   );
// 	}, (e) => {
//
// 	console.log( 'Unable to save todo.'   );
// 	});


// var newUser = new user({
// 	email: "eeleach@yahoo.com"
// });
//
// newUser.save().then((doc) => {
// 	console.log( "saved user.", doc   );
// 	}, (e) => {
// 		console.log(	"unable to save user"   );
// 	})
//
// ///  checking
//
// const {MongoClient, ObjectID} = require('mongodb');
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
//
//    if (err) {
//       return console.log( 'Unable to connect to MongoDB server.' );
//    }   
//
//    console.log( 'Connected to MongoDB server');
// 	
//
// 	db.collection('users').find().toArray().then((docs) => {
// 	   console.log('users' );
// 	   console.log(   JSON.stringify(docs, undefined, 2));
// 	   }, (err) => {
// 	      console.log( 'Unable to fetch todos'  );
// 	   });
// 	
// 		db.close();
// 	});

/// end checking


		
//
// var newTodo = new Todo({
// 	text: 'CCook dinner2',
// 	});
//
// newTodo.save().then((doc) => {
// 	console.log( 'Saved todo.', doc   );
// 	}, (e) => {
//
// 	console.log( 'Unable to save todo.'   );
// 	});
//


var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


var app = express();

// for heroku
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.status(200).send('Hello world.')
});

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


app.get('/todos', (req,res) => {
	Todo.find().then((todos) => {
		res.send({ todos } );
		}, (e) =>  {
			res.status(400).send(e);
		});
	});

app.get('/todos/:id', (req, res) => {
	
	var id = req.params.id;

	// res.send(req.params);
	// res.send(req.params.id);

	/// test valid ID
	if (!ObjectID.isValid(id)) {
		return res.status(404).send("Invalid ID.")
	} 

	///// findById in database
	Todo.findById(id).then((todo) => {
		if (!todo) {
			return res.status(404).send();
		}
		res.send( {todo} );
		}).catch((e) => {
			res.status(400).send(e);
	});

	// success

// 	if (todo) send it back
// 		else send 404

	//error

});

app.delete('/todos/:id', (req, res) => {

	console.log( "in delete"   );

	var id = req.params.id;

// if not valid ID return 404
	if (!ObjectID.isValid(id)) {
	   return res.status(404).send("Invalid ID.")
	};

  Todo.findByIdAndRemove(id).then((todo) => {
	if (!todo) {
		return res.status(400);
	}
	res.send(todo);
	}).catch((e) => {
      res.status(400).send(e);
 	});

});


app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

module.exports = { app };


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


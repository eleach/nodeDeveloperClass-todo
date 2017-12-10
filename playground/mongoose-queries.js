const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

///  todos
/// var id = '5a29c76e6509645d03248fbb';

/// users
var id = '5a2716f7bdfccd40e83d5ddd';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid.');
// 	}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

//
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log( 'No todo.'  );
// 	} 
// 	console.log('Todo by id', todo);
// }).catch((e)  => console.log(	e ));;

User.findById(id).then((u) => {
	if (!u) {
		return console.log( 'No user.'  );
	} 
	console.log('\n User by id:\n\n', u);
}).catch((e)  => console.log(	e ));;




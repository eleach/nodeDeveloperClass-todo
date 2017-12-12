const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');


//  remove all
// Todo.remove({}).then((result) => {
//
// 	console.log(result);
//
// });

// Todo.findOneAndRemove({}) => {
//
//
// });
//
//

var id = '5a3001817408ac4652c7f74d';
//        5a3001817408ac4652c7f74d


// Todo.findByIdAndRemove(id).then((todo) => {
//   if (!todo) {
// 	console.log("could not find todo");
//   }
//   console.log( "deleted", todo   );
// }).catch((e) => console.log( e ));;

  // if (!ObjectID.isValid(id)) {
  //   return console.log( "not valid id"   );
  // }   

//   Todo.findByIdAndRemove(id).then((todo) => {
//     if (!todo) {
//       return console.log( "could not find todo"   );;
//     }
// 	 console.log(	todo   );
//
//   }).catch((e) => {
//   		console.log( e   );
// });
//

Todo.remove({}).then((result) => {
		console.log( result   );
	});


//
// Todo.findById(id).then((u) => {
//    if (!u) {
//       return console.log( 'No user.'  );
//    }
//    console.log('\n User by id:\n\n', u);
// }).catch((e)  => console.log( e ));;


// Todo.findById(id, function(err, todo) {
// 	if (err) {
// 		console.log( err   );
// 		}
//
// 	}).catch((e) => console.log(	e  ));



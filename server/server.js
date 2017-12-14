var env = process.env.NODE_ENV || 'development';

console.log('env = :: ', env   );

if ( env === 'development') {
	process.env.PORT = 3000;
	process.env.MONGODB_URI='mongodb://localhost:27017/TodoApp'

	} else if ( env === 'test' ) {
	process.env.PORT = 3000;
	process.env.MONGODB_URI='mongodb://localhost:27017/TodoAppTest'
	}



var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    // res.send({todos});
    res.status(200).send("hello World");
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send(todo);
  }).catch((e) => {
    res.status(400).send();
  });
});



///////// utils by Ed
// remove
app.get('/remove', (req, res) => {
 
  Todo.findByIdAndRemove('5a3284128e1e082f6e414fab').then((t) => {
    if (!t) {
      return res.status(404).send("could not find document");
    }   
 
    res.send(t);

  }).catch((e) => {
    res.status(400).send();
  }); 
}); 

// add
app.get('/add', (req, res) => {

	var myDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
	var myText = "Test todo: " + myDate;

  var todo = new Todo({
    text:  myText
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });

})

///////// end utils by Ed



app.get('/list', (req, res) => {
 
  Todo.find().then((c) => {
    res.send({c});
    // res.status(200).send("hello World");
  }, (e) => {
    res.status(400).send(e);
  }); 
}); 


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};


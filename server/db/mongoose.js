var mongoose = require('mongoose');

// use buildin Promise library, not 3rd party addon
mongoose.Promise = global.Promise;

// process.env for heroku
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', { useMongoClient: true})

// mongoose.connect(process.env.MONGODB_URI), { useMongoClient: true};

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true} );

module.exports = { mongoose };


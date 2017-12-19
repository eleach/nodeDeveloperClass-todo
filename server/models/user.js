const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
},
{ usePushEach: true }    );

// you NEED that line above - usePushEach


// determines what gets sent back
UserSchema.methods.toJSON = function () {
  var user = this;

  // mongoose method toObject
  var userObject = user.toObject();

  // return only publicly available properties, not tokens
  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';

  // args: data we want to sign
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
};


// statics because this is a model method, not an instance method
UserSchema.statics.findByToken = function (token) {
	
	// model method User
	var User = this;
	var decoded;

	try {
		decoded = jwt.verify(token, 'abc123');
	} catch (e) {
		// more wordy, but same as below
		// return new Promise((resolve, reject) => {
		//		reject();
		// });
		return Promise.reject("user did not jwt verify, user.js, line 73");
	}

	return User.findOne({

		// put quotes around properties with dot "." in name
		// put quotes around _id for consistency

		'_id': decoded._id,
		'tokens.token': token,
		'tokens.access': 'auth'

	});

}



var User = mongoose.model('User', UserSchema);

module.exports = {User}


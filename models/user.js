var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogtest');
//each schema maps to a MongoDB collection and defines the shape of the documents within that collection
var Schema = mongoose.Schema;

// var User = new Schema ({
var UserSchema = new Schema ({
  username: String,
  password: String
});

UserSchema.methods.validPassword = function (password){
  return this.password == password;
};

// module.exports = mongoose.model("users", User);
module.exports = mongoose.model("user", UserSchema);

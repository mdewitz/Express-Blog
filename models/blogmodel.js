var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/blogtest');
//each schema maps to a MongoDB collection and defines the shape of the documents within that collection
var Schema = mongoose.Schema;

//blueprint for data, defining your schema
var blogSchema = new Schema ({
  author: String,
  title: {type:String, required: true},
  content: String,
//   created_at: {type: Date}
}); 

// var userSchema = new Schema ({
//   username: String,
//   password: String
// });

//architect; point of access
//model is a class that constructs documents
module.exports = mongoose.model("Blog", blogSchema);
// module.exports = mongoose.model("User", userSchema);
// var express = require('express');
// var router = express.Router();
// var User = require('../models/user');
// //usermodel?
// var passport = require('passport'), LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// // ));
// // function ensureAuthenticated( req, res, next){
// //   if(req.isAuthenticated()) {return next(); }
// //   res.redirect('/login');
// // }
// // passport.serializeUser(function (user, done) {
// //   done(null, user.id);
// // });

// // passport.deserializeUser(function (id, done) {
// //   User.findById(id, function (err, user) {
// //     done(err, user);
// //   });
// // });

// // router.list = function (req, res){
// //   //find all Todo data in collection
// //   Blog.find(function(err, blogsFromDB){
// //     // console.log(todosFromDB);
// //     res.render('Blog', {
// //       blogs : blogsFromDB
// //     });    
// //   });
// // };

// router.get('/admin', function (req, res){
//   res.render('login');
//   // function (err, login){
//   //   if (err) throw err;
//   //   res.send("okay");
// });

// //attaching authenticate to the router
// router.authenticate  = passport.authenticate('local', {
//   successRedirect: '/admin',
//   failureRedirect: '/login'
// });
// //can call array of middleware in array...ie[authenticate, pugs, kitten] before ",function"
// router.post('/admin', router.authenticate);

// router.get('logout', function ( req, res){
//   res.logout();
//   res.redirect('/');
// });

// // router.post('/login', authenticate, function (req, res){
// //   console.log('req.body', req.body);
// //   res.send('hello');
// // });

// module.exports = router;
// // // get edit blog form page
// // router.get('/:id', function (req, res){
// //   var blog_id = req.params.id;

// //   Blog.findById(blog_id, function (err, blog){
// //     res.render('fullblog', {
// //       blogs : blog
// //     });
// //   });
// // });

// // //post data
// // router.post('/', function (req, res){
// //   //prep data 
// //   var newBlog = new Blog({
// //     author: req.body.author,
// //     title: req.body.title,
// //     content: req.body.content,
// // //     is_done: false,
// // //     created_at: new Date()
// //   });
// //   //save data to db (mongodb via mongoose)
// //   newBlog.save(function (err){
// //     if(err) throw err;
// //     res.redirect('/');
// //   });
// // });

// // router.put('/:id', function (req, res){
// //   var blog_id = req.params.id;
// //   Blog.findById(blog_id, function(err, blogsFromDB){
// //     blogsFromDB.author = req.body.author;
// //     blogsFromDB.title = req.body.title;
// //     blogsFromDB.content = req.body.content;
// //     blogsFromDB.save(function (err){
// //       if(err) throw err;
// //       res.redirect('/');
// //     });
// //   });
// // });


// // //delete item in todo list
// // router.delete('/:id', function (req, res){
// //   var blog_id = req.params.id; //req.params for dynamic url 
// //   Blog.findById(blog_id, function (err, blog){ //find todo item by id
// //     Blog.remove(blog, function() { //remove todo item
// //       res.redirect('/'); //redirect by to list page
// //     });
// //   });
// // });

// // //put data
// // router.put('/:id/complete', function (req, res){
// //   // var todo_id = req.params.id;
// //   console.log("update");
// //   Blog.update({_id: req.params.id},
// // //     {is_done : true}, 
// //      function (err, blog){
// //       if (err) throw err;
// //       res.send("okay");
// //       // res.redirect('/');
// //     });
// // });

// // module.exports = router;
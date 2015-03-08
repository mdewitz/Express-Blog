var express = require('express');
var router = express.Router();
var User = require('../models/user');
//usermodel?
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(username);
    User.findOne({ username: username }, function (err, user) {
      console.log(user);
      if (err) { 
        console.log('err');
        return done(err);
         }
      if (!user) {
        console.log('Not user');
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        console.log('invalid');        
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


router.get('/login', function (req, res){
  res.render('login');
  // function (err, login){
  //   if (err) throw err;
  //   res.send("okay");
});

//attaching authenticate to the router
router.authenticate  = passport.authenticate('local', {
  successRedirect: '/blog/admin',
  failureRedirect: '/login'
});
//can call array of middleware in array...ie[authenticate, pugs, kitten] before ",function"
router.post('/login', router.authenticate);

router.get('logout', function ( req, res){
  res.logout();
  res.redirect('/');
});

// router.get('/new_user', function (req, res){
//   // console.log('req.body', req.body);
//   User.findOne({ username: 'small'}, function (err, small) {
  //create({username:username. password:password})
//   if (err) return handleError(err);
//   res.send(small);
//   console.log(!small);
//   // saved!
// });
//   // res.send('hello');
// });



module.exports = router;
// // get edit blog form page
// router.get('/:id', function (req, res){
//   var blog_id = req.params.id;

//   Blog.findById(blog_id, function (err, blog){
//     res.render('fullblog', {
//       blogs : blog
//     });
//   });
// });

// //post data
// router.post('/', function (req, res){
//   //prep data 
//   var newBlog = new Blog({
//     author: req.body.author,
//     title: req.body.title,
//     content: req.body.content,
// //     is_done: false,
// //     created_at: new Date()
//   });
//   //save data to db (mongodb via mongoose)
//   newBlog.save(function (err){
//     if(err) throw err;
//     res.redirect('/');
//   });
// });

// router.put('/:id', function (req, res){
//   var blog_id = req.params.id;
//   Blog.findById(blog_id, function(err, blogsFromDB){
//     blogsFromDB.author = req.body.author;
//     blogsFromDB.title = req.body.title;
//     blogsFromDB.content = req.body.content;
//     blogsFromDB.save(function (err){
//       if(err) throw err;
//       res.redirect('/');
//     });
//   });
// });


// //delete item in todo list
// router.delete('/:id', function (req, res){
//   var blog_id = req.params.id; //req.params for dynamic url 
//   Blog.findById(blog_id, function (err, blog){ //find todo item by id
//     Blog.remove(blog, function() { //remove todo item
//       res.redirect('/'); //redirect by to list page
//     });
//   });
// });

// //put data
// router.put('/:id/complete', function (req, res){
//   // var todo_id = req.params.id;
//   console.log("update");
//   Blog.update({_id: req.params.id},
// //     {is_done : true}, 
//      function (err, blog){
//       if (err) throw err;
//       res.send("okay");
//       // res.redirect('/');
//     });
// });

// module.exports = router;
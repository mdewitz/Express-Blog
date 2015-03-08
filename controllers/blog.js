var express = require('express');
var router = express.Router();
var Blog = require('../models/blogmodel');
// var auth = require('./auth');

function ensureAuthenticated( req, res, next){
  if(req.isAuthenticated()) {return next(); }
  res.redirect('/login');
}

router.list = function (req, res){
  //find all Todo data in collection
  Blog.find(function(err, blogsFromDB){
    // console.log(todosFromDB);
    res.render('Blog', {
      blogs : blogsFromDB
    });    
  });
};

router.get('/admin', ensureAuthenticated, function (req, res){
  Blog.find(function (err, blogs){
    res.render('admin', {blogs: blogs});
  });
});


router.get('/new', ensureAuthenticated, function (req, res){
  res.render('newBlog');
});

// get edit blog form page
router.get('/:id', function (req, res){
  var blog_id = req.params.id;

  Blog.findById(blog_id, function (err, blog){
    res.render('edit', {
      blogs : blog
    });
  });
});

//post data
router.post('/', ensureAuthenticated, function (req, res){
  //prep data 
  var newBlog = new Blog({
    date: req.body.date,
    author: req.body.author,
    title: req.body.title,
    content: req.body.content,
//     is_done: false,
//     created_at: new Date()
  });
  //save data to db (mongodb via mongoose)
  newBlog.save(function (err){
    if(err) throw err;
    res.redirect('/');
  });
});

router.put('/:id', ensureAuthenticated, function (req, res){
  var blog_id = req.params.id;
  Blog.findById(blog_id, function(err, blogsFromDB){
    blogsFromDB.date = req.body.date;
    blogsFromDB.author = req.body.author;
    blogsFromDB.title = req.body.title;
    blogsFromDB.content = req.body.content;
    blogsFromDB.save(function (err){
      if(err) throw err;
      res.redirect('/');
    });
  });
});


//delete item in todo list
router.delete('/:id', ensureAuthenticated, function (req, res){
  var blog_id = req.params.id; //req.params for dynamic url 
  Blog.findById(blog_id, function (err, blog){ //find todo item by id
    Blog.remove(blog, function() { //remove todo item
      res.redirect('/blog/admin'); //redirect by to list page
    });
  });
});

//put data
router.put('/:id/complete', ensureAuthenticated, function (req, res){
  // var todo_id = req.params.id;
  console.log("update");
  Blog.update({_id: req.params.id},
//     {is_done : true}, 
     function (err, blog){
      if (err) throw err;
      res.send("okay");
      // res.redirect('/');
    });
});

// router.post('/test', function (req, res){
//   res.render('test_admin');
// });

module.exports = router;
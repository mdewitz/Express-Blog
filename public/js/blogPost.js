$(function(){
  $('.slideshow').slick();
//     var width = 720;
//     var animationSpeed= 1000;
//     var pause = 3000;
//     var currentSlide =1;

//     var $slider = $('#slider');
//     var $slideContainer = $slider.find('.slides');
//     var $slides = $slideContainer.find('.slide');
//     setInterval(function() {
//       $slideContainer.animate()({'margin-left': '-=' + width}, animationSpeed, function(){
//         currentSlide++;
//         if(currentSlide === $slides.length){
//             currentSlide=1;
//             $slideContainer.css('margin-left', 0);
//         }
//       });
//     }, pause);  
  // $('h1').hover(function(){
  //   $('.new_post').css("display", "inline");
  // }, function(){
  //     $('.new_post').css("display", "none");
  //   }
  // );
  // function next_pic = $('.next').click(function(){
  //   var imageArr=["http://media1.giphy.com/media/ClcWrARkrq1GM/200.gif", "http://media0.giphy.com/media/ChTbtWsFB75oA/200.gif", "http://25.media.tumblr.com/tumblr_m5kbumtPpi1r777xho1_500.gif"];
  //   var num=0;
  //   $('.post').css("background-image", "ur('" + imageArr[num] + "'')");
  //   num++;
  // });
  // $('.main_title').click(function(){
  //   $('.hide').toggle();
  //   }
  // );


//blog page


  // $('button').find('.blog_login_button').hover(function(){
  //   $('this').css("display", "inline-block");
  // }, function(){
  //     $('this').css("display", "none");
  //   }
  // );
//login page
  $('.login_button').hover(function(){
    $(this).css("background-color", "rgba(0, 128, 255, .5)");
  }, function(){
    $(this).css("background-color", "rgba(0, 128, 255, .7)");
    }
  );
  $('.username').keypress(function(){
    $('.login_button').css("background-color", "rgba(0, 128, 255, .7");
  });
  $('.password').keypress(function(){
    $('.login_button').css("background-color", "rgba(0, 128, 255, .7)");
  });

//Admin
  //create new post form
  $('h1').click(function(){
    $('.new_post').slideToggle('slow');
    }
  );
  //login button on login.jade
  $('.login_button').hover(function(){
    $(this).css("background-color", "rgba(0, 128, 255, .7)");
  }, function(){
    $(this).css("background-color", "rgba(0, 128, 255, .5)");
    }
  );
  //create button on admin.jade
  $('.create_post').hover(function(){
    $(this).css("background-color", "rgba(0, 128, 255, .7)");
  }, function(){
    $(this).css("background-color", "rgba(0, 128, 255, .5)");
    }
  );
  //view old posts
  $('.main_title').click(function(){
    $(this).find('old.post').css("display", "inline");
    $(this).find('.old_post').slideToggle('slow');
    }
  );
  $('.main_title').hover(function(){
    $(this).css("background-color", "rgba(0, 128, 255, .7)");
  }, function(){
    $(this).css("background-color", "rgba(224, 224, 224, .5)");
    }
  );  



//edit post
  $('.update_button').hover(function(){
    $(this).css("background-color", "rgba(0, 128, 255, .7)");
  }, function(){
    $(this).css("background-color", "rgba(0, 128, 255, .5)");
    }
  );
});
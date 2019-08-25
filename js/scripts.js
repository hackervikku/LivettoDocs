jQuery(document).ready(function(){

  /* Nav slide */

  $("#menu-btn, .cross-cont, .burger-cross").on("click", function(){
    if($("nav").width() == 0){
      $("nav").css({
        "width":"100%"
      });
      $(".burger-lines").css({
        "visibility":"hidden"
      });
      $(".cross-cont, .burger-cross").fadeIn();
    }else{
      $("nav").css({
        "width":"0"
      });
      $(".burger-cross").fadeOut();
      $(".burger-lines").css({
        "visibility":"visible"
      });
    }
  });

  /* Move to a section */

  $('nav a, #btn-left, #btn-right').click(function(){
        $(".burger-cross").fadeOut();
        $(".burger-lines").css({
          "visibility":"visible"
        });
        $("nav").css({
          "width":"0"
          });
		  $('html, body').animate({
			  scrollTop: $( $.attr(this, 'href') ).offset().top
  		  }, 1300);
		    return false;
		});

    /*======== Remove Focus fron nav links ========*/

    $("#brand-logo, a, .btn").bind("mouseup touchend", function(){
        $(this).blur();
    });

    /* Back to top of the page */

      $("#brand-logo, #brand-logo a").click(function(){
        $("html, body").animate({
        scrollTop: 0
        }, 600);
      });

});

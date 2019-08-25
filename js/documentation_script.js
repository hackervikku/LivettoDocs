jQuery(document).ready(function(){

  $(".hamburger").on("click", menuAnimate);

    function menuAnimate(){
      $(".hamburger").toggleClass("is-active");
      $("nav").toggleClass("open-menu");

    };

  $(".indicator").on("click", showLinks);

    function showLinks(){

      var allMenus = $("#ab-menu, #str-menu, #ht-menu"),
          allCarets = $("#ab-caret, #str-caret, #ht-caret"),
          linkId = $(this).attr("data-menu"),
          caretId = $(this).attr("data-caret"),
          nav = $("nav"),
          hamburger = $(".hamburger");

            $(allMenus).not($(linkId)).removeClass("show");
            $(allCarets).not($(caretId)).removeClass("caret-rotate");

            $(linkId).toggleClass("show");
            $(caretId).toggleClass("caret-rotate");


      $(".nav-links a, .nav-links.credits").on("click", closeMenu);

        function closeMenu(){

          showLinks();

            $(nav).removeClass("open-menu");
            $(hamburger).removeClass("is-active");
            $('html, body').stop().animate({
              scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
        }



    };


    // Top of the page

    $(".fa-arrow-circle-up").on("click", function(){
      $("html, body").animate({
      scrollTop: 0
      }, 600);
    });

// Open close menu



});

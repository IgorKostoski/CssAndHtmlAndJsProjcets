$(document).ready(function() {
    var menu = $("nav ul");
  
    $("#toggle-btn").on("click", function(e) {
      e.preventDefault();
      menu.slideToggle();
    });
  
    $(window).resize(function() {
      var w = $(this).width();
      if (w > 580 && menu.is(":hidden")) {
        menu.removeAttr("style");
      }
    });
  
    $("nav li").on("click", function() {
      var w = $(window).width();
      if (w < 580) {
        menu.slideUp();
      }
    });
  
    $(".open-menu").height($(window).height());
  });

  

//   smooth scrolling


$$(document).ready(function() {
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if (!$target.is(":focus")) {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        }
                    });
                }
            }
        });
});
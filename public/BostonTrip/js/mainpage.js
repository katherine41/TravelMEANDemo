
$(window).scroll(function() {
    if ($(".navbar-fixed-top").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        // $(".navbar-fixed-bottom").addClass("bottom-nav-collapse ");
        // document.getElementById("loveicon").src="image/love2.png";
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        // $(".navbar-fixed-bottom").removeClass("bottom-nav-collapse ");
        // document.getElementById("loveicon").src="image/love1.png";
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

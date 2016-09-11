$(window).on('scroll', function () {
        var nav = $(".menu"),
            mobile_menu = $(".navigation"),
            menu_button = $("#mobile-nav-button");

        if ($(window).scrollTop() > 330 && $(window).width() > 480) {
            nav.addClass("attached-nav");
            $(".page-title").css({"margin-top": "90px"});
        }
        else if ($(window).width() <= 480) {

            if ((nav.css("display") == 'none') && $(window).scrollTop() > 200) {
                mobile_menu.addClass("attached-nav");
                $(".page-title").css({"margin-top": "76px"});
            } else if (!(nav.css("display") == 'none') && $(window).scrollTop() > 200) {
                mobile_menu.addClass("attached-nav");
                $(".page-title").css({"margin-top": "285px"});
            } else {
                nav.removeClass("attached-nav");
                mobile_menu.removeClass("attached-nav");
                $(".page-title").css({"margin-top": "40px"});
            }
        } else {
            nav.removeClass("attached-nav");
            mobile_menu.removeClass("attached-nav");
            $(".page-title").css({"margin-top": "40px"});
        }
    }
);


var width = $(window).width();
$(window).on('resize', function () {

    if ($(this).width() != width) {
        var nav = $(".menu");
        if ($(this).width() > 480) {
            nav.css({"display": "block"});
            $("#mobile-nav-button").removeClass("close-icon");
        } else {
            nav.css({"display": "none"});
            $("#mobile-nav-button").removeClass("close-icon");
        }
    }
});

$("#mobile-nav-button").on("click", function () {
    $(this).toggleClass("close-icon");
    if ($(this).hasClass("close-icon")) {
        $(".menu").css({"display": "block"});
    } else {
        $(".menu").css({"display": "none"});
    }
});
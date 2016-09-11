$(document).ready(function () {
    renderView("about");

    $(".page-nav a").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        renderView($(this).attr("id"));
        $(".page-nav a").removeClass("active");
        $(this).addClass("active");
        if($(window).width() <= 480) {
            $(".menu").css({"display": "none"});
            $("#mobile-nav-button").removeClass("close-icon");
            $("html,body").animate({scrollTop: 200}, 400);
        } else {
            $("html,body").animate({scrollTop: 350}, 400);
        }
    });

    function renderView(page_name) {
        $.get(page_name + '.html', function (data) {
            $('.container').html(data);
        });
    }
});

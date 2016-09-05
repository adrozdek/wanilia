$(".fcb-icon").on("click", function () {
    $(this).toggleClass("seen");
    if($(this).hasClass("seen")) {
        $(".fb-page").animate({left: "0px"});
        $(this).animate({left: "180px"});
    } else {
        $(".fb-page").animate({left: "-180px"});
        $(this).animate({left: "0px"});
    }
});

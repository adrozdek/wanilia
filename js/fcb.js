$(".fcb-icon").on("click", function () {
    $(this).toggleClass("seen");
    if($(this).hasClass("seen")) {
        $(".fb-page").animate({left: "0px"});
        $(this).animate({left: "260px"});
    } else {
        $(".fb-page").animate({left: "-260px"});
        $(this).animate({left: "0px"});
    }
});



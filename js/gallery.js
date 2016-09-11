var goLeftOrRight = function (side) {
    var activePhoto = $(".gallery .image-wrapper.active"),
        circles = activePhoto.parent().find(".circles"),
        index;

    activePhoto.addClass("hidden").removeClass("active");
    if (side == 'left') {
        if (activePhoto.find("img").attr("src") == activePhoto.parent().find(".image-wrapper").first().find("img").attr("src")) {
            activePhoto.parent().find(".image-wrapper").last().removeClass("hidden").addClass("active");
            index = activePhoto.parent().find(".image-wrapper").index(activePhoto.parent().find(".image-wrapper").last());
        } else {
            activePhoto.prev().addClass("active").removeClass("hidden");
            index = activePhoto.parent().find(".image-wrapper").index(activePhoto.prev());
        }

    } else {
        if (activePhoto.find("img").attr("src") == activePhoto.parent().find(".image-wrapper").last().find("img").attr("src")) {
            activePhoto.parent().find(".image-wrapper").first().removeClass("hidden").addClass("active");
            index = activePhoto.parent().find(".image-wrapper").index(activePhoto.parent().find(".image-wrapper").first());
        } else {
            activePhoto.next().addClass("active").removeClass("hidden");
            index = activePhoto.parent().find(".image-wrapper").index(activePhoto.next());
        }
    }

    circles.children().removeClass("active-circle");
    circles.children().eq(index).addClass("active-circle");
};

var presentGallery = function (name) {
    var gallery = $('.' + name + '-gallery'),
        galleryImageWrapperChildren = gallery.find(".image-wrapper"),
        circles = $('.' + name + '-gallery .circles'),
        placeAfterIcon = $('#' + name);

    hideGalleries();

    if (!gallery.hasClass("hidden")) {
        return;
    }

    circles.children().remove();
    galleryImageWrapperChildren.get().forEach(function () {
        circles.append('<div class="circle"></div>');
    });

    // if ($(window).width() < 560) {
    //     gallery.detach().insertAfter(placeAfterIcon);
    // }

    gallery.removeClass("hidden");
    galleryImageWrapperChildren.addClass("hidden");
    galleryImageWrapperChildren.first().removeClass("hidden").addClass("active");
    gallery.find(".circle").first().addClass("active-circle");
};

var hideGalleries = function () {
    var galleries = $(".menu-page .gallery");

    galleries.addClass("hidden");
    galleries.children(".image-wrapper").removeClass("active");
    galleries.children(".image-wrapper").addClass("hidden");
};

$(document).on("click", '.menu-page .images .image-wrapper', function () {
    presentGallery($(this).find($("span")).attr("class"));
});

$(document).on("click", ".menu-page .gallery .arrow", function () {
    var direction = $(this).prop("classList")[1];
    goLeftOrRight(direction);
});

$(document).on("click", ".menu-page .gallery .image-wrapper.active", function () {
    goLeftOrRight('right');
});

$("body").on("keydown", function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
        goLeftOrRight('left');
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
        goLeftOrRight('right');
    }
});


$(document).on("click", ".news-page .previous-news .image-wrapper img", function () {
    var info_wrapper = $(".news-page > .image-wrapper img");
    var info_wrapper_src = $(info_wrapper).attr("src");
    console.log(info_wrapper_src);
    console.log($(this).attr("src"));

    $(info_wrapper).attr("src", $(this).attr("src"));

    var x = $(".news-page .previous-news .image-wrapper").first();

    if (info_wrapper_src == "images/info1.jpg" && x.find("img").attr("src") != "images/info1.jpg") {
        x.clone(true).removeAttr('style').find("img").attr("src", info_wrapper_src).parent().prependTo($(".news-page .previous-news"));
    }
});
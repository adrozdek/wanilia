var photos = $('.photos .image-wrapper img').map(function(){
    return $(this).attr('src')
}).get()

photos.forEach(function() {
    $('.big-image .circles')
        .append('<div class="circle"></div>');
});


$(".big-image .circles .circle").first().addClass("active");


$(".arrow.right").on('click', function(e) {
    goRight(e);
});

$(".arrow.left").on('click', function(e) {
    goLeft(e);
});

$(".photos .image-wrapper img").on("click", function(e) {

    var circles = $(".circles").children("div");
    var big_image = $(".big-image .image-wrapper img");
    var images = $('.photos .image-wrapper img').map(function(){
        return $(this).attr('src')
    }).get();
    big_image.attr("src", $(this).attr("src"));
    var index = images.indexOf(big_image.attr("src"));
    console.log(big_image.attr("src"));

    console.log(images);
    console.log(index);
    circles.attr("class", "circle");

    circles[index].classList.add("active");

});

var goLeft = function(e) {
    var circles = $(".circles").children("div");
    var big_image = $(".big-image .image-wrapper img");

    e.preventDefault();
    e.stopPropagation();
    var images = $('.photos .image-wrapper img').map(function(){
        return $(this).attr('src')
    }).get();

    var length = images.length;
    var index = images.indexOf(big_image.attr("src"));

    if(index == 0) {
        console.log("from start now");
        big_image.attr("src", images[length -1]);
        circles.attr("class", "circle");
        circles[length - 1].classList.add("active");
    } else {
        big_image.attr("src", images[index -1]);
        circles.attr("class", "circle");
        circles[index -1].classList.add("active");
    }
};

var goRight = function(e) {
    e.preventDefault();
    e.stopPropagation();
    var big_image = $(".big-image .image-wrapper img");
    var circles = $(".circles").children("div");

    var images = $('.photos .image-wrapper img').map(function(){
        return $(this).attr('src')
    }).get();
    var index = images.indexOf(big_image.attr("src"));

    if(index == (images.length -1)) {
        big_image.attr("src", images[0]);
        circles.attr("class", "circle");
        circles[0].classList.add("active");
    } else {
        big_image.attr("src", images[index +1]);
        circles.attr("class", "circle");
        circles[index + 1].classList.add("active");
    }
};

$("body").keydown(function(e){
    // left arrow
    if ((e.keyCode || e.which) == 37)
    {
        goLeft(e);
    }
    // right arrow
    if ((e.keyCode || e.which) == 39)
    {
        goRight(e);
    }
});

$(".menu .cakes-gallery .big-image img").on("click", function (e) {
    goRight(e);
});

$(".menu .kind .image-wrapper.cakes").on("click", function () {
    console.log("klik");
    $("div.cakes-gallery").toggleClass("hidden");
});




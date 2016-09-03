var about = document.getElementById("about");
var menu = document.getElementById("menu");
var info = document.getElementById("info");
var contact = document.getElementById("contact");
container = document.getElementById("container");
nav = document.getElementsByClassName("page-nav")[0];
title = document.getElementsByClassName("cafe-title")[0];

about.addEventListener("click", function (e) {
    e.preventDefault();

    addHiddenClassToContainerChildren();
    removeActiveClassFromNav();
    this.classList.add("active");
    title.innerHTML = "O Wanilia Cafe";
    document.getElementsByClassName("about")[0].classList.remove("hidden");
});

menu.addEventListener("click", function (e) {
    e.preventDefault();

    addHiddenClassToContainerChildren();
    removeActiveClassFromNav();
    this.classList.add("active");
    title.innerHTML = "Menu";

    document.getElementsByClassName("menu")[0].classList.remove("hidden");
});

info.addEventListener("click", function (e) {
    e.preventDefault();

    addHiddenClassToContainerChildren();
    removeActiveClassFromNav();
    this.classList.add("active");
    title.innerHTML = "Informacje";

    document.getElementsByClassName("info")[0].classList.remove("hidden");
});

contact.addEventListener("click", function (e) {
    e.preventDefault();

    addHiddenClassToContainerChildren();
    removeActiveClassFromNav();
    this.classList.add("active");
    title.innerHTML = "Kontakt";

    document.getElementsByClassName("contact")[0].classList.remove("hidden");
});

counter = 0;

$(".info .previous-info .image-wrapper img").on("click", function () {
    console.log("ba");
    var info_wrapper = $(".info > .image-wrapper img");
    var info_wrapper_src = $(info_wrapper).attr("src");
    console.log(info_wrapper_src);

    $(info_wrapper).attr("src", $(this).attr("src"));
    // var to_copy = $(this).outerHTML.copy().find("img").attr("src", info_wrapper_src);

    // $(this).hide();
    // var to_copy = image_wrapper.find("img").attr("src", info_wrapper_src);
    // console.log(image_wrapper);
    // console.log(image_wrapper.find("img"));
    // console.log(to_copy);
    // console.log($(this).outerHTML().find("img"));

    // $(".info .previous-info").prepend(to_copy);
    // $(".info .previous-info").prepend("<div class='image-wrapper'></div>");
    var x = $(".info .previous-info .image-wrapper").first();
    console.log(x);

    if (info_wrapper_src == "images/info1.jpg" && x.find("img").attr("src") != "images/info1.jpg") {
        x.clone(true).removeAttr('style').find("img").attr("src", info_wrapper_src).parent().prependTo($(".info .previous-info"));
    }
});

function addHiddenClassToContainerChildren() {
    for (var i = 0; i < container.children.length; i++) {
        container.children[i].classList.add("hidden");
    }
}

function removeActiveClassFromNav() {
    for (var i = 0; i < nav.children.length; i++) {
        nav.children[i].firstChild.classList.remove("active");
    }
}


//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");
var nav = $("nav");
var a = 0;
var b = 0;

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
        a = a ? 0 : 1;
        if (b == 0) {
        $("nav").toggleClass("putih");}
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (a == 0) {
            if (scroll_pos > 0) {
                $("nav").addClass("putih");
                $("nav img.hitam").show();
                $("nav img.putih").hide();
                b = 1;
                }
            else {
                $("nav").removeClass("putih");
                $("nav img.hitam").hide();
                $("nav img.putih").show();
                b = 0;
        }}
    })
});

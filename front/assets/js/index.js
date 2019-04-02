jQuery(document).ready(function ($) {
    console.log(1)
    $("#mk-header").removeClass("sticky-header");
    $(".mk-dark-logo").attr("src", "http://www.kingdee.com/wp-content/uploads/2018/12/se2.png");

    $("#mk-header").hover(function () {
        $(this).removeClass("transparent-header");
        $("#menu-item-39218").css("opacity", "1");
        $("#menu-item-39220").css("opacity", "1");
        $("#menu-item-39223").css("opacity", "1");
        $("#menu-item-39227").css("opacity", "1");



    }, function () {
        $("#menu-item-39218").css("opacity", "0");
        $("#menu-item-39220").css("opacity", "0");
        $("#menu-item-39223").css("opacity", "0");
        $("#menu-item-39227").css("opacity", "0");
        $(this).addClass("transparent-header");
    });
}(jQuery))
$(function () {
    let workingItems = $(".working__item")
    workingItems.mouseover(function () {
        $(".working__item-text").removeClass("working__item-text-active")
        $(this).find(".working__item-text").addClass("working__item-text-active")
        $(".working__item-number").removeClass("working__item-number-active")
        $(this).find(".working__item-number").addClass("working__item-number-active")
    });
    $(".backtests__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1
    })
});

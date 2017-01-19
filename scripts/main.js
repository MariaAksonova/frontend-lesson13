$(function (){
    $('.new-generation .main-btn').on('click', function () {
        $('.new-generation p').fadeIn(1000);
        $('.new-generation h3').css('font-size','48px');
    });
    $('.products .main-btn').on('click', function () {
        $('.products p').fadeIn(1000);
        $('.products h3').css('font-size','48px');
    });
    $('.start-journey .main-btn').on('click', function () {
        $('.start-journey p').fadeIn(1000);
        $('.start-journey h3').css('font-size','48px');
    });
    $('.slider-dots .slide').on('click', function () {
        var indexSlide = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.slider-list .slide.active').slideUp(300, function() {
            $(this).removeClass('active');
        });
        $('.slider-list .slide').eq(indexSlide).slideDown(300, function() {
            $(this).addClass('active');
        });
    });
});

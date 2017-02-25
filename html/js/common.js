$(function() {

    'use strict';

    //---------------------------------
    //Выдвигающаяся мобильное меню
    //---------------------------------
    $('.header__nav-btn-open').click(function() {
        $('.header__box').addClass('header__box_show');
        setTimeout(function() {
            $('.header__box-inner').addClass('header__box-inner_show');
        }, 100);
        return false;
    });
    //Выключение при клике по кнопке
    $('.header__nav-btn-close').click(function() {
        $('.header__box-inner').removeClass('header__box-inner_show');
        setTimeout(function() {
            $('.header__box').removeClass('header__box_show');
        }, 400);
    });
    //Выключение при клике по странице
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__box-inner").length) {
            $('.header__box-inner').removeClass('header__box-inner_show');
            setTimeout(function() {
                $('.header__box').removeClass('header__box_show');
            }, 400);
        }
        e.stopPropagation();
    });


    //---------------------------------
    //Увелечение схемы оборудования на главной
    //---------------------------------
    function zoom() {
        var w = $(window).width();
        if(w <= 768) {
            $('.equipment__img').zoom({
                on : 'grab',
                touch : true
            });
        } else {
            $('.equipment__img').trigger('zoom.destroy');
        }
    }
    zoom();
    $(window).resize(function() {
        zoom();
    });

    //---------------------------------
    //Адаптивный слайдер партнеров
    //---------------------------------
    function slider() {
        var w = $(window).width();
        if(w >= 640) {
            $(".parthners__slider").owlCarousel({
                loop: true,
                items: 3,
                nav: true,
                navText: '',
                autoplayTimeout: 5000,
                autoplay: true,
                smartSpeed: 800,
                responsiveClass:true,
                responsive:{
                    641:{
                        margin: 30
                    },
                    993:{
                        margin: 60
                    }
                }
            });
        }
    }
    slider();
    $(window).resize(function() {
        slider();
    });


    //---------------------------------
    //Адаптивный слайдер о компании
    //---------------------------------
    $(".about__slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 1200,
    });

    //------------------------------------
    //popup
    //------------------------------------

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
});

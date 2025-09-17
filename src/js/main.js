jQuery(document).ready(function ($) {
    try {
        window.menu_slider = new Swiper('.menu__slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                620: {
                    slidesPerView: 2,
                }
            }
        })
    } catch (err) {
        window.menu_slider = false;
        
    }
    try {
        window.events_slider = new Swiper('.events__slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                620: {
                    slidesPerView: 2,
                }
            }
        })
    } catch (err) {
        window.events_slider = false;
        
    }

    try {
        window.events_slider = new Swiper('.coffee-slider__slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 3,
                },
                620: {
                    slidesPerView: 2,
                }
            }
        })
    } catch (err) {
        window.events_slider = false;
        
    }

    var burger = $('.burger');
      var  slideMenu = $('.header__nav-outer');

    burger.click(function() {
        burger.toggleClass('open');
        slideMenu.toggleClass('active');
    });

    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        if (wScroll > 20) {
            $('.header').addClass('active');
            $('.slide-menu').addClass('scrolled');
        }
        else {
            $('.header').removeClass('active');
            $('.slide-menu').removeClass('scrolled');
        }
    });
    
    // Плавная прокрутка для всех якорных ссылок
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800); // 800ms = скорость анимации
        }
    });
})
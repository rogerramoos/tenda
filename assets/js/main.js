!function(e){"use strict";e(window).on("load",(function(){e("#preloader").delay(0).fadeOut(),e(".slider-active").slick({dots:!1,infinite:!0,speed:1e3,autoplay:!0,autoplaySpeed:5e3,arrows:!0,prevArrow:'<button type="button" class="slick-prev"><svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.04083 7.18205C0.650309 7.57258 0.650309 8.20574 1.04083 8.59627L7.40479 14.9602C7.79532 15.3508 8.42848 15.3508 8.81901 14.9602C9.20953 14.5697 9.20953 13.9365 8.81901 13.546L3.16215 7.88916L8.81901 2.23231C9.20953 1.84178 9.20953 1.20862 8.81901 0.818092C8.42848 0.427568 7.79532 0.427568 7.40479 0.818092L1.04083 7.18205ZM21.5183 6.88916L1.74794 6.88916V8.88916L21.5183 8.88916V6.88916Z" fill="currentColor"/></svg></button>',nextArrow:'<button type="button" class="slick-next"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z" fill="currentColor"/></svg></button>',slidesToShow:1,slidesToScroll:1,fade:!0}).slickAnimation()})),e(document).ready((function(){e("html").css("scroll-behavior","auto")}));e(".section-link");if(e((function(){e('a.section-link[href*="#"]:not([href="#"])').on("click",(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=e(this.hash);if((o=o.length?o:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({scrollTop:o.offset().top-80},1200,"easeInOutExpo"),!1}}))})),e(".menu-area li.menu-item-has-children ul").length&&e(".menu-area .navigation li.menu-item-has-children").append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'),e(".mobile-menu").length){var o=e(".menu-area .main-menu").html();e(".mobile-menu .menu-box .menu-outer").append(o),e(".mobile-menu li.menu-item-has-children .dropdown-btn").on("click",(function(){e(this).toggleClass("open"),e(this).prev("ul").slideToggle(500)})),e(".mobile-nav-toggler").on("click",(function(){e("body").addClass("mobile-menu-visible")})),e(".menu-backdrop, .mobile-menu .close-btn, .mobile-menu .navigation li a").on("click",(function(){e("body").removeClass("mobile-menu-visible")}))}e("[data-background]").each((function(){e(this).css("background-image","url("+e(this).attr("data-background")+")")})),e("#paroller").length&&e(".paroller").paroller(),e(".scene").length>0&&e(".scene").parallax({scalarX:5,scalarY:5}),e(".scene-y").length>0&&e(".scene-y").parallax({scalarY:5,scalarX:0}),e(window).on("scroll",(function(){e(window).scrollTop()<245?(e("#sticky-header").removeClass("sticky-menu"),e(".scroll-to-target").removeClass("open")):(e("#sticky-header").addClass("sticky-menu"),e(".scroll-to-target").addClass("open"))})),e(".scroll-to-target").length&&e(".scroll-to-target").on("click",(function(){var o=e(this).attr("data-target");e("html, body").animate({scrollTop:e(o).offset().top},1e3)})),e(window).on("load",(function(){e(".navigation .scroll, .off-canvas-widget.scroll").length&&e(".navigation .scroll, .off-canvas-widget.scroll").mCustomScrollbar({mouseWheelPixels:50,scrollInertia:0})})),AOS.init({duration:1200}),e(window).on("load",(function(){AOS.refresh()})),e((function(){AOS.init()})),e(".video-active").slick({dots:!1,infinite:!0,speed:1e3,autoplay:!1,fade:!0,arrows:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<span class="slick-prev"><svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M1.04083 7.18205C0.650309 7.57258 0.650309 8.20574 1.04083 8.59627L7.40479 14.9602C7.79532 15.3508 8.42848 15.3508 8.81901 14.9602C9.20953 14.5697 9.20953 13.9365 8.81901 13.546L3.16215 7.88916L8.81901 2.23231C9.20953 1.84178 9.20953 1.20862 8.81901 0.818092C8.42848 0.427568 7.79532 0.427568 7.40479 0.818092L1.04083 7.18205ZM21.5183 6.88916L1.74794 6.88916V8.88916L21.5183 8.88916V6.88916Z" fill="currentColor"/></svg></span>',nextArrow:'<span class="slick-next"><svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.2929L14.3431 0.928933C13.9526 0.538409 13.3195 0.538409 12.9289 0.928933C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM-8.74228e-08 9L20 9L20 7L8.74228e-08 7L-8.74228e-08 9Z" fill="currentColor"/></svg></span>',appendArrows:".slider-nav",responsive:[{breakpoint:1200,settings:{slidesToShow:1,slidesToScroll:2,centerMode:!0,infinite:!0}},{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0}},{breakpoint:575,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1}}]}),e(".popup-image").magnificPopup({type:"image",gallery:{enabled:!0}}),e(".popup-video").magnificPopup({type:"iframe"})}(jQuery);
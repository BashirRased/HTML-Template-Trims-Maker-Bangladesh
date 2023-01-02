/**
  
* Template Name: 
* Version: 
* Author: Bashir Rased
* Author URL: www.bashir-rased.com
* Email: info@bashir-rased.com

**/

/*============================
Table of JS Content Start Here
==============================
	01.	Preloader---------------------------------> Line 31
	02. Nice Scrollbar----------------------------> Line 49
    03. Mobile Menu-------------------------------> Line 65
    04. Header Fixed Menu-------------------------> Line 79
    05. Home Slider-------------------------------> Line 93
    06. Client Logo Image Carousel----------------> Line 107
    07. Scroll to Top-----------------------------> Line 142
    08. Link Smooth Effect------------------------> Line 156
    09. Portfolio Single Item Modal---------------> Line 170
    10. Portfolio Single Item Masonry-------------> Line 195
============================
Table of JS Content End Here
==========================*/

(function (jQuery) {
    'use strict';

    /*=========================================
    ===== 01. Preloader jQuery Start Here =====
    =========================================*/
    jQuery(window).on("load", function () {
        jQuery(".tmb-preloader-box").delay(100).fadeOut(),
            setTimeout(function () {
                jQuery(".tmb-preloader").addClass("tmb-preloader-loading-end"),
                    setTimeout(function () {
                        jQuery(".tmb-preloader").hide()
                    }, 1500)
            }, 800)
    });
    /*=======================================
    ===== 01. Preloader jQuery End Here =====
    =======================================*/

    jQuery(document).ready(function () {

        /*==============================================
        ===== 02. Nice Scrollbar jQuery Start Here =====
        ==============================================*/
        jQuery("body").niceScroll({
            cursorwidth: 8,
            cursorcolor: '#00a651',
            cursorborder: "none",
            cursorborderradius: 15,
            zindex: 9999,
            autohidemode: false,
            cursorminheight: 200,
        });
        /*============================================
        ===== 02. Nice Scrollbar jQuery End Here =====
        ============================================*/

        /*===========================================
		===== 03. Mobile Menu jQuery Start Here =====
		===========================================*/
        jQuery(".mobile-header-menu-icon").click(function () {
            jQuery(".desktop-header-menu").slideToggle();
        });
        
        jQuery(".desktop-header-menu .has-submenu span").click(function () {
            jQuery(this).parents(".has-submenu").children(".submenu").slideToggle();
        });
        /*=========================================
		===== 03. Mobile Menu jQuery End Here =====
		=========================================*/

        /*==========================================
        ===== 04. Header Fixed Menu Start Here =====
        ==========================================*/
        jQuery(window).scroll(function () {
            if (jQuery(window).scrollTop() >= 50) {
                jQuery('.tmb-header-menu').addClass('tmb-sticky-menu');
            } else {
                jQuery('.tmb-header-menu').removeClass('tmb-sticky-menu');
            }
        });
        /*========================================
        ===== 04. Header Fixed Menu End Here =====
        ========================================*/

        /*===========================================
		===== 05. Home Slider jQuery Start Here =====
		===========================================*/
        jQuery(".tmb-header-slider").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>']
        });
        /*=========================================
		===== 05. Home Slider jQuery End Here =====
		=========================================*/

        /*==========================================================
		===== 06. Client Logo Image Carousel jQuery Start Here =====
		==========================================================*/
        jQuery(".tmb-our-client-section-content").owlCarousel({
            responsive: {

                0: {
                    items: 1
                },

                576: {
                    items: 2
                },

                768: {
                    items: 3
                },

                992: {
                    items: 4
                }

            },
            loop: true,
            dots: false,
            margin: 20,
            autoplay: true,
            autoplaySpeed: 2000,
            autoplayTimeout: 2000,
            autoplayHoverPause: true
        });
        /*========================================================
		===== 06. Client Logo Image Carousel jQuery End Here =====
		========================================================*/

        /* ========================================
        ===== 07. Scroll to Top JS Start Here =====
        ======================================== */
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 500) {
                jQuery("#tmb-scroll-to-top").fadeIn();
            } else {
                jQuery("#tmb-scroll-to-top").fadeOut();
            }
        });
        /* ======================================
        ===== 07. Scroll to Top JS End Here =====
        ====================================== */

        /*==================================================
		===== 08. Link Smooth Effect jQuery Start Here =====
		==================================================*/
        jQuery('a').on("click", function (e) {
            var anchor = jQuery(this);
            jQuery('html, body').stop().animate({
                scrollTop: jQuery(anchor.attr('href')).offset().top
            }, 3000);
            e.preventDefault();
        });
        /*================================================
		===== 08. Link Smooth Effect jQuery End Here =====
        ================================================*/

        /*====================================================
		===== 09. Portfolio Single Item Modal Start Here =====
		====================================================*/
        jQuery('[data-fancybox="woven-label"], [data-fancybox="belt"], [data-fancybox="silica-gel"], [data-fancybox="rubber-badge"], [data-fancybox="wood-botton"], [data-fancybox="Certificates"], [data-fancybox="poly-bag"], [data-fancybox="plastic-button"], [data-fancybox="elastic"], [data-fancybox="care-label"], [data-fancybox="printed-label"], [data-fancybox="heat-seal"], [data-fancybox="woven-label"], [data-fancybox="pu-patch"], [data-fancybox="hang-tag"], [data-fancybox="drawstring-twill-tape"]').fancybox({
            buttons: [
                "zoom",
                "share",
                "slideShow",
                "fullScreen",
                "close"
              ],
            slideShow: {
                autoStart: true,
                speed: 2000
            },
            loop: true,
            animationEffect: "zoom-in-out",
            animationDuration: 500,
            transitionEffect: "rotate",
            transitionDuration: 500
        });
        /*=========================================================
		===== 09. Portfolio Single Item Modal jQuery End Here =====
        =========================================================*/

        /*======================================================
		===== 10. Portfolio Single Item Masonry Start Here =====
		======================================================*/
        jQuery('#container').imagesLoaded(function () {
            var jQuerygrid = jQuery('.tmb-single-product-area .row').isotope({
                itemSelector: '.tmb-single-product-area .row .col-lg-4',
                percentPosition: true,
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1
                }
            });

            jQuery('.tmb-product-page-menu').on('click', '.tmb-filter', function () {
                var filterValue = jQuery(this).attr('data-filter');
                jQuerygrid.isotope({
                    filter: filterValue
                });
            });

            jQuery('.tmb-product-page-menu .tmb-filter').on('click', function (event) {
                jQuery(this).siblings('.tmb-filter-active').removeClass('tmb-filter-active');
                jQuery(this).addClass('tmb-filter-active');
                event.preventDefault();
            });
        });
        /*===========================================================
		===== 10. Portfolio Single Item Masonry jQuery End Here =====
        ===========================================================*/

    });

}(jQuery));

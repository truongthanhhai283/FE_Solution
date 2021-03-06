/*==================================================
                    Preloader
==================================================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*==================================================
                    Team
==================================================== */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        nav: true,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            // Breakpoint from 0 up
            0: {
                items: 1,
            },

            // Breakpoint from 480 up
            480: {
                items: 2,
            }
        }
    });
});

/*==================================================
                    Process Bars
==================================================== */
$(function () {
    $('#process-elements').waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1500);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*==================================================
                    Responsive tabs
==================================================== */
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide',
    });
});

/*==================================================
                    portfolio
==================================================== */
$(window).on('load', function () {

    // initialize Isotope
    $("#isotope-container").isotope({});

    // filtering item on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio item
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // Filter active
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass('active');
    });
});

/*==================================================
                    jQuery Magnifier
==================================================== */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', //child iteam selection, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });

});

/*==================================================
                    jQuery Testimonials
==================================================== */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        nav: true,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    });
});

/*==================================================
                    Stats
==================================================== */
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*==================================================
                    Client
==================================================== */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        nav: true,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    });
});

/*==================================================
                    Google map
==================================================== */
$(window).on('load', function () {

    // map variables
    var addressString = 'Phó Đức Chính, An Hải, An Hải Bắc, Sơn Trà, Da Nang';
    var myLating = { lat: 16.082760, lng: 108.239790 };

    // 1. Render map
    var map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 11,
        center: myLating
    });

    // 2 add market
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    var marker = new google.maps.Marker({
        position: myLating,
        map: map,
        title: 'myLating'
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
});

/*==================================================
                    Navigation
==================================================== */
$(function () {

    // Show/hide nav on page load
    showSlideNav();

    $(window).scroll(function () {

        // Show/hide nav on windows scrollTop
        showSlideNav();

    });

    function showSlideNav() {
        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            //  show img dark logo
            $(".navbar-brand img").attr("src", "./assets/img/logo/logo-dark.png");

            // Show back to top button
            $("#back-to-top").fadeIn();
        }

        else {
            // Hide white nav
            $("nav").removeClass("white-nav-top");

            //  show img logo
            $(".navbar-brand img").attr("src", "./assets/img/logo/logo.png");

            $("#back-to-top").fadeOut();
        }
    }

});

// Smooth scroll
$(function () {
    $("a.smooth-scroll").click(function (e) {
        e.preventDefault();

        // get section id like #about, #services, #team, and etc
        var section_id = $(this).attr("href");

        $("html, body").animate({ scrollTop: $(section_id).offset().top - 64 }, 1250, "easeInOutExpo");
    });


});

// Scroll back to top
$("#back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1200);
});
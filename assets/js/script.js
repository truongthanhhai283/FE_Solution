/*==================================================
                    Preloader
==================================================== */
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*==================================================
                    Team
==================================================== */
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        nav: true,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        navText: ['Pre', 'Next']
    });
});

/*==================================================
                    Process Bars
==================================================== */
$(function() {
    $('#process-elements').waypoint(function() {
        $(".progress-bar").each(function() {
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
$(function() {
    $('#services-tabs').responsiveTabs({
        animation: 'slide',
    });
});

/*==================================================
                    portfolio
==================================================== */
$(window).on('load', function() {

    // initialize Isotope
    $("#isotope-container").isotope({});

    // filtering item on button click
    $("#isotope-filters").on('click', 'button', function() {

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
$(function() {

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
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        nav: true,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        navText: ['Pre', 'Next']
    });
});

/*==================================================
                    Stats
==================================================== */
$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});

/*==================================================
                    Client
==================================================== */
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        nav: true,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        navText: ['Pre', 'Next']
    });
});

/*==================================================
                    Google map
==================================================== */
$(window).on('load',function(){

    // map variables
    var addressString='Phó Đức Chính, An Hải, An Hải Bắc, Sơn Trà, Da Nang';
    var myLating = {lat: 16.082760, lng: 108.239790};

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
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
});
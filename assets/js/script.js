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
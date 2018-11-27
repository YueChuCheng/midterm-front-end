$(document).ready(function () {


    $('.col').mouseenter(function () {
        // Get data attribute values
        var title = $(this).data('title');
        var date = $(this).data('date');
        if (!$(this).children("div").length) {
            overlay =$(this).append('<div class="hoverstyle"></div>');
    }

        // Get the overlay div
        var overlay = $(this).children('.hoverstyle');

        // Add html to overlay
        overlay.html('<h3>' + title + '</h3><p>' + date + '</p>');

        // Fade in overlay
        overlay.fadeIn(1000);
    });

    // Mouseleave Overlay Effect
    $('.col').mouseleave(function () {
        // Get the overlay div
        var overlay = $(this).children('.hoverstyle');

        // Fade out overlay
        overlay.fadeOut(500);
    });












});
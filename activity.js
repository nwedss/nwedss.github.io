$("#navigation a").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 2000);
});
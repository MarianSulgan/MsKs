
$( document ).ready(function() {

    // External connection of carousel and paragraph (caption)

    $('#carousel-main').on('slide.bs.carousel', function () {

        var temp = $('.carousel-text'); 
        var activeIndex = $('.carousel-text.active').index();
        var nextIndex = ((activeIndex + 1) % temp.length);
        $(temp[activeIndex]).removeClass('active');
        $(temp[nextIndex]).addClass('active');
        
    });
});


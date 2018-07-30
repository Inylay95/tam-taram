// Your code here...
$('[data-fancybox]').fancybox();

$('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:"<span class=\"arrow arrow_next\"><img src=\"img/ico__next-arrow.png\"></span>",
    prevArrow:"<span class=\"arrow arrow_prev\"><img src=\"img/ico__prev-arrow.png\"></span>",
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: 'unslick'
        },

    ]
});

$(document).ready(function () {
  $(".testimonial-slider")
    .slick({
      centerMode: true,
      centerPadding: "50px",
      slidesToShow: 3,
    })

    .on("afterChange", function (event, slick, currentSlide) {
      $(".slick-active").before().addClass("left-slick-container");
    })

    .on("beforeChange", function (event, slick, currentSlide) {
      $(".slick-active").before().addClass("left-slick-container");
    });
});

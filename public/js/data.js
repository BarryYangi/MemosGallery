$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    $.each(data, function (key, value) {
      $("#container").append(
        '<img data-lazyload="' +
          value +
          '" src="public/load.svg" class="lazyload blur" alt="">'
      );
      $(".loadImg").remove();
    });
  });
  $(window).scroll(function () {
    $(".lazyload:visible").each(function () {
      var img = $(this);
      if (img.offset().top < $(window).scrollTop() + $(window).height()) {
        img.attr("src", img.attr("data-lazyload"));
        img.removeClass("lazyload");
      }
    });
    $(".bg").remove();
    $(".text").remove();
  });
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 1000) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  $("#back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});

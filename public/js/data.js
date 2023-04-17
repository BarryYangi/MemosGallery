$(document).ready(function () {
  $.getJSON("data.json", function (data) {
    $.each(data, function (key, value) {
      $("#container").append(
        '<img data-lazyload="' + value + '" src="public/load.svg" class="lazyload blur" alt="">'
      );
      // $("#container").on("click","img",function(){})
      $(".loadImg").remove();
    });
  });
  // 遍历所有带有“lazyload”类的图片
  // $(".lazyload").each(function () {
  //   var img = $(this);
  //   // 将图片的真实src添加到data-lazyload属性中
  //   img.attr("data-lazyload", img.attr("src"));
  //   img.removeAttr("src");
  // });

  // 滚动事件处理
  $(window).scroll(function () {
    // 遍历所有带有“lazyload”类且处于可见范围内的图片
    $(".lazyload:visible").each(function () {
      var img = $(this);
      if (img.offset().top < $(window).scrollTop() + $(window).height()) {
        // 加载图片
        img.attr("src", img.attr("data-lazyload"));
        img.removeClass("lazyload");
      }
    });
    $(".bg").remove();
    $(".text").remove();
  });
});

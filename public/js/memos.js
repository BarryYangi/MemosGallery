console.log(
  "\n %c MemosGallery v1.0.2 %c https://i.yct.ee/ \n",
  "color: #fadfa3; background: #030307; padding:5px 0;",
  "background: #fadfa3; padding:5px 0;"
);
photos();
function photos() {
  fetch("https://memos.smitten.top/api/v1/memo?creatorId=1&tag=相册")
    .then((res) => res.json())
    .then((data) => {
      // 记得修改memos地址
      let html = "",
        imgs = [];
      data.forEach((item) => {
        imgs = imgs.concat(item.content.match(/\!\[.*?\]\(.*?\)/g));
      });
      imgs.forEach((item) => {
        let img = item.replace(/!\[.*?\]\((.*?)\)/g, "$1"),
          time,
          title,
          tat = item.replace(/!\[(.*?)\]\(.*?\)/g, "$1");
        if (tat.indexOf(" ") != -1) {
          time = tat.split(" ")[0];
          title = tat.split(" ")[1];
        } else title = tat;

        html += `<div class="gallery-photo"><a href="${img}" data-fancybox="gallery" class="fancybox" data-thumb="${img}"><img class="photo-img" loading='lazy' decoding="async" data-lazyload="${img}" src="public/load.svg"></a>`;
        title ? (html += `<span class="photo-title">${title}</span>`) : "";
        time ? (html += `<span class="photo-time">${time}</span>`) : "";
        html += `</div>`;
      });

      document.querySelector(".gallery-photos.page").innerHTML = html;
      window.Lately && Lately.init({ target: ".photo-time" });
    })
    .catch();

  $(window).scroll(function () {
    $(".photo-img:visible").each(function () {
      var img = $(this);
      if (img.offset().top < $(window).scrollTop() + $(window).height()) {
        img.attr("src", img.attr("data-lazyload"));
      }
    });
    $(".bg").remove();
    $(".text").remove();
  });
}

$(document).ready(function () {
  $(".arrow").click(function(){
    $(".bg").remove();
    $(".text").remove();
    $(window).scroll();
  })
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

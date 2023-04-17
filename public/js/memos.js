photos();
//查询所有用户api “https://memos.smitten.top/api/memo/all?tag=相册”
// 函数
function photos() {
  fetch("https://memos.smitten.top/api/memo?creatorId=1&tag=相册")
    .then((res) => res.json())
    .then((data) => {
      // 记得修改memos地址
      let html = "",
        imgs = [];
      data.data.forEach((item) => {
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
      // 滚动事件处理
  $(window).scroll(function () {
    // 遍历所有带有“lazyload”类且处于可见范围内的图片
    $(".photo-img:visible").each(function () {
      var img = $(this);
      if (img.offset().top < $(window).scrollTop() + $(window).height()) {
        // 加载图片
        img.attr("src", img.attr("data-lazyload"));
      }
    });
    $(".bg").remove();
    $(".text").remove();
  });
}

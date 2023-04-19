<p align="center"><a href="https://usememos.com"><img height="64px" src="https://raw.githubusercontent.com/BarryYangi/MemosGallery/master/public/logo-full.webp" alt="✍️ memos" /></a></p>

<p align="center">Memos Gallery. 通过 Memos API 渲染的静态网页.</p>
<p align="center">简单的 HTML、纯净的 CSS、原生的 JS。</p>

<p align="center">
  <img src="https://img.shields.io/badge/Memos-Gallery-orange" />
  <img src="https://img.shields.io/badge/Author-Barry-brightgreen" />
</p>

<p align="center">
  <a href="https://gallery.yct.ee/">Live Demo</a> •
  <a href="https://www.barryi.me/personal/memosp/" target="_blank" rel="noopener noreferrer" class="pure-menu-link">I'm Feeling Nice</a>
</p>

<p align="center">
  <a href="https://gallery.yct.ee/" target="_blank"><img alt="Memos Gallery" src="https://raw.githubusercontent.com/BarryYangi/MemosGallery/master/screenshot.png"></a>
</p>
<p align="center">
  <a href="https://gallery.yct.ee/" target="_blank"><img alt="Memos Gallery" src="https://raw.githubusercontent.com/BarryYangi/MemosGallery/master/screenshot.gif"></a>
</p>

中文 | [English](./README.md)

### :construction: 前端框架

> • 移动端自适应  

- [**Memos**](https://github.com/usememos/memos)
- [Lately.js](https://github.com/Tokinx/lately)
- [jQuery](https://github.com/jquery/jquery)
- [Fancybox](https://github.com/fancyapps/fancybox)
- [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)

### :rocket: 使用方法

1. `clone`本仓库或[下载](https://github.com/BarryYangi/MemosGallery/archive/refs/heads/master.zip)后部署 ：

```bash
git clone git@github.com:BarryYangi/MemosGallery.git
```

2. 设置

在 `memos.js` 文件中替换memos部署地址：

```javascript
  function photos() {
  fetch("https://memos.smitten.top/api/memo?creatorId=1&tag=相册")
    .then((res) => res.json())
    
    ...}
```

3. 网站图标和加载动画(*可选*)

 在 `public` 目录中，替换成自己的图标或加载动画。

- `gallery.svg` 是网站图标，显示在浏览器标签上。
- `load.svg` 是加载动画。

4. 上传

- 上传 `index.html` 文件 `public` 目录及目录中的所有文件到网站根目录。
- 如想展示非memos中的图片，请注释掉`index.html`页面中的`memos.js`引入项，取消`data.js`引入项注释,按格式添加图片链接到根目录下`data.json`中即可。

```html
    <script src="./public/js/data.js"></script>
    <!-- <script src="./public/js/memos.js"></script> -->
```

### :zap: 部署到 GitHub Pages

1. Fork 本仓库
2. 按照 #[使用方法.2]() 设置自己的 API
3. 转到自己的 `MemosGallery` 仓库的设置 - `Setting` - `Pages` - `Deploy from a branch` - `Branch(main/root)`

### :zap: 部署到 Vercel

1. Fork 本仓库
2. 按照 #[使用方法.2]() 设置自己的 API
3. 进入自己的 Vercel 面板
4. 新建一个 Project ，导入 GitHub 上的仓库
5. 按默认设置不用改动，直接点`Deploy`
6. 中国大陆可能需要绑定一个自定义域名才能访问 Vercel

### :zap: 部署到 Netlify

> Demo: <https://gallery.yct.ee>

1. Fork 本仓库
2. 按照 #[使用方法.2]() 设置自己的 API
3. 进入自己的 Netlify 面板
4. 新建一个 Site ，导入 GitHub 上的仓库
5. 按默认设置不用改动，直接点`Deploy`
6. 中国大陆可能需要绑定一个自定义域名才能访问 Netlify

### :sparkles: 使用技巧

发布 Memos 时的格式：

```
#相册 

![2023-04-17 壁纸](https://cdn.yct.ee/gh/BarryYangi/ObsStaticData@main/obsidian/16809343100005b75gn.jpg)
![2023-04-17 AI绘制](https://cdn.yct.ee/gh/BarryYangi/ObsStaticData@main/obsidian/1681536694000vdr30v.png)

```

如果不想要图片显示在memos上的话将链接放在代码块内即可。




### [许可证](https://github.com/me-shaon/GLWTPL)

```
GLWT（Good Luck With That，祝你好运）公共许可证
版权所有© 每个人，除了作者

任何人都被允许复制、分发、修改、合并、销售、出版、再授权或
任何其它操作，但风险自负。

作者对这个项目中的代码一无所知。
代码处于可用或不可用状态，没有第三种情况。


                祝你好运公共许可证
            复制、分发和修改的条款和条件

在不导致作者被指责或承担责任的情况下，你可以做任何你想
要做的事情。

无论是在合同行为、侵权行为或其它因使用本软件产生的情形，作
者不对任何索赔、损害承担责任。

祖宗保佑。
```
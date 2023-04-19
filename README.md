<p align="center"><a href="https://usememos.com"><img height="64px" src="https://raw.githubusercontent.com/BarryYangi/MemosGallery/master/public/logo-full.webp" alt="✍️ memos" /></a></p>

<p align="center">Memos Gallery.A static page rendered with the Memos API.</p>
<p align="center">Simple HTML,Pure CSS,Native JS.</p>

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

[中文](./README_cn.md) | English

### :construction: WebStack

> • Mobile responsive design.  

- [**Memos**](https://github.com/usememos/memos)
- [Lately.js](https://github.com/Tokinx/lately)
- [jQuery](https://github.com/jquery/jquery)
- [Fancybox](https://github.com/fancyapps/fancybox)
- [Font-Awesome](https://github.com/FortAwesome/Font-Awesome)

### :rocket: Usage

1. Clone this repository or download it at https://github.com/BarryYangi/MemosGallery/archive/refs/heads/master.zip, and then deploy it.

```bash
git clone git@github.com:BarryYangi/MemosGallery.git
```

2. Setting

Replace the deployment address of "memos" in the file `memos.js`.

```javascript
  function photos() {
  fetch("https://memos.smitten.top/api/memo?creatorId=1&tag=相册")
    .then((res) => res.json())
    
    ...}
```

3. Website icon & loading animation (*optional*)

In the `public` directory, replace it with your own icon or loading animation.

- `gallery.svg` is a website icon that appears on the browser tab.
- `load.svg` is a loading animation.

4. Upload

- Upload the `index.html` file in the `public` directory and all files in the directory to the root directory of the website.Enjoy!
- If you want to display images that are not in memos, please comment out the import statement of `memos.js` in the `index.html` page, uncomment the import statement of `data.js`, and add the image links to the `data.json` file in the root directory in the specified format.

```html
    <script src="./public/js/data.js"></script>
    <!-- <script src="./public/js/memos.js"></script> -->
```

### :zap: Deploy to GitHub Pages

1. Fork this.
2. Follow the instructions in #[Usage Guide.2]() to configure your API.
3. Go to the settings of your own `MemosGallery` repository - `Setting` - `Pages` - `Deploy from a branch` - `Branch(main/root)`

### :zap:Deploy to Vercel

1. Fork this repository.
2. Follow the instructions in #[Usage Guide.2]() to configure your API.
3. Access your own Vercel dashboard.
4. Create a new project and import the repository from GitHub.
5. No need to make any changes to the default settings, just click `Deploy`.
6. China mainland may need to bind a custom domain to access Vercel.

### :zap: Deploy to Netlify

> Demo: <https://gallery.yct.ee>

1. Fork this repository.
2. Follow the instructions in #[Usage Guide.2]() to configure your API.
3. Access your own Netlify dashboard.
4. Create a new site and import a repository from GitHub.
5. No need to make any changes to the default settings, just click `Deploy`.
6. China mainland may need to bind a custom domain to access Netlify.

### :sparkles: Tips

Format of Posting Memos:

```
#相册 

![2023-04-17 壁纸](https://cdn.yct.ee/gh/BarryYangi/ObsStaticData@main/obsidian/16809343100005b75gn.jpg)
![2023-04-17 AI绘制](https://cdn.yct.ee/gh/BarryYangi/ObsStaticData@main/obsidian/1681536694000vdr30v.png)

```

If you don't want the image to be displayed in memos, just put the link in a code block.




### [LICENSE](https://github.com/me-shaon/GLWTPL)

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
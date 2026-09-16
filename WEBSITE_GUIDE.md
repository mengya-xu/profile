# Mengya 的个人网站：编辑与使用说明

网站为英文主站，使用普通 HTML、CSS、JavaScript，不需要安装构建工具。打开 `index.html` 即可浏览；本地预览服务运行期间，也可以打开 http://127.0.0.1:8000 。这不是公开网址。

## 文件在哪里

- `index.html`：首页，包含个人介绍、六个研究项目入口、九篇期刊论文、教学、获奖与夏校、成长经历、旅行及联系方式。
- `projects.html`：六个研究故事，每个项目有研究问题、方法概述、意义和论文/资源链接。
- `cv.html`：根据 2026 年 8 月 10 日 CV 整理的完整网页履历，包括各类出版物、任职、资助项目、教学与指导、奖项、会议、服务、培训、媒体与技能。可通过页面按钮打印或保存 PDF。
- `style.css`：配色、字体、布局和手机适配。
- `app.js`：手机菜单、研究筛选、打印按钮。
- `assets/images/`：从现有照片生成的轻量网页版本；原始照片没有修改。
- `assets/figures/`：研究主题的 SVG 概念插画，可用真实论文图替换。
- `original/`：修改前的三个代码文件备份。要恢复旧站，请把其中三个文件复制回网站根目录，原来的 `images/` 文件夹仍在。
- `mengya-website.zip`：仅包含网站页面、网页图片、样式与脚本的发布包，不包含原始 CV、照片素材库或原站备份。

## 换照片

所有网页图片都在本地，不依赖外部图片服务。

| 用途 | 当前文件 / 位置 | 替换建议 |
| --- | --- | --- |
| 首页肖像 | `assets/images/photo.jpg` | 用相同文件名覆盖；建议长边 1600px 左右，人物在画面中间 |
| 巴黎附近夏校 | `assets/images/parissummer.jpg` | 可以换成夏校合影或活动现场 |
| USC 毕业 | `assets/images/cohort.jpg` | 可以换成喜欢的毕业照片 |
| Women in GIS | `index.html` 中 `class="grant-art"` 的整个 div | 按下方示例换成活动照片 |
| 研究配图 | `assets/figures/*.svg`，在首页及项目页各引用一次 | 将真实论文图放入 `assets/figures/`，再修改两页中的图片 src、alt 及图注 |

Women in GIS 收到照片后，将 `.grant-art` 整个 div 换为：

```html
<img src="assets/images/women-in-gis.jpg"
     alt="Mengya at the Women in GIS event"
     loading="lazy" width="700" height="520">
```

随后删去该卡片的 `Illustrated photo placeholder` 小字。请按照片实际内容调整 alt。

论文图替换时，把首页相应卡片的 `CONCEPT ILLUSTRATION` 标签换成真实图的说明，并更新 `projects.html` 的图注（论文名、图号及必要的署名）。当前所有 SVG 都是解释主题的示意图，不是论文原图、地图数据或研究结果。

## 内容更新

直接在 HTML 中搜索标题即可定位文字；每个项目使用固定锚点：`household`、`time`、`grocery`、`aging`、`green`、`community`。首页筛选分类为 `food`、`health`、`environment`。

CV 网页是当前文件的静态整理版；以后更新 Word CV 时，还需要同步更新网页。未发表工作的状态按 2026-08-10 CV 保留，不能自动追踪投稿进度。论文卡片用更亲切的项目标题，正式引用保留在完整论文列表和项目详情中。

主要素材依据：
- 本地 `Relevant_materials/Mengya_Xu_CV_20260810.docx`。
- 原站个人介绍、教学及毕业文字，和本地照片。
- [Cities 论文页面](https://www.sciencedirect.com/science/article/pii/S0264275125009606)，用于核对 DOI 与项目方法简介。
- [Health & Place 论文页面](https://www.sciencedirect.com/science/article/pii/S1353829224000480)，用于核对 DOI、方法与 13% 的研究结果。
- [Applied Geography 论文记录](https://www.researchwithrutgers.org/en/publications/extending-the-spacetime-prism-for-multimodal-household-level-acce/)，以及原 CV。

网页采用较亲切的第一人称叙述，教学理念和研究动机的表达是根据原资料写的可编辑文案。未额外虚构获奖经历、研究结论、课程资源或个人爱好。公共联系方式使用 USC 邮箱，未放入手机号。赞助研究按 CV 中的角色保留，没有表述为个人主持的项目。

## 预览和发布

直接双击首页可以浏览。也可在本文件所在文件夹运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

发布时只上传发布包内的文件：三个 HTML 页面、CSS、JS 和 assets 文件夹。不要把整个工作文件夹作为公开目录上传，因为其中还存有 CV 原件和私人照片素材。

目前尚未发布到互联网。外部字体使用 Google Fonts，无法联网时自动回退到系统字体，内容与功能仍可用。所有外部论文链接可能受出版商访问权限影响。

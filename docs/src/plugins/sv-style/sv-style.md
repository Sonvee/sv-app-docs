# 样式模块 [`sv-style`](https://ext.dcloud.net.cn/plugin?id=17060)

## 主要功能

1. 该模块化样式库插件适用于 `sv-app` 框架体系定制化样式。
2. 该插件使用 [colorui](https://ext.dcloud.net.cn/plugin?id=239) 作为 css 原子类样式库使用，并扩充了部分自定义的扩展类。
3. 动画部分主要基于 [animista](https://animista.net/)、colorui 内置的动画、以及部分自定义扩展动画类。
4. icon 图标部分主要基于 [阿里巴巴矢量库](https://www.iconfont.cn/)、colorui 的字体图标、uni-icons、uni-admin-icons。
5. 内置主题颜色主要基于 uni.scss、colorui 的主题色、以及部分自定义主题色。
6. 主题皮肤切换功能（基于 sass）需配合 [sv-client](https://ext.dcloud.net.cn/plugin?id=16530) 或 [sv-admin](https://ext.dcloud.net.cn/plugin?id=16531) 内置组件或方法使用。
7. 该插件不包含任何的 js 代码，仅包含 css/sass 样式。

## 安装

1. [插件市场](https://ext.dcloud.net.cn/plugin?id=17060) 中点击 `下载插件并导入HBuildeX`。

## 前言

本插件适用于 `sv-app` 框架体系定制化样式。

## 插件兼容性

纯 css/sass 样式

## 使用准备

1. 在根目录 `App.vue` 文件中引入 `@import '@/uni_modules/sv-style/scss/style.scss';`
2. 在根目录 `uni.scss` 文件中引入 `@import '@/uni_modules/sv-style/scss/theme.scss';`
3. 启动动画需要在根目录 `index.html` 文件中引入 `app-loader.css` 样式并将 `id="app"` 的盒子修改成如下：

::: code-group

```vue [App.vue]
<!-- 根目录 App.vue -->
<style lang="scss">
/* 每个页面公共css */
@import "@/uni_modules/sv-style/scss/style.scss";
</style>
```

```scss [uni.scss]
/* 主题 */
@import "@/uni_modules/sv-style/scss/theme.scss";
```

```html [index.html]
<head>
  <!-- 引入预加载loading样式 -->
  <link rel="stylesheet" href="/uni_modules/sv-style/css/app-loader.css" />
</head>
<body>
  <div id="app">
    <!--app-html-->
    <div class="app-loader-container">
      <div class="sv-index-loader"></div>
      <div class="sv-text-streamer" style="margin-top: 20px;">正在努力往上爬</div>
    </div>
  </div>
  <script type="module" src="/main.js"></script>
</body>
```

:::

## 主题定制

| 混入          | 描述                    |
| ------------- | ----------------------- |
| useTheme      | 动态切换所有主题        |
| useLightTheme | 只在 light 主题下的样式 |
| useDarkTheme  | 只在 dark 主题下的样式  |

| 函数     | 参数           | 描述       |
| -------- | -------------- | ---------- |
| getTheme | 主题 scss 变量 | 获取主题色 |

> 主题切换功能需要配合框架内置组件 [`sv-page`](../../components/sv-page/sv-page.md)，写法不涉及任何 `js` 逻辑，只需要使用 `scss` 的 `@include`，和内置的 `getTheme` 函数。

### 主题使用示例

```scss
.card {
  @include useTheme {
    box-shadow: 0 2px 4px #{getTheme("sv-shadow-color")}; // 计算、行内连写时等情况下需要使用 sass的 #{} 插值表达式
    background-color: getTheme("sv-bg-color"); // 普通单属性，直接使用 getTheme 以获取主题色（引号可省略）
  }
}
```

## 注意事项

1. 主题功能需要配合框架内置组件 [`sv-page`](../../components/sv-page/sv-page.md)。

## 疑难解答

> 可新建 [`Issue`](https://gitee.com/Sonve/sv-app-docs/issues/new) / [`悬赏`](https://gitee.com/Sonve/sv-app-docs/reward_issues/new) 来 [`发起提问`](https://gitee.com/Sonve/sv-app-docs/issues)

## 写在最后

若对插件有任何疑问或者优化建议，欢迎在 [插件评论区](https://ext.dcloud.net.cn/plugin?id=17060#rating) 留言，在插件市场中的私信消息本人可能不经常留意，导致没能及时回复，
可以加入本人的插件问答 QQ 交流群: 852637893，欢迎 [进群交流](https://qm.qq.com/cgi-bin/qm/qr?k=HD9IXnUruOa5pplF1jAeQsLb9BNnP_DE&jump_from=webapi&authKey=tk61Q5la3EAprdYcUBD7v0PBly795OTcT4UT36XxqcG7pmhGRpE+yFlt75vQBWeY)。

<img width="200" src="https://mp-74bfcbac-6ba6-4f39-8513-8831390ff75a.cdn.bspapp.com/static/qqqun.jpg" alt="交流群:852637893"/>

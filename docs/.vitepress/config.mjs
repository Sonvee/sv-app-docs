import { defineConfig } from "vitepress";
import { linkMenu, baseMenu, frameMenu, pluginsMenu, componentsMenu, socialLinks } from "./theme/data/menu";

export default defineConfig({
  base: "/docs",
  outDir: "../dist",
  lang: "zh-CN",
  title: "sv-app",
  description: "一个基于 vue3 + uniapp + unicloud 开发的框架",
  // cleanUrls: true,
  lastUpdated: true,

  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },

  head: [
    ["link", { rel: "icon", href: "/docs/favicon.ico" }], // 需要加上根目录前缀，否则资源访问不到
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?4fb1a39c791edec238c6dc37ccf28fa6";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ], // 百度统计
  ],

  themeConfig: {
    logo: "/logo.png",
    siteTitle: "sv-app",
    lastUpdatedText: "最后更新",

    // 导航栏
    nav: [
      { text: "🚀快速开始", link: "/src/base/quick" },
      frameMenu,
      pluginsMenu,
      componentsMenu,
      linkMenu,
      { text: "☕一杯咖啡", link: "/src/donate/donate" },
    ],

    // 左侧栏
    sidebar: [
      baseMenu,
      frameMenu,
      pluginsMenu,
      componentsMenu,
      { text: "☕一杯咖啡", link: "/src/donate/donate" },
      { text: "🎉鸣谢", link: "/src/thank/thank" },
    ],

    // 搜索
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },

    // 社交链接
    socialLinks: socialLinks,
  },
});

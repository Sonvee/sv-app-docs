import{_ as e,c as t,o as a,a4 as l}from"./chunks/framework.D4kqST2g.js";const b=JSON.parse('{"title":"会员体系 sv-id-vip","description":"","frontmatter":{},"headers":[],"relativePath":"src/plugins/sv-id-vip/sv-id-vip.md","filePath":"src/plugins/sv-id-vip/sv-id-vip.md","lastUpdated":1715581947000}'),i={name:"src/plugins/sv-id-vip/sv-id-vip.md"},r=l('<h1 id="会员体系-sv-id-vip" tabindex="-1">会员体系 <a href="https://ext.dcloud.net.cn/plugin?id=17048" target="_blank" rel="noreferrer"><code>sv-id-vip</code></a> <a class="header-anchor" href="#会员体系-sv-id-vip" aria-label="Permalink to &quot;会员体系 [`sv-id-vip`](https://ext.dcloud.net.cn/plugin?id=17048)&quot;">​</a></h1><p>用于 <code>sv-client</code> 客户端框架的会员体系插件。</p><h2 id="主要功能" tabindex="-1">主要功能 <a class="header-anchor" href="#主要功能" aria-label="Permalink to &quot;主要功能&quot;">​</a></h2><ol><li>订阅 vip 会员功能（普通支付，cdkey 激活码）</li><li>vip 套餐表增删改查</li><li>vip 权益表增删改查</li><li>订阅记录表增查</li><li>cdkey 表增删改查，cdkey 激活订阅</li><li>vip 用户状态实时事件驱动手动校验</li><li>vip 用户状态定时任务自动校验</li><li>内置 vip 功能页面</li></ol><blockquote><p>本插件没有示例项目，详见 <code>sv-client</code> 中相关页面示例。</p></blockquote><h2 id="安装与部署" tabindex="-1">安装与部署 <a class="header-anchor" href="#安装与部署" aria-label="Permalink to &quot;安装与部署&quot;">​</a></h2><ol><li><a href="https://ext.dcloud.net.cn/plugin?id=17048" target="_blank" rel="noreferrer">插件市场</a> 中点击 <code>下载插件并导入HBuildeX</code>。</li><li>部署 云对象/数据库 至您的 uniCloud 云服务空间，如果您还不会部署，可移步至 <a href="./../../frame/sv-service/sv-service.html#云服务空间初始化">服务端-云服务空间初始化</a>。</li></ol><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>本插件仅为 <code>sv-client</code> 客户端框架定制化模组插件，不可脱离 <code>sv-client</code> 环境使用。</p><h2 id="插件兼容性" tabindex="-1">插件兼容性 <a class="header-anchor" href="#插件兼容性" aria-label="Permalink to &quot;插件兼容性&quot;">​</a></h2><blockquote><p><code>✔️ 实测可行</code> <code>❌ 未兼容</code> <code>➖ 未实测</code></p></blockquote><table><thead><tr><th style="text-align:center;">阿里云</th><th style="text-align:center;">腾讯云</th><th style="text-align:center;">支付宝云</th><th style="text-align:center;">Vue2</th><th style="text-align:center;">Vue3</th><th style="text-align:center;">H5</th><th style="text-align:center;">App</th><th style="text-align:center;">微信小程序</th></tr></thead><tbody><tr><td style="text-align:center;">✔️</td><td style="text-align:center;">➖</td><td style="text-align:center;">❌</td><td style="text-align:center;">❌</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td></tr></tbody></table><h2 id="api-接口文档" tabindex="-1">api 接口文档 <a class="header-anchor" href="#api-接口文档" aria-label="Permalink to &quot;api 接口文档&quot;">​</a></h2><blockquote><p><a href="https://console-docs.apipost.cn/preview/c3268618df9a75e0/6acb1e9aa56ea56c?target_id=d4b30806-ef67-4c1f-a126-dca17094c7c6" target="_blank" rel="noreferrer">文档链接</a></p></blockquote><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ol><li><p>本插件依赖 <code>sv-client</code> 客户端框架环境运行。</p></li><li><p>本插件没有专门的示例工程，请在 <code>sv-client</code> 中相关页面体验。</p></li></ol><h2 id="疑难解答" tabindex="-1">疑难解答 <a class="header-anchor" href="#疑难解答" aria-label="Permalink to &quot;疑难解答&quot;">​</a></h2><blockquote><p>可新建 <a href="https://gitee.com/Sonve/sv-app-docs/issues/new" target="_blank" rel="noreferrer"><code>Issue</code></a> / <a href="https://gitee.com/Sonve/sv-app-docs/reward_issues/new" target="_blank" rel="noreferrer"><code>悬赏</code></a> 来 <a href="https://gitee.com/Sonve/sv-app-docs/issues" target="_blank" rel="noreferrer"><code>发起提问</code></a></p></blockquote><h2 id="写在最后" tabindex="-1">写在最后 <a class="header-anchor" href="#写在最后" aria-label="Permalink to &quot;写在最后&quot;">​</a></h2><p>若对插件有任何疑问或者优化建议，欢迎在 <a href="https://ext.dcloud.net.cn/plugin?id=17048#rating" target="_blank" rel="noreferrer">插件评论区</a> 留言，在插件市场中的私信消息本人可能不经常留意，导致没能及时回复， 可以加入本人的插件问答 QQ 交流群: 852637893，欢迎 <a href="https://qm.qq.com/cgi-bin/qm/qr?k=HD9IXnUruOa5pplF1jAeQsLb9BNnP_DE&amp;jump_from=webapi&amp;authKey=tk61Q5la3EAprdYcUBD7v0PBly795OTcT4UT36XxqcG7pmhGRpE+yFlt75vQBWeY" target="_blank" rel="noreferrer">进群交流</a>。</p><img width="200" src="https://mp-74bfcbac-6ba6-4f39-8513-8831390ff75a.cdn.bspapp.com/static/qqqun.jpg" alt="交流群:852637893">',21),o=[r];function c(d,n,s,p,h,u){return a(),t("div",null,o)}const f=e(i,[["render",c]]);export{b as __pageData,f as default};
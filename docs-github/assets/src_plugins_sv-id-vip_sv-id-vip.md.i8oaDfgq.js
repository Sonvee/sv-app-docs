import{_ as a,c as s,o as t,a4 as i}from"./chunks/framework.jyMjuLd-.js";const g=JSON.parse('{"title":"sv-id-vip 会员体系","description":"","frontmatter":{},"headers":[],"relativePath":"src/plugins/sv-id-vip/sv-id-vip.md","filePath":"src/plugins/sv-id-vip/sv-id-vip.md","lastUpdated":1714466133000}'),e={name:"src/plugins/sv-id-vip/sv-id-vip.md"},n=i(`<h1 id="sv-id-vip-会员体系" tabindex="-1">sv-id-vip 会员体系 <a class="header-anchor" href="#sv-id-vip-会员体系" aria-label="Permalink to &quot;sv-id-vip 会员体系&quot;">​</a></h1><h2 id="主要功能" tabindex="-1">主要功能 <a class="header-anchor" href="#主要功能" aria-label="Permalink to &quot;主要功能&quot;">​</a></h2><blockquote><p>强烈建议优先前往 <a href="https://ext.dcloud.net.cn/plugin?id=16381" target="_blank" rel="noreferrer"><code>插件市场</code></a> 导入示例项目参考一下。</p></blockquote><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ol><li><a href="https://ext.dcloud.net.cn/plugin?id=16381" target="_blank" rel="noreferrer">插件市场</a> 中点击 <code>下载插件并导入HBuildeX</code>。</li></ol><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><h2 id="插件兼容性" tabindex="-1">插件兼容性 <a class="header-anchor" href="#插件兼容性" aria-label="Permalink to &quot;插件兼容性&quot;">​</a></h2><blockquote><p><code>✔️ 实测可行</code> <code>❌ 未兼容</code> <code>➖ 未实测</code></p></blockquote><table><thead><tr><th style="text-align:center;">Vue2</th><th style="text-align:center;">Vue3</th><th style="text-align:center;">H5</th><th style="text-align:center;">App</th><th style="text-align:center;">微信小程序</th></tr></thead><tbody><tr><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td><td style="text-align:center;">✔️</td></tr></tbody></table><h2 id="prop-参数" tabindex="-1">prop 参数 <a class="header-anchor" href="#prop-参数" aria-label="Permalink to &quot;prop 参数&quot;">​</a></h2><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>必填</th><th>说明</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><h2 id="emit-事件" tabindex="-1">emit 事件 <a class="header-anchor" href="#emit-事件" aria-label="Permalink to &quot;emit 事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group--j4NT" id="tab-Qqno5O1" checked="checked"><label for="tab-Qqno5O1">vue2</label><input type="radio" name="group--j4NT" id="tab-omeIIyt"><label for="tab-omeIIyt">vue3</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></div></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><h2 id="疑难解答" tabindex="-1">疑难解答 <a class="header-anchor" href="#疑难解答" aria-label="Permalink to &quot;疑难解答&quot;">​</a></h2><blockquote><p>可新建 <a href="https://gitee.com/Sonve/sv-app-docs/issues/new" target="_blank" rel="noreferrer"><code>Issue</code></a> / <a href="https://gitee.com/Sonve/sv-app-docs/reward_issues/new" target="_blank" rel="noreferrer"><code>悬赏</code></a> 来 <a href="https://gitee.com/Sonve/sv-app-docs/issues" target="_blank" rel="noreferrer"><code>发起提问</code></a></p></blockquote><h2 id="写在最后" tabindex="-1">写在最后 <a class="header-anchor" href="#写在最后" aria-label="Permalink to &quot;写在最后&quot;">​</a></h2><p>若对插件有任何疑问或者优化建议，欢迎在 <a href="https://ext.dcloud.net.cn/plugin?id=16381#rating" target="_blank" rel="noreferrer">插件评论区</a> 留言，在插件市场中的私信消息本人可能不经常留意，导致没能及时回复， 可以加入本人的插件问答 QQ 交流群: 852637893，欢迎 <a href="https://qm.qq.com/cgi-bin/qm/qr?k=HD9IXnUruOa5pplF1jAeQsLb9BNnP_DE&amp;jump_from=webapi&amp;authKey=tk61Q5la3EAprdYcUBD7v0PBly795OTcT4UT36XxqcG7pmhGRpE+yFlt75vQBWeY" target="_blank" rel="noreferrer">进群交流</a>。</p><img width="200" src="https://mp-74bfcbac-6ba6-4f39-8513-8831390ff75a.cdn.bspapp.com/static/qqqun.jpg" alt="交流群:852637893">`,21),l=[n];function h(p,r,d,k,o,c){return t(),s("div",null,l)}const u=a(e,[["render",h]]);export{g as __pageData,u as default};

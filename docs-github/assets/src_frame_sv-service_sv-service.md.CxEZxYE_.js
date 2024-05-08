import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.jyMjuLd-.js";const n="/sv-app-docs/docs-github/assets/image.BRd_srrY.png",e="/sv-app-docs/docs-github/assets/image-1.DqYY83Fk.png",y=JSON.parse('{"title":"服务端","description":"","frontmatter":{},"headers":[],"relativePath":"src/frame/sv-service/sv-service.md","filePath":"src/frame/sv-service/sv-service.md","lastUpdated":1715074251000}'),l={name:"src/frame/sv-service/sv-service.md"},p=t('<h1 id="服务端" tabindex="-1">服务端 <a class="header-anchor" href="#服务端" aria-label="Permalink to &quot;服务端&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">请注意</p><p>服务端基于 uniCloud 开发，使用 <a href="https://unicloud.dcloud.net.cn" target="_blank" rel="noreferrer">uniCloud 云服务空间</a> 对数据库和各个云对象(api 接口)等进行管理，以目前的 uniCloud 来看，是无法以个人名义迁移至自由化部署的，具体可详见官方社区问答贴：<a href="https://ask.dcloud.net.cn/question/156685" target="_blank" rel="noreferrer">unicloud 独立部署-万人请求贴</a>，所以目前使用 uniCloud 进行开发就意味着需要放弃私有化部署。</p></div><h2 id="云服务空间初始化" tabindex="-1">云服务空间初始化 <a class="header-anchor" href="#云服务空间初始化" aria-label="Permalink to &quot;云服务空间初始化&quot;">​</a></h2><blockquote><p>此处不介绍云服务空间初始化向导的方式部署，而是带大家手动一步一步初始化部署云对象和数据库，旨在更好的了解具体的操作步骤</p></blockquote><ol><li><p>鼠标悬停在项目根目录上右键点击<code>创建uniCloud云开发环境</code>，选择阿里云。（根目录下已存在 uniCloud 文件夹的忽略这一步）</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>这里推荐使用阿里云，腾讯云和支付宝小程序云理论上也可，但是本人在搭建此框架时均基于阿里云开发，使用腾讯云或者支付宝小程序云我不能保证不会有其他意外状况发生。</p></div></li><li><p>鼠标右键点击项目根目录下的 uniCloud 文件夹，选择 <code>关联云服务空间或项目</code>，选择绑定你指定的云服务空间。（当然首先你得有云服务空间，如果没有，请先去 <a href="https://unicloud.dcloud.net.cn" target="_blank" rel="noreferrer">uniCloud 云服务空间</a> 创建一个，阿里云支持创建一个免费的）</p></li><li><p><code>cloudfunctions</code> 目录下的是云对象和公共模块，可以在<code>cloudfunctions</code> 目录鼠标右键选择 <code>上传所有云函数、公共模块及Actions</code>；也可以对云对象进行单独上传，在你要上传的云对象文件夹上鼠标右键点击 <code>上传部署</code> 即可。 <code>cloudfunctions/common</code> 目录下是云对象依赖的公共模块，公共模块写完后，需要在相关云对象中添加，例如项目中有个 <code>sv-handler</code> 全局处理模块，需要在要依赖该公共模块的云对象文件夹上鼠标右键点击 <code>管理公共模块和扩展库依赖</code>，勾选该 <code>sv-handler</code> 确定即可，这样在你的云对象下的 package.json 中就会自动添加依赖，随后在该云对象文件夹上鼠标右键点击 <code>使用命令行窗口打开所在目录</code>，运行 <code>npm i</code> 即可安装依赖至该云对象文件夹中。如果你的公共模块修改了，所依赖的云对象又多，此时无需一个一个云对象重复重新安装公共模块的步骤，只需在该公共模块的文件夹上鼠标右键点击 <code>更新依赖本模块的云函数</code> 即可自动更新所有依赖该公共模块的云对象。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>该第三条很重要，小白有必要根据操作步骤一步一步来</p></div></li><li><p><code>database</code> 目录下的是数据库和扩展，在 <code>database</code> 目录下鼠标右键点击 <code>上传所有DB Schema(含扩展)</code>，即可一键上传所有数据库表和扩展；当然也可单独对表进行上传，鼠标右键指定的表文件，选择 <code>上传DB Schema</code> 即可。当然，如果数据库带有初始化数据，可以在<code>database</code> 目录鼠标右键选择 <code>初始化云数据库(包含Scahme与校验函数)</code> ，然后勾选你要进行覆盖的表，确认即可；也可单独的对指定表的后缀为 <code>init_data.json</code> 的文件鼠标右键选择 <code>初始化云数据库数据</code>。（对数据库表进行初始化数据添加的时候，请确认你的表是新表，否则可能会对已有数据造成影响）</p></li></ol><h2 id="云对象编写规范" tabindex="-1">云对象编写规范 <a class="header-anchor" href="#云对象编写规范" aria-label="Permalink to &quot;云对象编写规范&quot;">​</a></h2><blockquote><p>云对象的相关详细文档请前往 <a href="https://doc.dcloud.net.cn/uniCloud/cloud-obj.html" target="_blank" rel="noreferrer">uniCloud 云对象</a></p></blockquote><p><strong>几个要注意的点</strong></p><ol><li><p>使用 <a href="https://doc.dcloud.net.cn/uniCloud/http.html#cloudobject" target="_blank" rel="noreferrer">url 化</a> 方式编写的云对象接口（后文统称为接口），写完后请及时更新发布到云端，不要在本地进行调试了（本地调试无法获取 <a href="https://doc.dcloud.net.cn/uniCloud/cloud-obj.html#get-http-info" target="_blank" rel="noreferrer"><code>getHttpInfo</code></a>），建议直接在 <code>sv-service</code> 服务端的主页面请求面板中进行调试，或者使用 <a href="https://www.apipost.cn" target="_blank" rel="noreferrer">Apipost</a>、<a href="https://www.postman.com" target="_blank" rel="noreferrer">Postman</a> 等工具调试。</p></li><li><p>接口统一使用 POST，返回参数统一使用公共模块 <code>sv-handler</code> 处理，可以参照测试接口 <code>sv-api-test</code> 仿写。</p></li><li><p>三端内置了 <code>sv-configs</code> 模块，封装了 <a href="https://uniapp.dcloud.net.cn/api/request/request.html#request" target="_blank" rel="noreferrer">uni.request</a>，采用仿 <a href="https://www.axios-http.cn" target="_blank" rel="noreferrer">axios</a> 的编码风格，框架中也提供了相关使用示例，详情请移步 <a href="/sv-app-docs/docs-github/src/plugins/sv-configs/sv-configs.html"><code>sv-configs 模块</code></a></p></li><li><p>使用 <a href="https://doc.dcloud.net.cn/uniCloud/http.html#cloudobject" target="_blank" rel="noreferrer">url 化</a> 后，在 DB Schema 中对字段设置 <code>defaultValue</code>、<code>forceDefaultValue</code> 等参数以及相关权限等都将会失效，官方解释如下：<img src="'+n+'" alt="alt text"></p></li><li><p>接口路径问题：<i style="color:#FB7299;">(重点)</i></p><ul><li><p>接口完整路径是由：<code>基础路径</code> + <code>接口路径</code> 组合而成</p></li><li><p>基础路径：<code>https://fc-[服务空间 SpaceId].next.bspapp.com</code>，在 <code>云对象</code> -&gt; <code>详情</code> -&gt; <code>云函数 URL 化</code> 中可查看</p></li><li><p>接口路径：<code>/api/[自定义接口路径]/[云对象名]</code>，例如：<code>/api/test/testList</code>，此处的 <code>/api/</code> 作为规范，建议所有 url 化的云对象统一加上该前缀</p></li><li><p>可自行在 <code>云对象</code> -&gt; <code>详情</code> -&gt; <code>云函数 URL 化</code> 中手动配置接口路径：<img src="'+e+`" alt="alt text"></p></li><li><p>若想使用代码来配置接口路径，则要在对应云对象的 <code>package.json</code> 文件中配置 <a href="https://doc.dcloud.net.cn/uniCloud/cf-functions.html#cloudfunction-config" target="_blank" rel="noreferrer"><code>cloudfunction-config</code></a> 项，示例：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cloudfunction-config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/api/test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // ... 其他参数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>请求时接口的 url 示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> request </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@/uni_modules/sv-configs/request/index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/test/testList&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 基础路径 + /api 部分已在 config 内部统一配置，此处可省略；此处 /test 前的斜杠 / 也可省略，内部已做过处理</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    data,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>更多详情请移步 <a href="/sv-app-docs/docs-github/src/plugins/sv-configs/sv-configs.html"><code>sv-configs</code></a></p></li></ul></li><li><p>接口权限问题：</p><ul><li><p>使用 <a href="https://doc.dcloud.net.cn/uniCloud/http.html#cloudobject" target="_blank" rel="noreferrer">url 化</a> 将会导致 DB Schema 中相关权限失效，对此我已在 <code>sv-handler</code> 中重新校验了 token，并重新赋予了接口权限功能，在 <code>sv-api-test</code> 等云对象的 <code>index.obj.js</code> 入口文件中都有体现，详情还请移步至云对象源码中查看与仿写。</p></li><li><p>权限校验规则如下：</p><table><thead><tr><th>权限</th><th>说明</th></tr></thead><tbody><tr><td>open</td><td>开放</td></tr><tr><td>easy</td><td>需登录</td></tr><tr><td>normal</td><td>需 API_READ 只读或 API_WRITE 读写权限</td></tr><tr><td>strict</td><td>需 API_WRITE 读写权限</td></tr></tbody></table></li><li><p>此处只贴出部分代码：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// token身份安全校验</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> WHITE_LIST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 校验白名单，例如&#39;/testList&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 校验名单：open开放，easy需登录，normal需API_READ只读或API_WRITE读写权限，strict需API_WRITE读写权限</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> API_MODE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;/testList&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;open&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;/testAdd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;open&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;/testUpdate&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;open&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;/testDelete&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;open&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> apiPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getHttpInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().path;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 不是白名单的api需要进行校验</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WHITE_LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">includes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(apiPath)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cToken</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> handler.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkToken</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    clientInfo: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getClientInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    token: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getHttpInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().headers.authorization,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mode: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">API_MODE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[apiPath],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cToken.code </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    throw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cToken;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul></li></ol>`,9),h=[p];function k(d,o,c,r,E,g){return a(),i("div",null,h)}const F=s(l,[["render",k]]);export{y as __pageData,F as default};

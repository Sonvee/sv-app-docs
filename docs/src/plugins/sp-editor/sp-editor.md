# sp-editor

基于 uni-app 官方 [`editor`](https://uniapp.dcloud.net.cn/component/editor.html) 编辑器的富文本插件。

## 主要功能

1. 样式调整
2. 根据父盒子自动调整高度
3. 工具栏配置（工具可按需引入；工具图标大小、列数可调；新增调色板、超链接等工具）
4. 相对轻易实现对富文本初始数据预设
5. 实时获取当前编辑器内容（html 文本，text 纯文本）
6. 修复原 editor 组件部分缺陷（如开启只读后仍能操作图片、小程序长按无法粘贴的问题等）
7. 相对轻易实现对插入图片的处理（上传至服务器等）
8. 其他

> 强烈建议优先前往 [`插件市场`](https://ext.dcloud.net.cn/plugin?id=14726) 导入示例项目参考一下。

## 安装

1. [插件市场](https://ext.dcloud.net.cn/plugin?id=14726) 中点击 `下载插件并导入HBuildeX`。

## 前言

1. 首先你可能需要了解 uni-app 官方 [`editor`](https://uniapp.dcloud.net.cn/component/editor.html) 编辑器相关知识。
2. 关于 uni-app 官方 editor 编辑器的相关 [api](https://uniapp.dcloud.net.cn/api/media/editor-context.html)。

## 插件兼容性

1. [平台差异说明](https://uniapp.dcloud.net.cn/component/editor.html#平台差异说明)
2. [支持的标签](https://uniapp.dcloud.net.cn/component/editor.html#支持的标签)
3. [支持的内联样式](https://uniapp.dcloud.net.cn/component/editor.html#支持的内联样式)

## prop 参数

| 参数          | 类型    | 默认值                                         | 必填                            | 说明                                                           |
| ------------- | ------- | ---------------------------------------------- | ------------------------------- | -------------------------------------------------------------- |
| editorId      | String  | editor                                         | 否（使用 v-for 循环时建议填写） | 编辑器标签 id 属性，用于循环渲染编辑器时动态赋值，防止 id 重复 |
| placeholder   | String  | 写点什么吧 ~                                   | 否                              | 编辑器占位字样                                                 |
| readOnly      | Boolean | false                                          | 否                              | 是否只读                                                       |
| maxlength     | Number  | -1                                             | 否                              | 最大字数限制，-1 时不限制                                      |
| toolbarConfig | Object  | 详见 [toolbarConfig 参数](#toolbarconfig-参数) | 否                              | 工具栏配置                                                     |

### toolbarConfig 参数

| 参数        | 类型   | 默认值 | 说明                                                         |
| ----------- | ------ | ------ | ------------------------------------------------------------ |
| keys        | Array  | []     | 要显示的工具，优先级最大，详见 [toolbar 工具](#toolbar-工具) |
| excludeKeys | Array  | []     | 除这些指定的工具外，其他都显示                               |
| iconSize    | String | 18px   | 工具栏字体大小                                               |
| iconColumns | Number | 10     | 工具栏列数                                                   |

### toolbar 工具

| 工具 key        | 说明     |
| --------------- | -------- |
| bold            | 加粗     |
| italic          | 斜体     |
| underline       | 下划线   |
| strike          | 删除线   |
| alignLeft       | 左对齐   |
| alignCenter     | 居中对齐 |
| alignRight      | 右对齐   |
| alignJustify    | 两端对齐 |
| lineHeight      | 行间距   |
| letterSpacing   | 字间距   |
| marginTop       | 段前距   |
| marginBottom    | 段后距   |
| fontFamily      | 字体     |
| fontSize        | 字号     |
| color           | 文字颜色 |
| backgroundColor | 背景颜色 |
| date            | 日期     |
| listCheck       | 待办     |
| listOrdered     | 有序列表 |
| listBullet      | 无序列表 |
| indentInc       | 增加缩进 |
| indentDec       | 减少缩进 |
| divider         | 分割线   |
| header          | 标题     |
| scriptSub       | 下标     |
| scriptSuper     | 上标     |
| direction       | 文本方向 |
| image           | 图片     |
| link            | 超链接   |
| undo            | 撤销     |
| redo            | 重做     |
| removeFormat    | 清除格式 |
| clear           | 清空     |
| export          | 导出     |

:::tip
建议按需引入对应的工具，尽量简化富文本工具
:::

## emit 事件

| 事件名     | 参数                                                                                                               | 说明                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| init       | editor：编辑器实例；id：编辑器 id（在 v-for 循环渲染编辑器时，可以通过 id 来作区分处理）                           | 编辑器就绪回调                                 |
| upinImage  | tempFiles：包含插入图片的本地临时路径的对象（开发者可用此路径上传文件至服务器）；editor：编辑器实例；id：编辑器 id | 插入图片时回调                                 |
| input      | e：{ html, text } 当前内容的 html 文本、 text 文本；id：编辑器 id                                                  | 输入内容时回调                                 |
| addLink    | e：{ text, href } 添加的链接描述、链接地址；id：编辑器 id                                                          | 添加超链接回调，toolbar 需要开启 `link` 工具   |
| exportHtml | e：导出的 html 内容；id：编辑器 id                                                                                 | 工具栏导出回调，toolbar 需要开启 `export` 工具 |

:::warning
你需要在 upinImage 回调函数中处理插入的图片，否则图片将不会显示在编辑器中。详情可见下列 [使用示例](#使用示例) 中。
:::

## 使用示例

::: code-group

```vue [vue2]
<template>
  <view class="home">
    <view class="editor-box">
      <sp-editor
        :toolbar-config="{
          excludeKeys: ['direction', 'date', 'lineHeight', 'letterSpacing', 'listCheck'],
          iconSize: '18px',
        }"
        @init="initEditor"
        @input="inputOver"
        @upinImage="upinImage"
        @overMax="overMax"
        @addLink="addLink"
        @exportHtml="exportHtml"
      ></sp-editor>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      editorIns: null,
    };
  },
  methods: {
    methods: {
      /**
       * 获取输入内容
       * @param {Object} e {html,text} 内容的html文本，和text文本
       */
      inputOver(e) {
        // 可以在此处获取到编辑器已编辑的内容
        console.log("==== inputOver :", e);
      },
      /**
       * 超出最大内容限制
       * @param {Object} e {html,text} 内容的html文本，和text文本
       */
      overMax(e) {
        // 若设置了最大字数限制，可在此处触发超出限制的回调
        console.log("==== overMax :", e);
      },
      /**
       * 编辑器就绪
       * @param {Object} editor 编辑器实例，你可以自定义调用editor实例的方法
       * @tutorial editor组件 https://uniapp.dcloud.net.cn/component/editor.html#editor-%E7%BB%84%E4%BB%B6
       * @tutorial 相关api https://uniapp.dcloud.net.cn/api/media/editor-context.html
       */
      initEditor(editor) {
        this.editorIns = editor; // 保存编辑器实例
        // 保存编辑器实例后，可以在此处获取后端数据，并赋值给编辑器初始化内容
        this.preRender();
      },
      preRender() {
        setTimeout(() => {
          // 异步获取后端数据后，初始化编辑器内容
          this.editorIns.setContents({
            html: `<div>&nbsp;&nbsp;猫猫<img src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>`,
          });
        }, 1000);
      },
      /**
       * 直接运行示例工程插入图片无法正常显示的看这里
       * 因为插件默认采用云端存储图片的方式
       * 以$emit('upinImage', tempFiles, this.editorCtx)的方式回调
       * @param {Object} tempFiles
       * @param {Object} editorCtx
       */
      upinImage(tempFiles, editorCtx) {
        /**
         * 本地临时插入图片预览
         * 注意：这里仅是示例本地图片预览，因为需要将图片先上传到云端，再将图片插入到编辑器中
         * 正式开发时，还请将此处注释，并解开下面 使用 uniCloud.uploadFile 上传图片的示例方法 的注释
         * @tutorial https://uniapp.dcloud.net.cn/api/media/editor-context.html#editorcontext-insertimage
         */
        // #ifdef MP-WEIXIN
        // 注意微信小程序的图片路径是在tempFilePath字段中
        editorCtx.insertImage({
          src: tempFiles[0].tempFilePath,
          width: "80%", // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
          success: function () {},
        });
        // #endif

        // #ifndef MP-WEIXIN
        editorCtx.insertImage({
          src: tempFiles[0].path,
          width: "80%", // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
          success: function () {},
        });
        // #endif

        /**
         * 使用 uniCloud.uploadFile 上传图片的示例方法（可适用多选上传）
         * 正式开发环境中，请将上面 本地临时插入图片预览 注释后，模仿以下写法
         */
        // tempFiles.forEach(async (item) => {
        //   uni.showLoading({
        //     title: '上传中请稍后',
        //     mask: true
        //   })
        //   let upfile = await uniCloud.uploadFile({
        //     filePath: item.path,
        //     // 同名会导致报错 policy_does_not_allow_file_overwrite
        //     // cloudPath可由 想要存储的文件夹/文件名 拼接，若不拼文件夹名则默认存储在cloudstorage文件夹中
        //     cloudPath: `cloudstorage/${item.name}`,
        //     cloudPathAsRealPath: true
        //   })
        //   editorCtx.insertImage({
        //     src: upfile.fileID,
        //     width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
        //     success: function () {
        //       uni.hideLoading()
        //     }
        //   })
        // })
      },
      /**
       * 导出 - toolbar需要开启export工具
       * @param {string} e 导出的html内容
       */
      exportHtml(e) {
        uni.navigateTo({
          url: "/pages/out/out",
          success(res) {
            // 传至导出页面解析即可
            res.eventChannel.emit("e-transmit-html", {
              data: e,
            });
          },
        });
      },
      /**
       * 添加超链接
       * @param {Object} e { text: '链接描述', href: '链接地址' }
       */
      addLink(e) {
        console.log("==== addLink :", e);
      },
    },
  },
};
</script>
```

```vue [vue3]
<template>
  <view class="home">
    <view class="editor-box">
      <sp-editor
        :toolbar-config="{
          excludeKeys: ['direction', 'date', 'lineHeight', 'letterSpacing', 'listCheck'],
          iconSize: '18px',
        }"
        @init="initEditor"
        @input="inputOver"
        @upinImage="upinImage"
        @overMax="overMax"
        @addLink="addLink"
        @exportHtml="exportHtml"
      ></sp-editor>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

const editorIns = ref(null);

/**
 * 获取输入内容
 * @param {Object} e {html,text} 内容的html文本，和text文本
 */
function inputOver(e) {
  // 可以在此处获取到编辑器已编辑的内容
  console.log("==== inputOver :", e);
}

/**
 * 超出最大内容限制
 * @param {Object} e {html,text} 内容的html文本，和text文本
 */
function overMax(e) {
  // 若设置了最大字数限制，可在此处触发超出限制的回调
  console.log("==== overMax :", e);
}

/**
 * 编辑器就绪
 * @param {Object} editor 编辑器实例，你可以自定义调用editor实例的方法
 * @tutorial editor组件 https://uniapp.dcloud.net.cn/component/editor.html#editor-%E7%BB%84%E4%BB%B6
 * @tutorial 相关api https://uniapp.dcloud.net.cn/api/media/editor-context.html
 */
function initEditor(editor) {
  editorIns.value = editor; // 保存编辑器实例
  // 保存编辑器实例后，可以在此处获取后端数据，并赋值给编辑器初始化内容
  this.preRender();
}

function preRender() {
  setTimeout(() => {
    // 异步获取后端数据后，初始化编辑器内容
    editorIns.value.setContents({
      html: `<div>&nbsp;&nbsp;猫猫<img src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>`,
    });
  }, 1000);
}

/**
 * 直接运行示例工程插入图片无法正常显示的看这里
 * 因为插件默认采用云端存储图片的方式
 * 以$emit('upinImage', tempFiles, this.editorCtx)的方式回调
 * @param {Object} tempFiles
 * @param {Object} editorCtx
 */
function upinImage(tempFiles, editorCtx) {
  /**
   * 本地临时插入图片预览
   * 注意：这里仅是示例本地图片预览，因为需要将图片先上传到云端，再将图片插入到编辑器中
   * 正式开发时，还请将此处注释，并解开下面 使用 uniCloud.uploadFile 上传图片的示例方法 的注释
   * @tutorial https://uniapp.dcloud.net.cn/api/media/editor-context.html#editorcontext-insertimage
   */
  // #ifdef MP-WEIXIN
  // 注意微信小程序的图片路径是在tempFilePath字段中
  editorCtx.insertImage({
    src: tempFiles[0].tempFilePath,
    width: "80%", // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
    success: function () {},
  });
  // #endif

  // #ifndef MP-WEIXIN
  editorCtx.insertImage({
    src: tempFiles[0].path,
    width: "80%", // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
    success: function () {},
  });
  // #endif

  /**
   * 使用 uniCloud.uploadFile 上传图片的示例方法（可适用多选上传）
   * 正式开发环境中，请将上面 本地临时插入图片预览 注释后，模仿以下写法
   */
  // tempFiles.forEach(async (item) => {
  //   uni.showLoading({
  //     title: '上传中请稍后',
  //     mask: true
  //   })
  //   let upfile = await uniCloud.uploadFile({
  //     filePath: item.path,
  //     // 同名会导致报错 policy_does_not_allow_file_overwrite
  //     // cloudPath可由 想要存储的文件夹/文件名 拼接，若不拼文件夹名则默认存储在cloudstorage文件夹中
  //     cloudPath: `cloudstorage/${item.name}`,
  //     cloudPathAsRealPath: true
  //   })
  //   editorCtx.insertImage({
  //     src: upfile.fileID,
  //     width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
  //     success: function () {
  //       uni.hideLoading()
  //     }
  //   })
  // })
}

/**
 * 导出 - toolbar需要开启export工具
 * @param {string} e 导出的html内容
 */
function exportHtml(e) {
  uni.navigateTo({
    url: "/pages/out/out",
    success(res) {
      // 传至导出页面解析即可
      res.eventChannel.emit("e-transmit-html", {
        data: e,
      });
    },
  });
}

/**
 * 添加超链接
 * @param {Object} e { text: '链接描述', href: '链接地址' }
 */
function addLink(e) {
  console.log("==== addLink :", e);
}
</script>
```

:::

:::tip
使用 v-for 循环渲染编辑器并分别处理的案例我写在示例工程的示例二中了，有需要的同学可以前往 [`插件市场`](https://ext.dcloud.net.cn/plugin?id=14726) 导入示例工程看下。
:::

## 注意事项

1. 该组件在使用过程中推荐在外层套上个父盒子，并给父盒子高度，组件在封装时进行了高度计算，会自动撑满父盒子
2. 如遇到在内置浏览器中发生无法拖动调节颜色板的问题，只需调出开发者调试面板，点击重置左上角选择 dom 的箭头后，便能调出模拟器手势光标，便可正常拖动了
3. 有插入视频的需求，暂时可能无法实现，官方给予的回复是：目前各端的 eidtor 组件都不能直接插入视频，编辑时可以采用视频封面占位，并在图片中保存视频信息，在预览时再还原为视频。
4. 在 H5 中，由于官方 editor 内部是使用 unpkg 加载 quill.min.js、image-resize.min.js 两个依赖，可能会存在国内无法访问 unpkg 的资源，导致 editor 不正常的问题，在此我已将该两个依赖包放在了组件的 uni_modules/sp-editor/static 文件夹下，希望在 H5 端正常且稳定使用的小伙伴可以在 index.html 或 template.h5.html 中引入该本地 cdn 资源

   - 官方已给出了[H5 使用最佳实践](https://uniapp.dcloud.net.cn/component/editor.html#h5-%E4%BD%BF%E7%94%A8%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5)，主要两种方式：
     - 方案一：自行托管 CDN 资源，示例工程中使用该方案一（使用静态资源，或者把资源丢进自己服务器中，要注意的是，在 vue3 环境下直接在项目根目录下的 index.html 配置 script 标签引入资源即可，但是在 vue2 环境下 需要在根目录下创建 template.h5.html 自定义模板，在该模板中配置资源引入，详情可见博客[uniapp 内网部署 editor 富文本报错问题](https://blog.csdn.net/heroboyluck/article/details/125336035)）
     - 方案二：装 quill 的 1.3.7 的 node 包 `npm i quill@1.3.7`
     - 关于此问题还可详见官方问答贴：[在 H5 中使用了 uni-app 的 editor 组件异常的解决方案](https://ask.dcloud.net.cn/article/40900)
     - 注意此解决方式主要针对 H5 端，其他端不要做该操作

5. 由于官方 editor 组件中的 insertText 方法在不同平台是基于各平台对应的富文本技术实现，可能存在部分问题：

   - 在安卓 app 正常，但是其他平台在插入内容的时候会移动光标聚焦，导致焦点回滚到视口处
   - 初始化内容时建议使用 setContents 方法，而非 insertText 方法
   - 尽量避免使用 insertText 方法，因为可能导致意外的光标移动问题

6. 请阅读了解 [editor 支持的标签](https://uniapp.dcloud.net.cn/component/editor.html#%E6%94%AF%E6%8C%81%E7%9A%84%E6%A0%87%E7%AD%BE)
7. 关于添加插入超链接的问题：
   - 在微信小程序中点击不跳转的问题，可见[uniapp 的 editor 组件插入的 a 标签会被删除 href 属性](https://ask.dcloud.net.cn/question/151737)，经官方实测是微信小程序的问题，可能需要等微信官方修复了
   - 光标问题，因为 uniapp 官方的 editor 组件并没有开放插入 a 标签的 api，我手搓了一个 addLink 的方法，该方法本质上使用的是 setContents 方法，将 delta 替换插入 link，由于 setContents 会使光标默认回到开头位置，故我做了插入链接后使富文本失焦的操作，需要用户再手动点击使光标聚焦（属实也是无奈之举，目前可能是实现手动添加链接的最优解，除非官方开放添加链接的 api）
   - 插入的超链接在编辑模式下不可跳转，因为此时还是正在编辑的富文本，需要使用好一点的富文本解析器来解析编辑好的富文本文档成和他们后才能点击跳转，如在示例工程中编辑完成后点击 export 工具导出解析后即可点击跳转

## 疑难解答

> 可新建 [`Issue`](https://gitee.com/Sonve/sv-app-docs/issues/new) / [`悬赏`](https://gitee.com/Sonve/sv-app-docs/reward_issues/new) 来 [`发起提问`](https://gitee.com/Sonve/sv-app-docs/issues)

1. 添加的超链接无法跳转怎么办？

   - 如果您是微信小程序的话，那可能有些抱歉，这是微信小程序官方的 bug，可前往问答帖 [uniapp 的 editor 组件插入的 a 标签会被删除 href 属性](https://ask.dcloud.net.cn/question/151737)，uniapp 官方人员实测是微信小程序本身的问题，可能需要等微信官方修复了。
   - 不是微信小程序也不能跳转？那我猜你可能正处于编辑中，正在编辑的时候是无法跳转的，你需要导出当前编辑好的 html（建议用一个好些的解析器，比如 [`mp-html`](https://ext.dcloud.net.cn/plugin?id=805)，有的简陋的解析器或者官方自带的 rich-text 组件无法解析部分标签如 a 标签），或者开启编辑器的只读模式，才能正常跳转。（可以在示例工程的示例一中体验下）

2. 怎么添加视频？

   - 我也无能为力了，官方实在是不支持插入视频，更没有像插入图片那样的 api，我也尝试过很多方式，但是当前确实无法实现像插入图片那般的插入视频。如果您有思路还希望告知。

3. 字体怎么切换？
   - 当前只支持切换成宋体，因为字体种类太多，我也不好囊括，所以只简单实现了切换宋体。

## 自定义扩展

1. 插件本身支持对各种自定义的工具进行扩展，可以模仿添加超链接或插入日期等工具的写法规范，进行自定义扩展开发
2. 本插件内部封装了一个 addLink 的方法，用于插入超链接(a 标签)的工具，如若要自定义扩展功能：#话题#、 @别人，等类似的携带链接的功能，可以模仿该 addLink 的方式进行自定义扩展开发。

## 写在最后

若对插件有任何疑问或者优化建议，欢迎在 [插件评论区](https://ext.dcloud.net.cn/plugin?id=14726#rating) 留言，在插件市场中的私信消息本人可能不经常留意，导致没能及时回复，
可以加入本人的插件问答 QQ 交流群: 852637893，欢迎 [进群交流](https://qm.qq.com/cgi-bin/qm/qr?k=HD9IXnUruOa5pplF1jAeQsLb9BNnP_DE&jump_from=webapi&authKey=tk61Q5la3EAprdYcUBD7v0PBly795OTcT4UT36XxqcG7pmhGRpE+yFlt75vQBWeY)。

<img width="200" src="https://mp-74bfcbac-6ba6-4f39-8513-8831390ff75a.cdn.bspapp.com/static/qqqun.jpg" alt="交流群:852637893"/>

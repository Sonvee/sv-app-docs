# 富文本模块 [`sv-wangeditor`](https://ext.dcloud.net.cn/plugin?id=16444)

基于 [`wangEditor (Vue3 版)`](https://www.wangeditor.com/v5/for-frame.html#vue3) 开发的 H5 端富文本插件。

## 主要功能

> 强烈建议优先前往 [`插件市场`](https://ext.dcloud.net.cn/plugin?id=16444) 导入示例项目参考一下。

## 安装与部署

1. [插件市场](https://ext.dcloud.net.cn/plugin?id=16444) 中点击 `下载插件并导入HBuildeX`。

2. 部署 云对象/数据库 至您的 uniCloud 云服务空间，如果您还不会部署，可移步至 [服务端-云服务空间初始化](../../frame/sv-service/sv-service.md#云服务空间初始化)。

   > 本插件中仅有一个云对象用于删除云存储文件，不使用 uniCloud 云存储的话，可以忽略此步骤，并将本插件根目录中 `uniCloud` 文件夹整个删除

3. 在你的项目中安装 `wangEditor` 官方的 node 包。

   ::: code-group

   ```bash [npm]
   npm install @wangeditor/editor
   npm install @wangeditor/editor-for-vue@next
   ```

   ```bash [yarn]
   yarn add @wangeditor/editor
   yarn add wangeditor/editor-for-vue@next
   ```

   ```bash [pnpm]
   pnpm add @wangeditor/editor
   pnpm add wangeditor/editor-for-vue@next
   ```

   :::

## 前言

本插件仅推荐 H5 端使用，目前仅支持 vue3

## 插件兼容性

> `✔️ 实测可行` `❌ 未兼容` `➖ 未实测`

| Vue2 | Vue3 | H5  | App | 微信小程序 |
| :--: | :--: | :-: | :-: | :--------: |
|  ❌  |  ✔️  | ✔️  | ❌  |     ❌     |

## prop 参数

| 参数          | 类型   | 默认值        | 必填 | 说明                                                                 |
| ------------- | ------ | ------------- | ---- | -------------------------------------------------------------------- |
| html          | String |               | 否   | 当前富文本内容                                                       |
| toolbarConfig | Object | {}            | 否   | 详见 [工具栏配置](https://www.wangeditor.com/v5/toolbar-config.html) |
| mode          | String | default       | 否   | 编辑器模式，可选值：default/simple                                   |
| placeholder   | String | 请输入内容... | 否   | 编辑器占位字样                                                       |

## emit 事件

| 事件名 | 参数                                        | 说明           |
| ------ | ------------------------------------------- | -------------- |
| change | e：{ html, text } html 和 text 文本格式内容 | 内容改变时回调 |
| save   | e：{ html, text } html 和 text 文本格式内容 | 结束编辑时回调 |

## 实例方法

| 方法名 | 参数 | 说明                                              |
| ------ | ---- | ------------------------------------------------- |
| save   | 无   | 手动触发结束编辑操作，会相应的触发 @save 回调事件 |

## 实例变量

| 变量名    | 说明                                                                                                                                        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| editorIns | 编辑器实例对象，可以手动使用该实例去自由调用 wangEditor 官方更加丰富的编辑器 api，详见 [编辑器 API](https://www.wangeditor.com/v5/API.html) |

## 使用前准备操作

1. 将 `node_modules` 中的 `@wangeditor/editor/dist/css/style.css` 复制到项目根目录 `static/css` 文件夹中，并改名为 `wangeditor-style.css`。

2. 因为 uniapp 在编译时会将 h5 原生 `button` 等标签转换为 `uni-button` 从而导致样式失效，故将样式文件放置 `static` 中，并通过 `link` 引入才能规避 uniapp 这一 bug（本插件内部已经 `link` 引入，无需您再进行 `link` 引入，您只需完成 1 步骤把 css 文件弄好）。

3. 因为在进行上传图片或视频等文件资源时，有必要进行删除的操作，故需要使用 uniCloud 云对象进行文件删除，使用前请上传插件内置的 `sv-utils` 云对象。（如果您不使用 uniCloud 作为后端，则需要将插件源码中有关 uniCloud 的代码删除并改为你与后端交互的操作，一个是 `customUpload` 方法中图片和视频上传的操作，一个是 `save` 方法中删除文件的操作，也不要忘记删除插件中的 uniCloud 文件夹）

## 使用示例

```vue
<template>
  <sv-wangeditor
    v-if="showEditor"
    v-model:html="comment"
    ref="editorRef"
    mode="default"
    :toolbarConfig="toolbarConfig"
    @change="changeEditor"
    @save="saveEditor"
  ></sv-wangeditor>
  <button @click="onSave">保存</button>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const editorRef = ref();
const showEditor = ref(true);
const toolbarConfig = ref({});
const comment = ref("hello world");

onLoad(() => {
  setTimeout(() => {
    comment.value = "<p>hello sv-wangEditor</p>";
  }, 2000);
});

function changeEditor(e) {
  console.log("==== changeEditor :", e);
}

function onSave() {
  // 调用实例方法save触发保存事件
  editorRef.value.save();
}

function saveEditor(e) {
  console.log("==== saveEditor :", e);
}
</script>
```

## 注意事项

1. toolbarConfig 工具栏配置通常情况下不必作修改。

2. 在自定义 图片/视频 上传时需要注意：

   - 在 `@/uni_modules/sv-wangeditor/components/sv-wangeditor/sv-wangeditor.vue` 中搜索 `customUpload` 方法有 图片/视频 两处，你需要根据注释中的指引，去修改成你的服务器上传逻辑。

3. 该组件内部已进行高度计算，使用时建议在外层套一个父盒子，父盒子给宽高，编辑器会自动填满父盒子。

4. 编辑器可能会报出警告：`编辑区域高度 < 300px 这可能会导致 modal hoverbar 定位异常`，但是在编辑器的高度大于 300px 的情况下也会报该警告，好在该警告不影响使用，可忽略。

5. 该插件推荐使用外置浏览器例如 Chrome 测试，HBuilderX 内置浏览器可能会存在添加视频时无法正常播放视频的问题。

6. 该插件目前只支持 H5 端 Vue3 项目，或者你的 app 是内嵌的 webview 或许也可（尚未实际测试）。

## 疑难解答

> 可新建 [`Issue`](https://gitee.com/Sonve/sv-app-docs/issues/new) / [`悬赏`](https://gitee.com/Sonve/sv-app-docs/reward_issues/new) 来 [`发起提问`](https://gitee.com/Sonve/sv-app-docs/issues)

## 写在最后

若对插件有任何疑问或者优化建议，欢迎在 [插件评论区](https://ext.dcloud.net.cn/plugin?id=16444#rating) 留言，在插件市场中的私信消息本人可能不经常留意，导致没能及时回复，
可以加入本人的插件问答 QQ 交流群: 852637893，欢迎 [进群交流](https://qm.qq.com/cgi-bin/qm/qr?k=HD9IXnUruOa5pplF1jAeQsLb9BNnP_DE&jump_from=webapi&authKey=tk61Q5la3EAprdYcUBD7v0PBly795OTcT4UT36XxqcG7pmhGRpE+yFlt75vQBWeY)。

<img width="200" src="https://mp-74bfcbac-6ba6-4f39-8513-8831390ff75a.cdn.bspapp.com/static/qqqun.jpg" alt="交流群:852637893"/>

# sp-sign-board

签字板，可添加背景图或动态水印，可适配横竖屏，并将签名生成 base64 格式图片

## 主要功能

1. 签字签名
2. 可添加背景图片和水印
3. 适配横竖屏
4. 生成图片
5. 兼容 H5、App、小程序

> 强烈建议优先前往 [`插件市场`](https://ext.dcloud.net.cn/plugin?id=14966) 导入示例项目参考一下。

## 安装

1. [插件市场](https://ext.dcloud.net.cn/plugin?id=14966) 中点击 `下载插件并导入HBuildeX`。

## 插件兼容性

> `✔️ 实测可行` `❌ 未兼容` `➖ 未实测`

| Vue2 | Vue3 | H5  | App | 微信小程序 | 支付宝小程序 |
| :--: | :--: | :-: | :-: | :--------: | :----------: |
|  ✔️  |  ✔️  | ✔️  | ✔️  |     ✔️     |      ➖      |

:::tip
支付宝小程序未实测但理论可行，如有问题还请在群里反馈讨论。
:::

## prop 参数

| 参数       | 类型    | 默认值                                             | 必填 | 说明                                        |
| ---------- | ------- | -------------------------------------------------- | ---- | ------------------------------------------- |
| sid        | String  | sign-board                                         | 否   | 签字板 id，用于多签名场景下作为区分         |
| bgImg      | String  |                                                    | 否   | 背景水印图，优先级大于 bgColor              |
| bgColor    | String  |                                                    | 否   | 背景纯色底色，为空则透明                    |
| horizontal | Boolean | false                                              | 否   | 是否横屏                                    |
| showMark   | Boolean | true                                               | 否   | 是否显示水印                                |
| markText   | Array   | []                                                 | 否   | 水印内容，可多行，示例 ['水印 1', '水印 2'] |
| markStyle  | Object  | 详见 [markStyle 水印样式](#markstyle-水印样式)     | 否   | 水印样式                                    |
| penStyle   | Object  | 详见 [penStyle 画笔样式](#penstyle-画笔样式)       | 否   | 画笔样式                                    |
| expFile    | Object  | 详见 [expFile 导出图片配置](#expfile-导出图片配置) | 否   | 导出图片配置                                |

### markStyle 水印样式

| 参数       | 类型   | 默认值          | 说明                                                                |
| ---------- | ------ | --------------- | ------------------------------------------------------------------- |
| fontSize   | Number | 12              | 水印字体大小，单位 px                                               |
| fontFamily | String | microsoft yahei | 水印字体                                                            |
| color      | String | #cccccc         | 水印字体颜色                                                        |
| rotate     | Number | 60              | 水印旋转角度                                                        |
| step       | Number | 2.2             | 步长，部分场景下可通过调节该参数来调整水印间距，建议为 1.4-2.6 左右 |

### penStyle 画笔样式

| 参数      | 类型   | 默认值  | 说明              |
| --------- | ------ | ------- | ----------------- |
| lineWidth | Number | 3       | 画笔线宽 建议 1~5 |
| color     | String | #000000 | 画笔颜色          |

### expFile 导出图片配置

| 参数     | 类型   | 默认值 | 说明                                                             |
| -------- | ------ | ------ | ---------------------------------------------------------------- |
| fileType | String | png    | png/jpg (png 不可压缩质量，支持透明；jpg 可压缩质量，不支持透明) |
| quality  | Number | 1      | 压缩质量，范围 0 - 1 (仅 jpg 支持)                               |

## emit 事件

| 事件名          | 参数 | 说明               |
| --------------- | ---- | ------------------ |
| cancle          | 无   | 取消按钮回调       |
| reset           | 无   | 重写按钮回调       |
| confirm         | 无   | 确认按钮回调       |
| firstTouchStart | 无   | 第一次开始触碰事件 |

## uni.$emit 事件

| 事件名     | 参数                                                                                                                      | 说明           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------- | -------------- |
| getSignImg | e：{ base64, path, sid } 生成签字图片的 base64、临时路径、以及签字板 sid（多签字板同时存在时，可以通过 sid 来作区分处理） | 确认签名后触发 |

## 使用示例

::: code-group

```vue [vue2]
<template>
  <view class="sign">
    <sp-sign-board
      ref="signBoardRef"
      sid="sign-board"
      horizontal
      bgColor="#ffffff"
      :mark-text="markText"
      @reset="reset"
      @firstTouchStart="firstTouchStart"
    ></sp-sign-board>
  </view>
</template>

<script>
export default {
  data() {
    return {
      markText: "",
    };
  },
  onLoad() {
    // 生成水印内容
    this.refreshMark();
  },
  methods: {
    refreshMark() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const hours = String(currentDate.getHours()).padStart(2, "0");
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const seconds = String(currentDate.getSeconds()).padStart(2, "0");

      this.markText = [`${year}-${month}-${day}`, `${hours}:${minutes}:${seconds}`];
    },
    firstTouchStart() {
      // 在第一次开始触碰时，更新一下时间水印，防止滞留时间太长造成时间误差（非必要）
      this.refreshMark();
      // 手动调用组件内绘制水印方法重新绘制
      this.$refs.signBoardRef.drawMark(this.markText);
    },
    reset() {
      this.refreshMark();
    },
  },
};
</script>
```

```vue [vue3]
<template>
  <view class="sign">
    <sp-sign-board
      ref="signBoardRef"
      sid="sign-board"
      horizontal
      bgColor="#ffffff"
      :mark-text="markText"
      @reset="reset"
      @firstTouchStart="firstTouchStart"
    ></sp-sign-board>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";

const markText = ref([]);
const signBoardRef = ref();

onLoad(() => {
  refreshMark();
});

function refreshMark() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  markText.value = [`${year}-${month}-${day}`, `${hours}:${minutes}:${seconds}`];
}

function firstTouchStart() {
  // 在第一次开始触碰时，更新一下时间水印，防止滞留时间太长造成时间误差（非必要）
  refreshMark();
  // 手动调用组件内绘制水印方法重新绘制
  signBoardRef.value.drawMark(markText.value);
}

function reset() {
  refreshMark();
}
</script>
```

:::

## 注意事项

1. 尽量不要在 movable-view 中使用，当放大缩小的时候可能会导致签名错位偏移的情况。

2. 在平板设备上开发时，请自行调整横竖屏，以便导出的图片尺寸合适。

## 疑难解答

> 可新建 [`Issue`](https://gitee.com/Sonve/sv-app-docs/issues/new) / [`悬赏`](https://gitee.com/Sonve/sv-app-docs/reward_issues/new) 来 [`发起提问`](https://gitee.com/Sonve/sv-app-docs/issues)

1. 把签字面板放进了弹窗中，第一次打开弹窗签字正常，关闭弹窗后再打开就不正常了。

   - 有可能是签字板渲染与销毁异常导致的，需要你在关闭弹窗时将签字板给 v-if="false" 销毁掉，开启后重新渲染一下。

## 写在最后

若对插件有任何疑问或者优化建议，欢迎在 [插件评论区](https://ext.dcloud.net.cn/plugin?id=14966#rating) 留言，在插件市场中的私信消息本人可能不经常留意，导致没能及时回复，
可以加入本人的插件问答 QQ 交流群: 852637893，欢迎 [进群交流](https://qm.qq.com/cgi-bin/qm/qr?k=HD9IXnUruOa5pplF1jAeQsLb9BNnP_DE&jump_from=webapi&authKey=tk61Q5la3EAprdYcUBD7v0PBly795OTcT4UT36XxqcG7pmhGRpE+yFlt75vQBWeY)。

> 写文档码字感觉真累啊，果然最讨厌的两件事：一是找到合适的插件没文档，二是自己写的插件要自己写文档了_(:з」∠)_。如果有帮助到您，希望能 [鼓励一下](../../donate/donate.md) 吧~ 谢谢 ♪(･ω･)ﾉ

<img width="200" src="https://mp-74bfcbac-6ba6-4f39-8513-8831390ff75a.cdn.bspapp.com/static/qqqun.jpg" alt="交流群:852637893"/>

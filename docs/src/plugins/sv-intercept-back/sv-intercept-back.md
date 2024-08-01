# 返回拦截 [`sv-intercept-back`](https://ext.dcloud.net.cn/plugin?id=16381)

返回拦截 阻止退出 拦截手势滑动物理按键返回

## 主要功能

某些情况下，需要在用户确认退出后方能安全返回或退出。该插件可拦截的返回方式有：

1. 原生导航栏返回
2. uni.navigateBack 返回
3. 真机物理按键返回
4. 真机手势滑动返回
5. 可选择性开启或关闭拦截
6. 自定义拦截前操作
7. 自定义返回操作

> 强烈建议优先前往 [`插件市场`](https://ext.dcloud.net.cn/plugin?id=16381) 导入示例项目参考一下。
> 示例工程中插件可能不是最新版本，运行之前建议先将示例工程中插件更新至最新版本哦。

## 安装

1. [插件市场](https://ext.dcloud.net.cn/plugin?id=16381) 中点击 `下载插件并导入HBuildeX`。

## 前言

## 插件兼容性

> `✔️ 实测可行` `❌ 未兼容` `➖ 未实测`

| Vue2 | Vue3 | H5  | App（安卓） | App（IOS） | 微信小程序 |
| :--: | :--: | :-: | :---------: | :--------: | :--------: |
|  ✔️  |  ✔️  | ✔️  |     ✔️      |     ➖     |     ✔️     |

## prop 参数

| 参数            | 类型     | 默认值 | 必填 | 说明           |
| --------------- | -------- | ------ | ---- | -------------- |
| show            | Boolean  | true   | 否   | 是否开启拦截   |
| beforeIntercept | Function | true   | 是   | 拦截前操作     |
| customBack      | Function | true   | 否   | 自定义返回操作 |

## emit 事件

| 事件名      | 参数 | 说明         |
| ----------- | ---- | ------------ |
| backConfirm | 无   | 确认返回回调 |
| backCancel  | 无   | 取消返回回调 |

## 使用示例

::: code-group

```vue [vue2]
<template>
  <view class="next">
    <button @click="onback">点击返回</button>
    <button @click="onleave">直接返回</button>
    <sv-intercept-back :show="interceptFlag" :beforeIntercept="beforeIntercept" @backConfirm="backConfirm" @backCancel="backCancel"></sv-intercept-back>
  </view>
</template>

<script>
export default {
  data() {
    return {
      interceptFlag: true
    }
  },
  methods: {
    async beforeIntercept() {
      const isBack = await new Promise((callback) => {
        uni.showModal({
          title: '系统提示',
          content: '是否退出当前页面',
          success: ({ confirm }) => {
            callback(confirm)
          }
        })
      })
      return isBack
    },
    customBack() {
      console.log('==== customBack')
    },
    backConfirm() {
      console.log('==== backConfirm')
    },
    backCancel() {
      console.log('==== backCancel')
    },
    onback() {
      uni.navigateBack()
    },
    onleave() {
      this.interceptFlag = false
      // 添加一个短暂的延时
      setTimeout(() => {
        uni.navigateBack()
      }, 200)
    }
  }
}
</script>
```

```vue [vue3]
<template>
  <view class="next">
    <button @click="onback">点击返回</button>
    <button @click="onleave">直接返回</button>
    <sv-intercept-back :show="interceptFlag" :beforeIntercept="beforeIntercept" @backConfirm="backConfirm" @backCancel="backCancel"></sv-intercept-back>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const interceptFlag = ref(true)

async function beforeIntercept() {
  const isBack = await new Promise((callback) => {
    uni.showModal({
      title: '系统提示',
      content: '是否退出当前页面',
      success: ({ confirm }) => {
        callback(confirm)
      }
    })
  })
  return isBack
}

function customBack() {
  console.log('==== customBack')
}

function backConfirm() {
  console.log('==== backConfirm')
}

function backCancel() {
  console.log('==== backCancel')
}

function onback() {
  uni.navigateBack()
}

function onleave() {
  interceptFlag.value = false
  // 建议此处添加一个短暂的延时，以确保interceptFlag为false时拦截器成功卸载
  setTimeout(() => {
    uni.navigateBack()
  }, 200)
}
</script>
```

:::

## 注意事项

1. 很抱歉，该插件暂不能只针对某一种返回方式做单独处理，比如只想拦截 uni.navigateBack 而不拦截物理按键返回，暂时无法做这种区分，故该插件暂时只做统一的返回拦截。

2. 在 uniapp 的页面生命周期中有个[onBackPress](https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle)，若只想做页面单独处理返回来源是 backbutton(按键返回)还是 navigateBack 的话，可以参考官方的这个[onBackPress](https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle)生命周期，但是貌似局限性会蛮大的，本人未仔细研究过，只能祝开发顺利了。

## 疑难解答

1. 在 H5 端有报错 `back:confirm / back:cancel`

   - 该报错是主动抛出异常，不影响运行，可忽略。因本插件在 H5 与 APP 端是基于 uni.addInterceptor 创建 navigateBack 拦截器实现，本人实测在 invoke 阶段适当的位置进行主动 throw 抛出异常来终止拦截，可完美实现返回拦截需求。
   - back:confirm 在确认退出页面后抛出
   - back:cancel 在取消退出页面后抛出
   - 若开发者对异常有代码洁癖，本人暂时也没有什么更好的实现方式。如有更好的拦截方式还望加 QQ 群讨论。

2. 在微信小程序端，主动调用 uni.navigateBack ，在真机测试有报错 `navigateBack:fail:navigateBack intercepted` 是怎么回事？
   - 本插件在微信小程序使用 page-container 方式拦截返回，该异常触发的具体原因不明，但是实测不影响运行。（在开发者工具上无该报错）
   - 该报错也只在开发者逻辑调用 uni.navigateBack 会抛出，点击原生导航栏的返回、手势滑动、物理返回时都不会报错。
   - 反正该异常也不会影响运行，本人暂时也没有什么更好的实现方式，个人感觉可忽略。

> 可新建 [`Issue`](https://gitee.com/Sonve/sv-app-docs/issues/new) / [`悬赏`](https://gitee.com/Sonve/sv-app-docs/reward_issues/new) 来 [`发起提问`](https://gitee.com/Sonve/sv-app-docs/issues)

## 写在最后

若对插件有任何疑问或者优化建议，欢迎在 [插件评论区](https://ext.dcloud.net.cn/plugin?id=16381#rating) 留言，在插件市场中的私信消息本人可能不经常留意，导致没能及时回复，
可以加入本人的插件问答 QQ 交流群: 852637893，欢迎 [进群交流](https://qm.qq.com/cgi-bin/qm/qr?k=HD9IXnUruOa5pplF1jAeQsLb9BNnP_DE&jump_from=webapi&authKey=tk61Q5la3EAprdYcUBD7v0PBly795OTcT4UT36XxqcG7pmhGRpE+yFlt75vQBWeY)。

<img width="200" src="https://mp-74bfcbac-6ba6-4f39-8513-8831390ff75a.cdn.bspapp.com/static/qqqun.jpg" alt="交流群:852637893"/>

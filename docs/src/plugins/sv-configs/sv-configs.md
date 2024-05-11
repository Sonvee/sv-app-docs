# 配置模块 [`sv-configs`](https://ext.dcloud.net.cn/plugin?id=17777)

用于 `sv-app` 三端框架的全局配置项，以及 request 封装等。

## 主要功能

1. 项目全局变量配置（包括基础路径、基础 api 路径等）。
2. 对 uni.request 的封装。

> 属于 `sv-app` 三端体系核心插件，部分体系插件依赖于本插件。

## 安装

1. [插件市场](https://ext.dcloud.net.cn/plugin?id=17777) 中点击 `下载插件并导入HBuildeX`。

## 前言

三端框架必装此插件（框架默认自带），部分体系插件依赖于本插件。

## 插件兼容性

纯 js 插件

## 使用示例

> api 用法

::: code-group

```javascript [api.js]
// api/api.js
import request from "@/uni_modules/sv-configs/request/index.js";

export function testList(data) {
  return request({
    url: "/test/testList",
    method: "POST",
    data,
  });
}
```

```vue [vue3]
<script setup>
import { testList } from "@/api/api.js";

testList({ pagesize: 10 }).then((res) => {
  console.log("==== testList :", res);
});
</script>
```

:::

> config 完整配置项

```javascript
import manifest from "@/manifest.json";

const space_id = "mp-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"; // 更换成你的uniCloud服务空间space_id

const base_url = `https://fc-${space_id}.next.bspapp.com`; // 云函数URL化基础路径
const base_cdn = `https://${space_id}.cdn.bspapp.com`; // 云存储下载域名

const config = {
  name: manifest.name,
  appid: manifest.appid,
  description: manifest.description,
  version: manifest.versionName,
  base_url: base_url,
  base_cdn: base_cdn,
  api_url: `${base_url}/api`, // 后缀统一拼接上 /api
  logo_url: "/static/logo.png", // logo图标路径
};

export default config;
```

## 疑难解答

> 可新建 [`Issue`](https://gitee.com/Sonve/sv-app-docs/issues/new) / [`悬赏`](https://gitee.com/Sonve/sv-app-docs/reward_issues/new) 来 [`发起提问`](https://gitee.com/Sonve/sv-app-docs/issues)

## 写在最后

若对插件有任何疑问或者优化建议，欢迎在 [插件评论区](https://ext.dcloud.net.cn/plugin?id=17777#rating) 留言，在插件市场中的私信消息本人可能不经常留意，导致没能及时回复，
可以加入本人的插件问答 QQ 交流群: 852637893，欢迎 [进群交流](https://qm.qq.com/cgi-bin/qm/qr?k=HD9IXnUruOa5pplF1jAeQsLb9BNnP_DE&jump_from=webapi&authKey=tk61Q5la3EAprdYcUBD7v0PBly795OTcT4UT36XxqcG7pmhGRpE+yFlt75vQBWeY)。

<img width="200" src="https://mp-74bfcbac-6ba6-4f39-8513-8831390ff75a.cdn.bspapp.com/static/qqqun.jpg" alt="交流群:852637893"/>

# 会员体系 [`sv-id-vip`](https://ext.dcloud.net.cn/plugin?id=17048)

用于 `sv-client` 客户端框架的会员体系插件。

## 主要功能

1. 订阅 vip 会员功能（普通支付，cdkey 激活码）
2. vip 套餐表增删改查
3. vip 权益表增删改查
4. 订阅记录表增查
5. cdkey 表增删改查，cdkey 激活订阅
6. vip 用户状态实时事件驱动手动校验
7. vip 用户状态定时任务自动校验
8. 内置 vip 功能页面

> 本插件没有示例项目，详见 `sv-client` 中相关页面示例。

## 安装与部署

1. [插件市场](https://ext.dcloud.net.cn/plugin?id=17048) 中点击 `下载插件并导入HBuildeX`。
2. 部署 云对象/数据库 至您的 uniCloud 云服务空间，如果您还不会部署，可移步至 [服务端-云服务空间初始化](../../frame/sv-service/sv-service.md#云服务空间初始化)。

## 前言

本插件仅为 `sv-client` 客户端框架定制化模组插件，不可脱离 `sv-client` 环境使用。

## 插件兼容性

> `✔️ 实测可行` `❌ 未兼容` `➖ 未实测`

| 阿里云 | 腾讯云 | 支付宝云 | Vue2 | Vue3 | H5  | App | 微信小程序 |
| :----: | :----: | :------: | :--: | :--: | :-: | :-: | :--------: |
|   ✔️   |   ➖   |    ❌    |  ❌  |  ✔️  | ✔️  | ✔️  |     ✔️     |

## api 接口文档

> [文档链接](https://console-docs.apipost.cn/preview/c3268618df9a75e0/6acb1e9aa56ea56c?target_id=d4b30806-ef67-4c1f-a126-dca17094c7c6)

## 注意事项

1. 本插件依赖 `sv-client` 客户端框架环境运行。

2. 本插件没有专门的示例工程，请在 `sv-client` 中相关页面体验。

## 疑难解答

> 可新建 [`Issue`](https://gitee.com/Sonve/sv-app-docs/issues/new) / [`悬赏`](https://gitee.com/Sonve/sv-app-docs/reward_issues/new) 来 [`发起提问`](https://gitee.com/Sonve/sv-app-docs/issues)

## 写在最后

若对插件有任何疑问或者优化建议，欢迎在 [插件评论区](https://ext.dcloud.net.cn/plugin?id=17048#rating) 留言，在插件市场中的私信消息本人可能不经常留意，导致没能及时回复，
可以加入本人的插件问答 QQ 交流群: 852637893，欢迎 [进群交流](https://qm.qq.com/cgi-bin/qm/qr?k=HD9IXnUruOa5pplF1jAeQsLb9BNnP_DE&jump_from=webapi&authKey=tk61Q5la3EAprdYcUBD7v0PBly795OTcT4UT36XxqcG7pmhGRpE+yFlt75vQBWeY)。

<img width="200" src="https://mp-74bfcbac-6ba6-4f39-8513-8831390ff75a.cdn.bspapp.com/static/qqqun.jpg" alt="交流群:852637893"/>

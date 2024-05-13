# 用户体系 [`sv-id-pages`](https://ext.dcloud.net.cn/plugin?id=15141)

基于 [`uni-id-pages`](https://ext.dcloud.net.cn/plugin?name=uni-id-pages) 魔改的用户体系，新的易读易修改的界面样式，并稍作精简，更适合二次开发。

## 主要功能

> ✅ 已有 ☑️ 待定 ❎ 没有

### 登录注册

- ✅ 客户端账号密码登录（用户名/手机号）
- ✅ 客户端账号注册（图形验证码）
- ✅ 忘记密码找回（需要绑定手机）
- ✅ 客户端手机号验证码登录
- ✅ 客户端手机一键登录（仅 App 端）
- ✅ 第三方登录 - 微信小程序
- ✅ 第三方登录 - App 端微信授权登录
- ☑️ 第三方登录 - QQ 小程序
- ☑️ 第三方登录 - App 端 QQ 授权登录
- ✅ 管理端账号密码登录（仅限管理员）
- ❎ 邮箱登录/注册

### 个人中心

- ✅ 个人中心页面
- ✅ 个人信息修改
- ✅ 账号与安全 - 绑定手机
- ✅ 账号与安全 - 绑定微信
- ✅ 账号与安全 - 修改密码
- ✅ 账号与安全 - 解绑注销
- ❎ 实名认证

### 其他页面

- ✅ 用户服务协议
- ✅ 隐私政策条款

> 强烈建议优先前往 [`插件市场`](https://ext.dcloud.net.cn/plugin?id=15141) 导入示例项目参考一下。
> 示例工程中插件可能不是最新版本，运行之前建议先将示例工程中插件更新至最新版本哦。

## 安装与部署

1. [插件市场](https://ext.dcloud.net.cn/plugin?id=15141) 中点击 `下载插件并导入HBuildeX`。
2. 部署 云对象/数据库 至您的 uniCloud 云服务空间，如果您还不会部署，可移步至 [服务端-云服务空间初始化](../../frame/sv-service/sv-service.md#云服务空间初始化)。

## 前言

1. 关于 uniCloud 云服务空间的部署相关步骤与问题，已在 [服务端-云服务空间初始化](../../frame/sv-service/sv-service.md#云服务空间初始化) 中详细介绍，此处不再赘述。
2. 本插件基于 [`uni-id-pages`](https://ext.dcloud.net.cn/plugin?name=uni-id-pages) 二次开发，您可能需要对 [`uni-id`](https://doc.dcloud.net.cn/uniCloud/uni-id/app.html) 用户体系有一定的了解。

## 插件兼容性

> `✔️ 实测可行` `❌ 未兼容` `➖ 未实测`

| 阿里云 | 腾讯云 | 支付宝云 | Vue2 | Vue3 | H5  | App | 微信小程序 | 支付宝小程序 | QQ 小程序 |
| :----: | :----: | :------: | :--: | :--: | :-: | :-: | :--------: | :----------: | :-------: |
|   ✔️   |   ➖   |    ➖    |  ✔️  |  ✔️  | ✔️  | ✔️  |     ✔️     |      ➖      |    ➖     |

## 配置与使用

- [`uni-config-center 云端配置`](https://doc.dcloud.net.cn/uniCloud/uni-id/summary.html#config)

  > 一般来说，你只需要在此处配置填入您各项产品的 appid 和 appsecret 即可，更新配置后记得上传云端。

- 插件配置

  > 可参照 `@/uni_modules/sv-id-pages/config.js` 配置文件中的注释进行配置。

- 监听登录成功

  ```javascript
  uni.$on("uni-id-pages-login-success", (e) => {
    // e 中带有token、当前登录用户uid等信息
    console.log("==== 登录成功 ====", e);
  });
  ```

- 监听退出登录

  ```javascript
  uni.$on("uni-id-pages-logout", () => {
    console.log("==== 退出登录 ====");
  });
  ```

- 获取当前登录用户简要信息

  ```javascript
  import { store } from "@/uni_modules/sv-id-pages/common/store";
  // userInfo 是当前登录用户简要信息，hasLogin 是布尔类型表示当前是否登录成功
  const { userInfo, hasLogin } = store; // 更建议使用此种方式

  // 或者直接从 localStorage 中获取
  const userInfo = uni.getStorageSync("uni-id-pages-userInfo");
  ```

- 手动调用退出登录

  ```javascript
  import { mutations } from "@/uni_modules/sv-id-pages/common/store";

  function customLogout() {
    mutations.logout();
  }
  ```

- 获取当前用户角色/权限

  > 使用 `uniCloud.getCurrentUserInfo()` 获取当前登录用户角色权限信息，[查看更多](https://doc.dcloud.net.cn/uniCloud/client-sdk.html#client-getcurrentuserinfo)

## api 接口文档

> [文档链接](https://console-docs.apipost.cn/preview/c3268618df9a75e0/6acb1e9aa56ea56c?target_id=d4b30806-ef67-4c1f-a126-dca17094c7c6)

## 疑难解答

> 可新建 [`Issue`](https://gitee.com/Sonve/sv-app-docs/issues/new) / [`悬赏`](https://gitee.com/Sonve/sv-app-docs/reward_issues/new) 来 [`发起提问`](https://gitee.com/Sonve/sv-app-docs/issues)

1. 云对象不会部署/部署不成功怎么办？

   - 移步至 [服务端-云服务空间初始化](../../frame/sv-service/sv-service.md#云服务空间初始化)，或者加群讨论吧。

## 写在最后

若对插件有任何疑问或者优化建议，欢迎在 [插件评论区](https://ext.dcloud.net.cn/plugin?id=15141#rating) 留言，在插件市场中的私信消息本人可能不经常留意，导致没能及时回复，
可以加入本人的插件问答 QQ 交流群: 852637893，欢迎 [进群交流](https://qm.qq.com/cgi-bin/qm/qr?k=HD9IXnUruOa5pplF1jAeQsLb9BNnP_DE&jump_from=webapi&authKey=tk61Q5la3EAprdYcUBD7v0PBly795OTcT4UT36XxqcG7pmhGRpE+yFlt75vQBWeY)。

<img width="200" src="https://mp-74bfcbac-6ba6-4f39-8513-8831390ff75a.cdn.bspapp.com/static/qqqun.jpg" alt="交流群:852637893"/>

# EXCEL&JSON 互转 [`sv-excel-json-each`](https://ext.dcloud.net.cn/plugin?id=16401)

EXCEL&JSON 互相转换，源于 [EXCEL 转 JSON 函数](https://ext.dcloud.net.cn/plugin?id=6626) 插件，使用文档请移步至原插件。

## 前言

本插件开发之初仅考虑自用，请尊重并支持原 [EXCEL 转 JSON 函数](https://ext.dcloud.net.cn/plugin?id=6626) 插件。

## 改动内容

> 强烈建议优先了解原 [EXCEL 转 JSON 函数](https://ext.dcloud.net.cn/plugin?id=6626) 插件。

1. 将原插件中的 getExcelToJson 与 getJsonToExcel 两个云函数改为 sv-excel-json-each 云对象，并放至插件内部，解决每次导入插件都需要从示例工程中复制云对象移至项目中的问题，现一键导入即可。

2. 修改 jssdk/parseExcel.js 文件中 downloadXLSX 方法代码，修复原插件可能会报错 Failed to execute 'atob' on 'Window'问题。

3. 原插件中 parseExcel.js 文件中 downloadXLSX 方法已被我移除，已用其他可兼容 H5、安卓 App、微信小程序三端的方式代替。

4. 较大规模改动 parseExcel.js 文件，重要改动如下：

   - 由于 uni.chooseFile 只支持 H5 端，现添加微信小程序的 wx.chooseMessageFile 和 App 端 Native.js(目前只支持安卓)调用文件选择面板，因此现已兼容 H5、安卓 App、微信小程序三端。

   - 修改当 type 为 base64 模式时，不提供自动下载功能，仅当 type 为 file 模式时开启 autoDownload 才提供自动下载功能

## 安装与部署

1. [插件市场](https://ext.dcloud.net.cn/plugin?id=16401) 中点击 `下载插件并导入HBuildeX`。
2. 部署 云对象/数据库 至您的 uniCloud 云服务空间，如果您还不会部署，可移步至 [服务端-云服务空间初始化](../../frame/sv-service/sv-service.md#云服务空间初始化)。

## 插件兼容性

> `✔️ 实测可行` `❌ 未兼容` `➖ 未实测`

| 阿里云 | 腾讯云 | 支付宝云 | Vue2 | Vue3 | H5  | App | 微信小程序 |
| :----: | :----: | :------: | :--: | :--: | :-: | :-: | :--------: |
|   ✔️   |   ➖   |    ❌    |  ✔️  |  ✔️  | ✔️  | ✔️  |     ✔️     |

纯 js 插件

## 使用示例

```javascript
import { importToJson, exportToExcel } from "@/uni_modules/sv-excel-json-each/js_sdk/parseExcel.js";
import { testList, testAddList } from "@/api/test"; // 测试用例列表查询与批量导入接口

const testMapping = {
  test_id: "测试用例ID",
  test_name: "测试用例名称",
};

/**
 * 测试用例导出
 */
async function testExport(params) {
  // 调用接口获取列表数据
  const dataRes = await testList(params);
  const handleData = dataRes.data?.map((item) => {
    return {
      test_id: {
        v: item.test_id,
        t: "s",
        s: {
          alignment: {
            horizontal: "left", // 数字列会默认右对齐
          },
        },
      },
      test_name: {
        v: item.test_name,
        t: "s",
        s: {
          alignment: {
            horizontal: "left",
          },
          font: {
            color: {
              rgb: "FF0000", // 文字标红
            },
          },
        },
      },
    };
  });
  exportToExcel({
    params: {
      data: handleData,
      title: "logs",
      mapping: testMapping,
      type: "file",
      // merges: [{ start: [0, 1], end: [0, 4] }]
    },
    autoDownload: true,
  }).then((res) => {
    // console.log('onExport ===>', res)
  });
}

/**
 * 测试用例导入
 */
async function testImport(cover, callback) {
  let sheetList = [{ index: 0 }, { index: 1 }];
  const toJsonRes = await importToJson(sheetList);
  const dataRes = toJsonRes.data.data || [];
  // 转换为接口原数据格式
  const handleData = dataRes.map((item) => {
    return {
      test_id: item["测试用例ID"] + "", // 导入时转换为字符串类型
      test_name: item["测试用例名称"] + "",
    };
  });
  console.table(toJsonRes.data);
  console.table(handleData);
  // 调用批量导入接口
  const importRes = await testAddList({
    data: handleData,
    cover,
  });
  if (callback) callback(importRes);
}

/**
 * 测试用例模板下载
 */
function testTemplate() {
  exportToExcel({
    params: {
      data: [
        {
          test_id: "测试id",
          test_name: "测试名称",
        },
      ], // 若空数据数组，需要有个空对象
      title: "test",
      mapping: testMapping,
      type: "file",
    },
    autoDownload: true,
  }).then((res) => {
    // console.log('onExport ===>', res)
  });
}
```

## 注意事项

1. 对单元格操作时，写法格式按照上述示例中严格把控。
2. 更多请参照原 [EXCEL 转 JSON 函数](https://ext.dcloud.net.cn/plugin?id=6626) 插件文档。

## 写在最后

本插件开发之初仅考虑自用，请尊重并支持原 [EXCEL 转 JSON 函数](https://ext.dcloud.net.cn/plugin?id=6626) 插件。

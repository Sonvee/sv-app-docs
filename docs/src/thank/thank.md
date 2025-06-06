# 🎉鸣谢

感谢各位捐赠者对本项目的支持，以下排名不分先后，按时间顺序排列。

:::tip
捐赠后,请发送邮件到 1051399604@qq.com 或者通过 Github、QQ/微信群 等社交平台告知要展示的捐赠者名称、留言、链接 (链接可以是您的博客、github、个人网站、公司产品等)
:::

## 捐赠榜单

<table v-if="data && data.donor">
  <thead>
    <tr>
      <th style="min-width: 120px">捐赠者</th>
      <th style="min-width: 100px">金额</th>
      <th style="min-width: 200px">留言</th>
      <th style="min-width: 180px;">链接</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(donor, index) in data.donor">
      <td>{{ donor.name }}</td>
      <td>{{ donor.money }}</td>
      <td>{{ donor.message }}</td>
      <td style="word-wrap:break-word; word-break: break-all;">
        <a :href="donor.link" target="_blank" rel="noopener noreferrer">{{ donor.link }}</a>
      </td>
    </tr>
  </tbody>
</table>

:beers::beers::beers: `再次感谢各位捐赠者的支持，也欢迎大家提出自己的意见和建议` :beers::beers::beers:

<script setup>
import { useSponsor } from '../../.vitepress/theme/data/sponsor'
const { data } = useSponsor()
</script>

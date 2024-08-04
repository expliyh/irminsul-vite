---
layout: doc
title: 原神主线任务
description: 原神主线任务导航页面
footer: true
editLink: true
---

<script setup>
import LinkCard from '../../.vitepress/components/LinkCard.vue';

const mainlineLinks= [
  {
    title: '第四章',
    url: './chapter-4/',
    image: 'https://vip.123pan.cn/1814176066/8099791',
    description: '枫丹'
  },
  {
    title: '第三章',
    url: './chapter-3/',
    image: 'https://vip.123pan.cn/1814176066/DirectLink/%E4%B8%96%E7%95%8C%E6%A0%91%E5%B0%81%E9%9D%A2/c3a6-cover.webp',
    description: '须弥'
  },
]
</script>

# 原神主线任务剧情

<div class="container">
<LinkCard
  class="link-card"
  v-for="link in mainlineLinks"
  :key="link.title"
  :title="link.title"
  :url="link.url"
  :image="link.image"
  :description="link.description"
/>
</div>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap:20px;
  justify-content: start;
}

.link-card {
  height: 6rem;
}

@media (min-width: 600px) { /* 调整这个宽度以适应你的设计需求 */
  .container {
    justify-content: space-between;
  }
  .link-card {
    flex: 0 1 calc(50% - 40px); /* 两列布局，减去间隙 */
  }
}

@media (max-width: 599px) { /* 与上面的阈值匹配 */
  .link-card {
    flex: 0 1 100%; /* 一列布局 */
  }
}
</style>



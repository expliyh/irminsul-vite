---
layout: doc
title: 原神角色传说任务
description: 原神角色传说任务导航页面
footer: true
editLink: true
---

<script setup>
import StoryCard from '../../.vitepress/components/StoryCard.vue';

const storyLinks= [
  {
    title: '纳西妲',
    url: './nahida/',
    logo: 'https://vip.123pan.cn/1814176066/DirectLink/%E7%BA%B3%E8%A5%BF%E5%A6%B2_Quan.jpg',
    description: '深居净善宫的笼中之鸟，只能在梦中将世界尽收眼底。'
  },
  {
    title: '那维莱特',
    url: './neuvillette/',
    logo: 'https://vip.123pan.cn/1814176066/4376683',
    description: '枫丹的最高审判官，因其无懈可击的「秉公无私」而闻名。'
  },
  {
    title: '芙宁娜',
    url: './furina/',
    logo: 'https://vip.123pan.cn/1814176066/DirectLink/%E8%8A%99%E5%AE%81%E5%A8%9C_QuAn.jpg',
    description: '审判舞台上的绝对焦点，直至谢幕的掌声响起。'
  },
]
</script>

# 原神角色传说任务

<div class="container">
<StoryCard
  class="story-card"
  v-for="link in storyLinks"
  :key="link.title"
  :link="link"
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
@media (min-width: 600px) { /* 调整这个宽度以适应你的设计需求 */
  .container {
    justify-content: space-between;
  }
  .story-card {
    flex: 0 1 calc(50% - 40px); /* 两列布局，减去间隙 */
  }
}

@media (max-width: 599px) { /* 与上面的阈值匹配 */
  .story-card {
    flex: 0 1 100%; /* 一列布局 */
  }
}
</style>

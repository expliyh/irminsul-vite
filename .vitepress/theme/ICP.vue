<template>
  <Layout>
    <template #layout-bottom>
      <div class="icp-info" v-if="showICP">
        <a href="http://beian.miit.gov.cn/" target="_blank">鲁ICP备2023044905号</a>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import DefaultTheme from 'vitepress/theme'

const {Layout} = DefaultTheme

const showICP = ref(false);

onMounted(() => {
  const host = window.location.hostname;

  const domainsToShowICP = ['www.irminsul.top', 'irminsul.top'];

  showICP.value = domainsToShowICP.includes(host);
});
</script>


<style>
.icp-info {
  text-align: center;
  margin-top: 50px;
}
</style>
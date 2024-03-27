<template>
  <div class="link-card">
    <a :href="props.url" class="card-link">
      <div class="card-content" :style="`background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${props.image})`">
        <!--        <img :src="link.logo" alt="logo" class="card-logo"/>-->
        <div class="card-info">
          <h3 class="card-title">{{ props.title }}</h3>
<!--          <p class="card-description">{{ props.description }}</p>-->
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  url: {required: true},
  image: {required: true},
  title: { required: true},
  description: {required: true},
});

const backgroundStyle = `backgroundImage: url(${props.image})`
</script>

<style scoped>
.link-card {
  border: 1px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 10px;
  transition: box-shadow 0.3s;
  width: 100%;
  max-width: 500px; /* Adjust the width as per requirement */
}



.link-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-link {
  display: flex;
  height: 100%;
  width: 100%;
  text-decoration: none;
}

.card-content {
  display: flex;
  align-items: center;
  width: 100%;
  background-size: cover;
  /* 将背景图片居中显示 */
  background-position: center;
  background-blend-mode: lighten;
}


.card-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  color: white;
  flex-grow: 1;
}

.card-title {
  font-size: 1.2em;
  color: #333;
  margin: 10px;
  //color: white;
  padding: 0;
}

.card-description {
  font-size: 0.8em;
  color: #606060;
  margin: 0;
}
</style>

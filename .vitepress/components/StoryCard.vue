<template>
  <div class="link-card">
    <a :href="link.url" class="card-link">
      <div class="card-content">
        <img :src="link.logo" alt="logo" class="card-logo"/>
        <div class="card-info">
          <h3 class="card-title">{{ link.title }}</h3>
          <p class="card-description">{{ link.description }}</p>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'StoryCard',
  props: {
    link: {
      type: Object,
      required: true
    }
  }
}
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
  text-decoration: none;
  height: 100%;
  width: 100%;
}

.card-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.card-logo {
  width: 80px; /* Adjust the size as per requirement */
  height: 80px;
  border-radius: 50%;
  margin: 10px;
  object-fit: cover;
}

.card-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  flex-grow: 1;
}

.card-title {
  font-size: 1.2em;
  color: #333;
  margin: 0;
  padding: 0;
}

.card-description {
  font-size: 0.9em;
  color: #666;
  margin: 0;
}
</style>

<template>
  <div class="content">
    <h1>Hello Rspack Remote</h1>
    <p>This is a basic Hello World component from Rspack Remote</p>
    <HorizontalVueCli />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid blue;
  margin: 20px;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>

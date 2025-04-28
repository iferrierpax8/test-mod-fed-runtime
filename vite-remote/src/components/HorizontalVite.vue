<script setup lang="ts">
defineProps<{
  msg?: string
}>()
</script>

<template>
  <div class="horizontal-vite" style="border: 1px solid white; margin: 20px;">
    <h2>{{ msg || 'Hello from Horizontal Vite' }}</h2>
    <p>This is a basic component from Vite Remote using Composition API</p>
  </div>
</template>

<style scoped>
.horizontal-vite {
  padding: 20px;
  border-radius: 4px;
}

h2 {
  color: #42b883;
  font-size: 1.6rem;
}

p {
  font-size: 1.1rem;
  color: #2c3e50;
}
</style>

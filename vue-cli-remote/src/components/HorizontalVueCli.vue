<template>
  <div class="horizontal-vue-cli-mfe" style="border: 1px solid orange; margin: 20px;">
    <h1>{{ message }}</h1>
    <p>This is a basic Horizontal Vue CLI MFE component from Vue CLI Remote</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Horizontal Vue CLI MFE!')
</script>

<style scoped>
.horizontal-vue-cli-mfe {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

p {
  color: red;
}

h1 {
  margin-bottom: 20px;
}
</style>


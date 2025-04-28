<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const HorizontalVueCli = defineAsyncComponent(() => import('vue_cli_remote/HorizontalVueCli'))

</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Hello Vite Remote" />
      <HorizontalVueCli />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  border: 1px solid green;
  margin: 20px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

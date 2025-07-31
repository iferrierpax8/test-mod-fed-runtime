<template>
  <div class="hello">
    <h1>Hello Host Horizontal Rspack</h1>
    <p>This is a basic Horizontal component from Rspack Host</p>
    <HorizontalVueCli />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

// const HorizontalVueCli = defineAsyncComponent(() => import('vue_cli_remote/HorizontalVueCli').then(m => {
//   console.log('m', m.default)
//   return m.default
// }))
const HorizontalVueCli = defineAsyncComponent(() => import('vue_cli_remote/HorizontalVueCli'))
console.log('HorizontalVueCli rspack', HorizontalVueCli)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

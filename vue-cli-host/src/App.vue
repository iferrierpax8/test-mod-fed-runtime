<template>
  <div style="display: flex; flex-direction: row; gap: 20px;">
    <HelloWorld />
    <Horizontal />
    <div id="rspack-remote"></div>
    <div id="vite-remote"></div>
    <div id="vue-cli-remote"></div>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { mfes } from './main'
import { defineAsyncComponent } from 'vue'

const Horizontal = defineAsyncComponent(() => mfes.vue_cli_remote_horizontal)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 20px;
  border: 1px solid red;
}
</style>

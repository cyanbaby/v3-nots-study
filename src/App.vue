<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LeftNav from '@/layout/LeftNav.vue'
</script>


<template>
  <div class="w-full h-full flex">
    <LeftNav />
    <RouterView class="flex-1" />
  </div>
</template>


<style>
html,body {
  height: 100%;
}
/* TODO Cyan: tailwindcss & reset.css & normalize.css  */
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  max-width: 100%;
}
</style>
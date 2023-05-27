<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <HeaderVue />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

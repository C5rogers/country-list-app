<script setup>
import { RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue';
import Footer from './components/Footer.vue'
</script>

<template>
  <HeaderVue />
    <RouterView />
  <Footer />
</template>

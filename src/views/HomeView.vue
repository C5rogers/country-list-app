<script setup>
import SearchEngine from '../components/SearchEngine.vue';
import useCountry from '../composable/useCounrty'
import { onMounted } from 'vue';


const {countrys,getAllCoutnrys}=useCountry()
onMounted(()=>{
  getAllCoutnrys()
})

</script>

<template>
  <main class="w-full min-h-screen flex px-10 py-10">
    <SearchEngine />
  </main>
</template>

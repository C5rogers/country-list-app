<script setup>
import { useQuery } from '@vue/apollo-composable'
import GridCard from '../components/GridCard.vue';
import countryQuery from '../querys/country.gql'

const handleSubmition=()=>{

}
const {result}=useQuery(countryQuery)
</script>

<template>
  <main class="w-full min-h-screen flex flex-col px-10 py-10">
    <div class="w-full flex items-center h-fit">
        <form @submit.prevent="handleSubmition">
            <div class="relative w-64">
                <input type="text" name="search" placeholder="Search Country..." class="w-full border  outline-none pl-10 pr-2 py-2 shadow-sm rounded-md">
                <i class="fa-solid fa-search absolute top-3 text-gray-500 left-2"></i>
            </div>
        </form>
    </div>
    <div class="w-full grid grid-cols-4 gap-5 mt-10">
      <div v-for="(country,index) in result && result.countries" :key="index" class="w-full border flex flex-col gap-3">
        <!-- {{ country }} -->
        <router-link :to="{name:'Country',params:{code:country.code}}">
          <GridCard :country="country"/>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useRoute ,useRouter} from 'vue-router';
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const route=useRoute()
const router=useRouter()
const code=route.params.code


const {result}=useQuery(gql`
query MyQuery {
  country(code: "ET") {
    code
    capital
    emoji
    currency
    name
    phone
    awsRegion
    continent {
      name
    }
    states {
      name
    }
  }
}
`)

const goBack=()=>{
router.push(-1)
}


</script>

<template>
    <main class="w-full flex items-center px-20  justify-center min-h-screen bg-gray-900 relative">
        <div class="absolute left-10 top-10 text-white">
            <button class="flex gap-2 items-center bg-gray-500 px-4 py-1 rounded-full" @click="goBack"><i class="fa-solid fa-arrow-left"></i><span>Back</span></button>
        </div>
        <div class="text-white grid grid-cols-3 gap-10" v-if="result && result.country">
            <!-- the image -->
            <div class="flex justify-center items-center col-span-1 text-6xl cursor-pointer">
                {{ result.country.emoji }}
            </div>
            <!-- the another side bar -->
            <div class="col-span-2  bg-gray-800 py-10 px-5 rounded-xl flex flex-col justify-center gap-5">
                <!-- the country name -->
                <div class="text-4xl font-bold border-b pb-5 border-gray-500">
                    {{ result.country.name }}
                </div>
                <!-- the more infos -->
                <div class=" w-full grid grid-cols-2 items-center px-10 ">
                    <!-- the left one -->
                    <div>
                        <ul class="flex flex-col gap-2 justify-center">
                            <li class="flex items-center text-xs text-gray-200 font-light gap-2"><span class="font-bold text-lg">Capital City: </span>{{ result.country.capital }}</li>
                            <li class="flex items-center text-xs text-gray-200 font-light gap-2"><span class="font-bold text-lg">Country Code: </span>{{ result.country.code }}</li>
                            <li class="flex items-center text-xs text-gray-200 font-light gap-2"><span class="font-bold text-lg">Currency: </span>{{ result.country.currency }}</li>
                        </ul>
                    </div>
                    <!-- the right one -->
                    <div>
                        <ul class="flex flex-col gap-2 justify-center">
                            <li class="flex items-center text-xs text-gray-200 font-light gap-2"><span class="font-bold text-lg">Phone Code: </span>+{{ result.country.phone }}...</li>
                            <li class="flex items-center text-xs text-gray-200 font-light gap-2"><span class="font-bold text-lg">Country Continent: </span>{{ result.country.continent.name }}</li>
                            <li class="flex flex-wrap"><span class="font-bold text-lg">State: </span><span v-for="(state, index) in result.country.states" :key="index" class="rounded-full bg-gray-600 flex items-center w-fit px-1 py-1 m-1 text-xs cursor-pointer">{{ state.name }}</span></li>
                        </ul>
                    </div>
                </div>
                <div class="flex items-center border-t border-gray-500 pt-5 text-sm font-light">
                    <span class="flex items-center text-lg font-bold mr-3">Location: </span>{{ result.country.awsRegion }}
                </div>
            </div>
        </div>
    </main>
</template>
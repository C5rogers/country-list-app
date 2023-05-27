<script setup>
import { useRoute } from 'vue-router';
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const route=useRoute()
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
  }
}
`)


</script>

<template>
    <main class="w-full min-h-screen bg-gray-900">
        <div class="text-white" v-if="result && result.country">
            {{ result.country }}
            <!-- the image -->
            <div>
                {{ result.country.emoji }}
            </div>
            <!-- the another side bar -->
            <div>
                <!-- the country name -->
                <div>
                    {{ result.country.name }}
                </div>
                <!-- the more infos -->
                <div>
                    <!-- the left one -->
                    <div>
                        <ul>
                            <li><span>Capital City: </span>{{ result.country.capital }}</li>
                            <li><span>Country Code: </span>{{ result.country.code }}</li>
                            <li><span>Currency: </span>{{ result.country.currency }}</li>
                        </ul>
                    </div>
                    <!-- the right one -->
                    <div>
                        <ul>
                            <li><span>Phone Code: </span>+{{ result.country.phone }}...</li>
                            <li><span>Country Continent: </span>{{ result.country.continent.name }}</li>
                            <li><span>Currency: </span>{{ result.country.currency }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
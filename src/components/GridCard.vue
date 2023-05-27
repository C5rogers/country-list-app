<script setup>


const props=defineProps({
    country:Object
})

</script>

<template>
    <!-- the image -->
    <div class="text-6xl flex items-center justify-center mt-3">
        {{ country.emoji }}
    </div>
    <!-- the other contents -->
    <div class="m-5 mt-7 flex flex-col">
        <!-- the name -->
        <div class="font-bold text-1xl ">{{ country.name }}</div>
        <div class="flex mt-3 flex-col">
            <div class="text-xs font-light flex "><span class="font-bold ">Phone Number:</span>+{{ country.phone }}</div>
            <div class="text-xs font-light flex "><span class="font-bold ">Capital City:</span>{{ country.capital }}</div>
        </div>

    </div>
</template>
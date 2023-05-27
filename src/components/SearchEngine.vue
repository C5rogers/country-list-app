<script setup>


const handleSubmition=()=>{

}
</script>

<template>
    
    <div class="w-full flex items-center h-fit">
        <form @submit.prevent="handleSubmition">
            <div class="relative w-64">
                <input type="text" name="search" placeholder="Search Country..." class="w-full border  outline-none pl-10 pr-2 py-2 shadow-sm rounded-md">
                <i class="fa-solid fa-search absolute top-3 text-gray-500 left-2"></i>
            </div>
        </form>
    </div>
    
</template>
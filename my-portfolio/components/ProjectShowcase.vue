<template>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
            :src="project.image"
            :alt="project.name"
            class="w-full h-[200px] object-cover object-top"
        />
        <div class="p-6">
            <h3 class="text-primary text-xl mb-2">
                {{ project.name }}
            </h3>
            <p class="text-gray-700 mb-4">
                {{ project.description }}
            </p>
            
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    project: {
        name: string,
        description: string,
        image: string
    }
}>()
</script>

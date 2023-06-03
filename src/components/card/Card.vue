<template>
    <div class="max-w-xl flex bg-white rounded-xl items-center overflow-hidden shadow-lg">
        <img :src="imageSrc" :alt="imageAlt" class="w-1/3 ml-5 py-3 px-3">
        <div class="px-2 py-4">
            <div class="font-bold text-xl mb-2">{{ title }}</div>
            <p class="text-gray-700 font-medium text-sm">{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: String,
            required: true,
        },
        imageAlt: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
</style>

<template>
    <div class="max-w-xl flex bg-teal-400/10 rounded-xl items-center overflow-hidden shadow-lg">
        <img :src="imageSrc" :alt="imageAlt" class="w-1/3 ml-5 py-3 px-3">
        <div class="px-2 py-4">
            <div class="font-bold text-slate-300 text-xl mb-2">{{ title }}</div>
            <p class="text-slate-400 font-medium text-sm">{{ description }}</p>
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

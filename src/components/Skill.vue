<template lang="">
    <section id="skill" class="bg-gray-200 ">
      <div class="container py-10 pb-16">
        <h2 class="text-center text-4xl font-bold text-gray-800">My Skill</h2>
        <div class="mt-10">
          <div class="hover grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center mx-auto gap-4">
      <Card data-aos="fade-up"
     data-aos-duration="1000"
        v-for="item in cardData"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :imageSrc="item.imageSrc"
        :imageAlt="item.imageAlt"
      />
    </div>
      </div>
      </div>
    </section>
</template>
<script>
import Card from "@/components/card/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      cardData: [
        {
          id: 1,
          title: "Laravel",
          description: "Sejak January",
          imageSrc: "../src/assets/laravel.svg",
          imageAlt: "Image 1",
        },
        {
          id: 2,
          title: "Livewire",
          description: "Sejak Maret",
          imageSrc: "../src/assets/Livewire.svg",
          imageAlt: "Image 2",
        },
        {
          id: 3,
          title: "Bootstrap",
          description: "Sejak 2022",
          imageSrc: "../src/assets/bootstrap.svg",
          imageAlt: "Image 2",
        },
        {
          id: 4,
          title: "Tailwind CSS",
          description: "Sejak Januari",
          imageSrc: "../src/assets/tailwind.svg",
          imageAlt: "Image 2",
        },
        {
          id: 5,
          title: "Alpine JS",
          description: "Sejak Februari",
          imageSrc: "../src/assets/alpinejs.svg",
          imageAlt: "Image 2",
        },
        {
          id: 6,
          title: "Vue JS",
          description: "Sejak April",
          imageSrc: "../src/assets/vuejs.svg",
          imageAlt: "Image 2",
        },
        // Add more card data as needed
      ],
    };
  },
};
</script>

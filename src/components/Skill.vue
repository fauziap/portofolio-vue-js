<template lang="">
  <section id="skill" class="">
    <div class=" py-10 container pb-16">
      <h2 class="text-center text-slate-200 text-4xl font-bold">
        Skill & Certificate
      </h2>
      <div class="mt-10 ">
        <div class="grid container lg:mx-16 items-center lg:grid-cols-2 gap-5">
          <div
            class="hover grid md:grid-cols-2 grid-cols-1 justify-center mx-auto gap-4"
          >
            <Card
              data-aos="fade-up"
              data-aos-duration="1000"
              v-for="item in cardData"
              :key="item.id"
              :title="item.title"
              :description="item.description"
              :imageSrc="item.imageSrc"
              :imageAlt="item.imageAlt"
            />
          </div>
          <div class=" justify-center gap-4">
            <img data-aos="fade-up"
            data-aos-duration="1000" src="../assets/sertifikatLaravelBWA.png"
                        alt="Profile Image" class="rounded-lg shadow-teal-200 md:w-3/4 ">
          </div>

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
          description: "Since 2023",
          imageSrc: "../assets/laravel.svg",
          imageAlt: "laravel",
        },
        {
          id: 2,
          title: "Livewire",
          description: "Since 2023",
          imageSrc: "../assets/Livewire.svg",
          imageAlt: "livewire",
        },
        {
          id: 3,
          title: "Bootstrap",
          description: "Sejak 2022",
          imageSrc: "../assets/bootstrap.svg",
          imageAlt: "bootstrap",
        },
        {
          id: 4,
          title: "Tailwind CSS",
          description: "Since 2023",
          imageSrc: "../assets/tailwind.svg",
          imageAlt: "tailwind css",
        },
        {
          id: 5,
          title: "Alpine JS",
          description: "Since 2023",
          imageSrc: "../assets/alpinejs.svg",
          imageAlt: "alpine js",
        },
        {
          id: 6,
          title: "Wordpress",
          description: "Sejak 2022",
          imageSrc: "../assets/wordpress.svg",
          imageAlt: "wordpress",
        },

        // Add more card data as needed
      ],
    };
  },
};
</script>

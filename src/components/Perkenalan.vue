<template class="">
  <section
    id="home"
    class="h-screen container overflow-hidden flex items-center"
  >
    <div class=" mx-auto text-center">
      <div class="flex flex-col items-center">
        <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style="background:radial-gradient(
              600px circle at 0px 0px,
              rgba(29, 78, 216, 0.15),
              transparent 80%
            )"></div>
        <div data-aos="fade-down" data-aos-duration="1000" class="">
          <h2 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl md:text-7xl">Ahmad Fauzi</h2>
          <h4 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Software Developer
          </h4>
          <p class="mt-4 max-w-xs md:max-w-sm text-center leading-normal">Creating digital systems to ease other people's daily routines is my favorite activity.</p>
          <div class="mt-10 md:flex md:gap-5 justify-center">
            <a href="#contact">
              <Button
                varian="primary"
                class="md:w-auto w-full md:mt-0 mt-3 rounded-full hover:bg-teal-900/20 bg-teal-400/10 px-3 py-1 text-teal-300"
              >
                <i class="fas fa-envelope pr-1"></i> Contact Me
              </Button>
            </a>
            <a href="https://drive.google.com/file/d/11o7ItYloPJI3M1rXTWCDsRhlmF6-Nl-m/view" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" class="md:w-auto w-full hover:bg-teal-400/20 text-teal-300 md:mt-0 mt-3">
                <i class="fas fa-download pr-1"></i> Unduh CV
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div class="lg:flex justify-center pt-28">
        <div>
          <p class="text-center">
            <i class="fa-solid fa-chevron-down fa-bounce"></i>
          </p>
          <p class="text-center -mt-3">
            <i class="fa-solid fa-chevron-down fa-bounce"></i>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "@/components/button/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>

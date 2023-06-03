<template>
  <section class=" bg-gray-200" id="contact">
    <div class="md:px-32 container py-10 mx-auto place-items-center">
      <h2 class="text-4xl font-bold text-center mb-5">Contact Me</h2>

      <div class="flex gap-10 my-12 justify-center">
        <a href="https://www.linkedin.com/in/ahmad-fauzi-12073a25b/">
          <i class="fa-brands text-gray-700 fa-linkedin text-4xl"></i>
        </a>
        <a href="https://github.com/fauziap">
          <i class="fa-brands text-gray-700 fa-github text-4xl"></i>
        </a>
        <a href="https://www.instagram.com/ahmadfauziyy/">
          <i class="fa-brands text-gray-700 fa-instagram text-4xl"></i>
        </a>
        <a href="https://wa.me/6289663593789">
          <i class="fa-brands text-gray-700 fa-whatsapp text-4xl"></i>
        </a>
        <a href="mailto:ujiahmadfauzi05@gmail.com">
          <i class="fa-solid text-gray-700 fa-envelope text-4xl"></i>
        </a>
      </div>
      <!-- <form>
        <div>
          <div class="grid md:grid-cols-2 md:gap-2 w-full"> 
            <div class="md:mb-4 mb-1">
              <label for="name" class="block text-lg font-medium mb-2">Nama</label>
              <input type="text" id="name" class="w-full p-2 border outline-none border-gray-300 rounded-lg" />
            </div>
            <div class="md:mb-4 mb-1">
              <label for="email" class="block text-lg font-medium mb-2">Email</label>
              <input type="email" id="email" class="w-full p-2 outline-none border border-gray-300 rounded-lg" />
            </div>
          </div>
          <div class="mb-4">
            <label for="message" class="block text-lg font-medium mb-2">Pesan</label>
            <textarea id="message" class="w-full p-2 outline-none border border-gray-300 rounded-lg"></textarea>
          </div>
        </div>
        <div class="flex justify-end">
          <Button varian="primary" class="md:w-auto w-full"><i class="fas fa-envelope fa-bounce pr-1"></i> Kirim Pesan</Button>
        </div>
      </form> -->
    </div>
  </section>
</template>
<script>
import Button from "@/components/button/Button.vue";

export default {
  components: {
    Button,
  }
};
</script>
<style lang="">
</style>
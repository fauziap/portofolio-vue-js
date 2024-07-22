<template>
  <nav
    class="w-full z-50 transition duration-500 border-gray-200"
    :class="{
      'hidden ': scrollingDown,
      'block ': scrollingUp,
      'fixed top-0 backdrop-blur-md bg-opacity-50': isFixed,
    }"
  >
    <div class="container mx-auto">
      <div class="flex items-center justify-between h-16">
        <div class="">
          <a href="">
            <h2 class="text-3xl text-slate-400 font-bold italic">Fauzi.</h2>
          </a>
        </div>
        <div class="ml-10 lg:flex hidden items-baseline">
          <a
            href="#home"
            class="hover:text-teal-400 px-6 py-1 text-md font-medium"
            >Home</a
          >
          <a
            href="#about" class="px-6 hover:text-teal-400 py-1 text-md font-medium"
            >About</a
          >
          <a
            href="#skill"
            class=" hover:text-teal-400 px-6 py-1 text-md font-medium"
            >Skill</a
          >
          <a
            href="#project"
            class=" hover:text-teal-400 px-6 py-1 text-md font-medium"
            >Project</a
          >
          <a
            href="#contact"
            class=" hover:text-teal-400 px-6 py-1 text-md font-medium"
            >Contact</a
          >
        </div>
        <div class="lg:flex hidden gap-3 items-center">
          <a
            href="https://github.com/fauziap"
            class=" hover:text-teal-400 text-xl"
            ><i class="fa-brands fa-github fa-bounce"></i
          ></a>
          <a
            href="https://www.instagram.com/ahmadfauziyy/"
            class=" hover:text-teal-400 text-md"
            ><i class="fa-brands fa-instagram "></i
          ></a>
          <a
            href="https://wa.me/6289663593789"
            class=" hover:text-teal-400 text-md"
            ><i class="fa-brands fa-whatsapp "></i
          ></a>
        </div>
        <div class="flex lg:hidden gap-5">

          <button v-on:click="MobileMenu()">
            <i v-if="!mobile" class="fa-solid fa-bars fa-lg"></i>
            <i v-else class="fa-solid fa-xmark fa-lg"></i>
          </button>
        </div>
      </div>
      <!-- Mobile -->
      <div
        v-if="mobile"
        @click.away="MobileClose()"
        class="fixed lg:hidden transition-all duration-300 right-5 z-50 -mt-3"
      >
        <div class="backdrop-blur w-64 text-slate-200 rounded-2xl py-4">
          <div class="grid text-center py-3">
            <a
              href="#home"
              class=" hover:text-teal-400 px-6 py-1 text-md font-medium"
              
              v-on:click="setActive('home')"
              ><i class="fa-solid fa-house fa-sm"></i> Home</a
            >
            <a
              href="#about"
              class=" hover:text-teal-400 px-6 py-1 text-md font-medium"
              
              v-on:click="setActive('about')"
              ><i class="fa-solid fa-address-card fa-sm"></i> About</a
            >
            <a
              href="#skill"
              class=" hover:text-teal-400 px-6 py-1 text-md font-medium"
             
              v-on:click="setActive('skill')"
              ><i class="fa-solid fa-code fa-sm"></i> Skill</a
            >
            <a
              href="#project"
              class=" hover:text-teal-400 px-6 py-1 text-md font-medium"
             
              v-on:click="setActive('project')"
              ><i class="fa-solid fa-file fa-sm"></i> Project</a
            >
            <a
              href="#contact"
              class=" hover:text-teal-400 px-6 py-1 text-md font-medium"
              
              v-on:click="setActive('contact')"
              ><i class="fa-solid fa-phone fa-sm"></i> Contact</a
            >
            <!-- Add more links as needed -->
          </div>
          <div class="flex gap-5 justify-center pb-4">
            <a
              href="https://github.com/fauziap"
              class=" hover:text-teal-400 text-xl"
              ><i class="fa-brands fa-github "></i
            ></a>
            <a
              href="https://www.instagram.com/ahmadfauziyy/"
              class=" hover:text-teal-400 text-md"
              ><i class="fa-brands fa-instagram "></i
            ></a>
            <a
              href="https://wa.me/6289663593789"
              class=" hover:text-teal-400 text-md"
              ><i class="fa-brands fa-whatsapp "></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrollingDown: false,
      scrollingUp: false,
      lastScrollPos: 0,
      mobile: false,
      activeItem: null,
    };
  },
  computed: {
    isFixed() {
      return this.lastScrollPos > 0; // Tambahkan logika tambahan jika perlu
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > this.lastScrollPos) {
        this.scrollingDown = true;
        this.scrollingUp = false;
      } else {
        this.scrollingDown = false;
        this.scrollingUp = true;
      }
      this.lastScrollPos = currentScrollPos;
    },
    MobileMenu() {
      this.mobile = !this.mobile;
    },
    MobileClose() {
      this.mobile = false;
    },
    setActive(item) {
      this.activeItem = item;
    },
    isActive(item) {
      return this.activeItem === item;
    },
  },
};
</script>

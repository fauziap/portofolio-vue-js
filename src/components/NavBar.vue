<template>
  <nav class="bg-gray-200 w-full z-50  transition duration-500 border-gray-200"
    :class="{ 'hidden ': scrollingDown, 'block ': scrollingUp, 'fixed top-0 backdrop-blur-md bg-opacity-50': isFixed }">
    <div class="container mx-auto">
      <div class="flex items-center justify-between h-16">
        <div class="">
          <a href="">
            <h2 class="text-3xl font-bold italic text-gray-700">Fauzi.</h2>
          </a>
        </div>
        <div class="ml-10 lg:flex hidden items-baseline">
          <a href="#home" class="text-gray-700 hover:text-gray-500 px-6 py-1 text-md font-medium"
            :class="{ 'bg-gray-500 rounded-full hover:text-white text-white': isActive('home') || isActive(null) }"
            v-on:click="setActive('home')">Home</a>
          <a href="#about" class="text-gray-700 hover:text-gray-500 px-6 py-1 text-md font-medium"
            :class="{ 'bg-gray-500 rounded-full hover:text-white text-white': isActive('about') }"
            v-on:click="setActive('about')">About</a>
          <a href="#skill" class="text-gray-700 hover:text-gray-500 px-6 py-1 text-md font-medium"
            :class="{ 'bg-gray-500 rounded-full hover:text-white text-white': isActive('skill') }"
            v-on:click="setActive('skill')">Skill</a>
          <a href="#project" class="text-gray-700 hover:text-gray-500 px-6 py-1 text-md font-medium"
            :class="{ 'bg-gray-500 rounded-full hover:text-white text-white': isActive('project') }"
            v-on:click="setActive('project')">Project</a>
          <a href="#contact" class="text-gray-700 hover:text-gray-500 px-6 py-1 text-md font-medium"
            :class="{ 'bg-gray-500 rounded-full hover:text-white text-white': isActive('contact') }"
            v-on:click="setActive('contact')">Contact</a>
        </div>
        <div class="lg:flex hidden gap-3 items-center">
          <a href="https://github.com/fauziap" class="text-gray-700 hover:text-gray-500 text-xl"><i class="fa-brands fa-github fa-bounce"></i></a>
          <a href="https://www.instagram.com/ahmadfauziyy/" class="text-gray-700 hover:text-gray-500 text-md"><i class="fa-brands fa-instagram fa-beat"></i></a>
          <a href="https://wa.me/6289663593789" class="text-gray-700 hover:text-gray-500 text-md"><i class="fa-brands fa-whatsapp fa-beat"></i></a>
          <a href="#" class="text-gray-700 hover:text-gray-500 text-md text-xl"><svg viewBox="0 0 24 24" fill="none"
              class="w-6 h-6 ">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                class=""></path>
              <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                class="fill-gray-700"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                class="fill-gray-700"></path>
            </svg></a>
        </div>
        <div class="flex lg:hidden gap-5">
          <a href="#" class="text-gray-700 hover:text-gray-500 text-md text-xl"><svg viewBox="0 0 24 24" fill="none"
              class="w-6 h-6 ">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                class=""></path>
              <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                class="fill-gray-700"></path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                class="fill-gray-700"></path>
            </svg></a>
          <button v-on:click="MobileMenu()">
            <i v-if="!mobile" class="fa-solid fa-bars fa-lg"></i>
            <i v-else class="fa-solid fa-xmark fa-lg"></i>
          </button>
        </div>
      </div>
      <!-- Mobile -->
      <div v-if="mobile" @click.away="MobileClose()"
        class="fixed lg:hidden transition-all duration-300 right-5 z-50 -mt-3">
        <div class="bg-white w-64 rounded-2xl py-4 ">
          <div class="grid text-center py-3">
            <a href="#home" class="text-gray-700 hover:text-gray-500 px-6 py-1 text-md font-medium"
              :class="{ 'bg-gray-500 mx-10 rounded-full hover:text-white text-white': isActive('home') || isActive(null) }"
              v-on:click="setActive('home')"><i class="fa-solid fa-house fa-sm "></i> Home</a>
            <a href="#about" class="text-gray-700 hover:text-gray-500 px-6 py-1 text-md font-medium"
              :class="{ 'bg-gray-500 mx-10 rounded-full hover:text-white text-white': isActive('about') }"
              v-on:click="setActive('about')"><i class="fa-solid fa-address-card fa-sm"></i> About</a>
            <a href="#skill" class="text-gray-700 hover:text-gray-500 px-6 py-1 text-md font-medium"
              :class="{ 'bg-gray-500 mx-10 rounded-full hover:text-white text-white': isActive('skill') }"
              v-on:click="setActive('skill')"><i class="fa-solid fa-code fa-sm"></i> Skill</a>
            <a href="#project" class="text-gray-700 hover:text-gray-500 px-6 py-1 text-md font-medium"
              :class="{ 'bg-gray-500 mx-10 rounded-full hover:text-white text-white': isActive('project') }"
              v-on:click="setActive('project')"><i class="fa-solid fa-file fa-sm"></i> Project</a>
            <a href="#contact" class="text-gray-700 hover:text-gray-500 px-6 py-1 text-md font-medium"
              :class="{ 'bg-gray-500 mx-10 rounded-full hover:text-white text-white': isActive('contact') }"
              v-on:click="setActive('contact')"><i class="fa-solid fa-phone fa-sm"></i> Contact</a>
            <!-- Add more links as needed -->
          </div>
          <div class="flex gap-5 justify-center pb-4">
            <a href="https://github.com/fauziap" class="text-gray-700 hover:text-gray-500 text-xl"><i
                class="fa-brands fa-github fa-bounce"></i></a>
            <a href="https://www.instagram.com/ahmadfauziyy/" class="text-gray-700 hover:text-gray-500 text-md"><i
                class="fa-brands fa-instagram fa-beat"></i></a>
            <a href="https://wa.me/6289663593789" class="text-gray-700 hover:text-gray-500 text-md"><i
                class="fa-brands fa-whatsapp fa-beat"></i></a>
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
      activeItem: null
    };
  },
  computed: {
    isFixed() {
      return this.lastScrollPos > 0; // Tambahkan logika tambahan jika perlu
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
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
    }
  }
};
</script>
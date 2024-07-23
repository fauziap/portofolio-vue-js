<template>
  <div>
    <Navbar />
    <Perkenalan />
    <About/>
    <Skill />
    <Project />
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Button from "@/components/button/Button.vue";
import Navbar from "@/components/Navbar.vue";
import Perkenalan from "@/components/Perkenalan.vue";
import About from "@/components/About.vue";
import Skill from "@/components/Skill.vue";
import Project from "@/components/Project.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Perkenalan,
    About,
    Skill,
    Project,
    Contact,
    Footer,
    Button,
  },
};
</script>

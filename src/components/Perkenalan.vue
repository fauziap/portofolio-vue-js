<template>
    <section id="home" class="bg-gray-200 lg:pb-16 pb-5">
        <div class="container mx-auto lg:py-20 py-5 ">
            <div class="flex lg:flex-row flex-col-reverse lg:mx-16 items-center">
                <div data-aos="fade-right" data-aos-duration="1000" class="lg:w-2/3">
                    <h6 class="md:text-2xl text-xl font-bold">Hello, It's Me</h6>
                    <h2 class="md:text-5xl text-4xl font-bold my-3">Ahmad Fauzi</h2>
                    <h4 class="text-2xl md:block hidden font-bold">And I'm a Junior Web Developer</h4>
                    <h4 class="text-2xl md:hidden font-bold">Junior Web Developer</h4>
                    <p class="text-lg mt-4 md:pr-8 text-justify">I am a graduate of Network and Application Informatics System (SIJA) program, which is a 4-year equivalent to a Diploma-1 degree. I can work as a junior frontend or backend developer. I enjoy learning new things and have the ability to learn quickly.</p>
                    <div class="mt-5 md:flex md:gap-2 ">
                        <a href="#contact">
                            <Button varian="primary" class="md:w-auto w-full"><i class="fas fa-envelope pr-1"></i> Contact Me</Button>
                        </a>
                        <Button variant="outline" class="md:w-auto w-full md:mt-0 mt-3"><i class="fas fa-download pr-1"></i> Unduh CV</Button>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" class="lg:w-1/3 md:pb-0 pb-7">
                    <img src="../assets/uji.jpg"
                        alt="Profile Image" class="rounded-full shadow-lg shadow-gray-500 mx-auto w-64 h-64">
                </div>
            </div>
        </div>
        <div class="lg:flex hidden justify-center pt-16 ">
            <div>
                <p class="text-center "><i class="fa-solid fa-chevron-down fa-bounce"></i>
                </p>
                <p class="text-center -mt-3"><i class="fa-solid fa-chevron-down fa-bounce"></i>
                </p>
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

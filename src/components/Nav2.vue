<template>
    <nav>
        <ul>
            <li v-for="section in sections" :key="section.id">
                <a :class="{ active: section.isActive }" @click="scrollToSection(section.id)">{{ section.title }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            sections: [
                { id: 'home', title: 'Home', isActive: false },
                { id: 'about', title: 'About', isActive: false },
                { id: 'skills', title: 'Skills', isActive: false },
                { id: 'projects', title: 'Projects', isActive: false },
                { id: 'contact', title: 'Contact', isActive: false }
            ]
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            this.sections.forEach(section => {
                const targetElement = document.getElementById(section.id);
                if (targetElement) {
                    const sectionTop = targetElement.offsetTop;
                    const sectionHeight = targetElement.offsetHeight;

                    if (
                        scrollPosition >= sectionTop - windowHeight / 2 &&
                        scrollPosition < sectionTop + sectionHeight - windowHeight / 2
                    ) {
                        section.isActive = true;
                    } else {
                        section.isActive = false;
                    }
                }
            });
        },
        scrollToSection(sectionId) {
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                const sectionTop = targetElement.offsetTop;
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        }
    }
};
</script>

<style>
nav ul {
    list-style: none;
    display: flex;
}

nav li {
    margin-right: 20px;
}

nav a {
    text-decoration: none;
    color: black;
}

nav a.active {
    font-weight: bold;
}
</style>

<template>
  <button :class="buttonClasses" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (value) => {
        return ["primary", "outline"].includes(value);
      },
    },
  },
  computed: {
    buttonClasses() {
      let classes = [
        "button",
        `bg-${this.variant}-500`,
        "hover:bg-opacity-75",
        "px-6",
      ];

      if (this.variant === "primary") {
        classes.push("bg-gray-500 py-2 rounded-full text-white font-medium", "hover:bg-gray-600");
      } else if (this.variant === "outline") {
        classes.push("border-2 py-1.5 border-gray-500 text-gray-600 rounded-full font-medium", "hover:bg-gray-600 hover:text-white ");
      }

      return classes;
    },
  },
  methods: {
    onClick() {
      // Handle button click event
    },
  },
};
</script>


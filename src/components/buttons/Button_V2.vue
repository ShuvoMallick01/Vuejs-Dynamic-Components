<template>
  <button v-bind="$attrs" :class="buttonClasses">
    <i v-if="prefix" :class="prefix" class="pe-1"></i>
    {{ title }}
    <i v-if="suffix" :class="suffix" class="ps-1"></i>
  </button>
</template>

<script setup>
import { ref, computed } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  prefix: String,
  suffix: String,
  title: { type: String, required: true },
  type: { type: String, default: "primary" },
  size: String,
  shape: String,
  transition: Boolean,
  isDisabled: { type: Boolean, default: false },
});

const typeClass = computed(() => {
  switch (props.type) {
    case "primary":
      return "btn-primary";
    case "accent":
      return "btn-accent";
    case "secondary":
      return "btn-secondary";
    case "success":
      return "btn-success";
    case "danger":
      return "btn-danger";
    case "warning":
      return "btn-warning";
    case "dark":
      return "btn-dark";
    case "light":
      return "btn-light";
    case "disabled":
      return "btn-disabled";
    default:
      return "";
  }
});

const outlineClass = computed(() => {
  switch (props.type) {
    case "out-primary":
      return "outline-primary";
    case "out-accent":
      return "outline-accent";
    case "out-secondary":
      return "outline-secondary";
    case "out-success":
      return "outline-success";
    case "out-danger":
      return "outline-danger";
    case "out-warning":
      return "outline-warning";
    case "out-dark":
      return "outline-dark";
    case "out-light":
      return "outline-light";
    case "out-disabled":
      return "outline-disabled";
    default:
      return "";
  }
});

const translucentClass = computed(() => {
  switch (props.type) {
    case "trans-primary":
      return "translucent-primary";
    case "trans-accent":
      return "translucent-accent";
    case "trans-secondary":
      return "translucent-secondary";
    case "trans-success":
      return "translucent-success";
    case "trans-danger":
      return "translucent-danger";
    case "trans-warning":
      return "translucent-warning";
    case "trans-dark":
      return "translucent-dark";
    case "trans-light":
      return "translucent-light";
    case "trans-disabled":
      return "translucent-disabled";
    default:
      return "";
  }
});

const buttonClasses = ref("");

const getClasses = () => {
  return [
    typeClass.value,
    outlineClass.value,
    translucentClass.value,

    props.size === "default" ? "btn-default" : "",
    props.size === "lg" ? "btn-lg" : "",
    props.size === "sm" ? "btn-sm" : "",

    props.shape === "default" ? "shape-default" : "",
    props.shape === "sm" ? "shape-sm" : "",

    props.transition ? "transition" : "",
  ].join(" ");
};

buttonClasses.value = getClasses();
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* Types */
  .btn-primary {
    @apply text-white text-sm font-bold leading-6 text-center bg-primary hover:bg-primaryHover ring-0 dark:bg-primary dark:hover:bg-primaryHover focus:outline-none;
  }
  .btn-accent {
    @apply text-white text-sm font-bold leading-6 text-center bg-accent hover:bg-violet-700 ring-0 dark:bg-accent dark:hover:bg-violet-700 focus:outline-none;
  }
  .btn-secondary {
    @apply text-gray-800 text-sm font-bold leading-6 text-center bg-gray-200 hover:bg-gray-300 border border-gray-400 ring-0 dark:bg-gray-200 dark:hover:bg-gray-300 focus:outline-none;
  }
  .btn-success {
    @apply text-white text-sm font-bold leading-6 text-center bg-success hover:bg-green-600 ring-0 dark:bg-success dark:hover:bg-green-600 focus:outline-none;
  }
  .btn-danger {
    @apply text-white text-sm font-bold leading-6 text-center bg-danger hover:bg-red-600 ring-0 dark:bg-danger dark:hover:bg-red-600 focus:outline-none;
  }
  .btn-warning {
    @apply text-white text-sm font-bold leading-6 text-center bg-warning hover:bg-blue-700 ring-0 dark:bg-warning dark:hover:bg-blue-700 focus:outline-none;
  }
  .btn-dark {
    @apply text-white text-sm font-bold leading-6 text-center bg-gray-900 hover:bg-gray-950 ring-0 dark:bg-gray-900 dark:hover:bg-gray-950 focus:outline-none;
  }
  .btn-light {
    @apply text-black text-sm font-bold leading-6 text-center bg-white hover:bg-gray-100 ring-0 dark:bg-white dark:hover:bg-white focus:outline-none;
  }

  .btn-disabled {
    @apply text-gray-400 text-sm font-bold leading-6 text-center bg-gray-200  border-gray-400 ring-0 dark:bg-gray-200  focus:outline-none;
  }

  /* Outline */
  .outline-primary {
    @apply text-primary text-sm font-bold leading-6 text-center bg-white border hover:text-white border-primary hover:bg-primary ring-0 dark:bg-primary dark:hover:bg-primaryHover focus:outline-none;
  }

  .outline-accent {
    @apply text-accent text-sm font-bold leading-6 text-center bg-white border hover:text-white border-accent hover:bg-accent ring-0 dark:bg-accent dark:hover:bg-accent focus:outline-none;
  }

  .outline-secondary {
    @apply text-gray-800 text-sm font-bold leading-6 text-center bg-white border hover:text-white border-gray-800 hover:bg-gray-800 ring-0 dark:bg-gray-800 dark:hover:bg-gray-800 focus:outline-none;
  }

  .outline-success {
    @apply text-success text-sm font-bold leading-6 text-center bg-white border hover:text-white border-success hover:bg-success ring-0 dark:bg-success dark:hover:bg-success focus:outline-none;
  }
  /* Translucent */
  .translucent-primary {
    @apply text-primary text-sm font-bold leading-6 text-center bg-primary/10    hover:bg-primary/20 ring-0 dark:bg-primary/10 dark:hover:bg-primary/20 focus:outline-none;
  }
  .translucent-accent {
    @apply text-accent text-sm font-bold leading-6 text-center bg-accent/10    hover:bg-accent/20 ring-0 dark:bg-accent/10 dark:hover:bg-accent/20 focus:outline-none;
  }
  .translucent-success {
    @apply text-success text-sm font-bold leading-6 text-center bg-success/10    hover:bg-success/20 ring-0 dark:bg-success/10 dark:hover:bg-success/20 focus:outline-none;
  }
  .translucent-danger {
    @apply text-danger text-sm font-bold leading-6 text-center bg-danger/10    hover:bg-danger/20 ring-0 dark:bg-danger/10 dark:hover:bg-danger/20 focus:outline-none;
  }

  /* Size */
  .btn-default {
    padding: 10px 24px;
  }
  .btn-lg {
    padding: 14px 32px;
  }
  .btn-sm {
    padding: 8px 20px;
  }

  /* Shapes Sizes */
  .shape-default {
    @apply rounded-full;
  }

  .shape-sm {
    @apply rounded-lg;
  }
}
</style>

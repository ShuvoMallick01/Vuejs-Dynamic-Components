<template>
  <button
    v-bind="$attrs"
    :disabled="isDisabled"
    :class="{
      // [getButtonColor]: true,
      filled: type === 'filled',
      outline: type === 'outline',
      translucent: type === 'translucent',

      primary: color === 'primary',
      accent: color === 'accent',
      secondary: color === 'secondary',
      success: color === 'success',
      danger: color === 'danger',
      warning: color === 'warning',
      info: color === 'info',
      dark: color === 'dark',
      light: color === 'light',
      disabled: color === 'disabled',

      'shape-pill': shape === 'pill',
      'shape-rounded': shape === 'rounded',
      'shape-square': shape === 'square',
      'shape-circle': shape === 'circle',

      'btn-lg': size === 'large',
      'btn-md': size === 'medium',
      'btn-sm': size === 'small',
      'btn-xs': size === 'xsmall',

      'circle-md': size === 'circle-medium',
      'circle-lg': size === 'circle-large',
      'circle-sm': size === 'circle-small',

      'shadow-medium': shadow === 'medium',
      'shadow-large': shadow === 'large',
      'shadow-small': shadow === 'small',

      'transition-300': true,
    }"
  >
    <i v-if="prefixIcon" :class="prefixIcon"></i>
    {{ title }}
    <i v-if="suffixIcon" :class="suffixIcon"></i>
  </button>

  <button class=""></button>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { computed, ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  prefixIcon: String,
  suffixIcon: String,
  title: String,

  color: { type: String, default: "primary" },
  type: { type: String, default: "filled" },
  shape: { type: String, default: "pill" },
  size: { type: String, default: "btn-md" },

  isDisabled: { type: Boolean, default: false },
  shadow: String,
});

// const filledColors = {
//   primary:
//     "text-white text-center bg-primary hover:bg-primaryHover ring-0 dark:bg-primary dark:hover:bg-primaryHover focus:outline-none",
//   accent:
//     "text-white text-center bg-accent hover:bg-violet-700 ring-0 dark:bg-accent dark:hover:bg-violet-700 focus:outline-none",
//   secondary:
//     "text-gray-800 text-center bg-gray-200 hover:bg-gray-300 border border-gray-400 ring-0 dark:bg-gray-200 dark:hover:bg-gray-300 focus:outline-none",
//   success:
//     "text-white text-center bg-success hover:bg-green-600 ring-0 dark:bg-success dark:hover:bg-green-600 focus:outline-none",
//   danger:
//     "text-white text-center bg-danger hover:bg-red-600 ring-0 dark:bg-danger dark:hover:bg-red-600 focus:outline-none",
//   warning:
//     "text-white text-center bg-warning hover:bg-blue-700 ring-0 dark:bg-warning dark:hover:bg-blue-700 focus:outline-none",
//   info: "text-white text-center bg-info hover:bg-blue-700 ring-0 dark:bg-warning dark:hover:bg-info focus:outline-none",
//   dark: "text-white text-center bg-gray-900 hover:bg-gray-950 ring-0 focus:outline-none",
//   light:
//     "text-black text-center bg-white hover:bg-gray-100 ring-0 dark:bg-white dark:hover:bg-white focus:outline-none",
//   disabled:
//     "text-gray-400 text-center bg-gray-200  border-gray-400 ring-0 dark:bg-gray-200 focus:outline-none",
// };

// const outlineColors = {
//   primary:
//     "text-primary text-center  border hover:text-white border-primary hover:bg-primary ring-0 dark:hover:bg-primaryHover focus:outline-none",
//   accent:
//     "text-accent text-center  hover:text-white border border-accent hover:bg-accent ring-0 dark:hover:bg-accent focus:outline-none",
//   secondary:
//     "text-gray-800 text-center hover:text-white border border-gray-800 hover:bg-gray-800 ring-0  dark:hover:bg-gray-800 focus:outline-none",
//   success:
//     "text-success text-center hover:text-white border border-success hover:bg-success ring-0  dark:hover:bg-success focus:outline-none",
//   danger:
//     "text-white text-center hover:text-white ring-0 border border-danger  dark:hover:bg-danger focus:outline-none",
//   warning:
//     "text-white text-center hover:text-white ring-0 border border-warning  dark:hover:bg-warning focus:outline-none",
//   info: "text-white text-center  hover:text-white ring-0 border border-info dark:hover:bg-info focus:outline-none",
//   dark: "text-white text-center  hover:text-white ring-0 border border-black  dark:hover:bg-black focus:outline-none",
//   light:
//     " text-black text-center  hover:text-black ring-0 border border-white  dark:hover:bg-white focus:outline-none",
// };

// const getButtonColor = computed(() => {
//   if (props.type === "outline") return outlineColors[props.color];
//   if (props.type === "filled") return filledColors[props.color];
// });
</script>

<style scoped></style>

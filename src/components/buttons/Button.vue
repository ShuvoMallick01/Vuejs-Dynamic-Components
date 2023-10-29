<template>
  <button
    v-bind="$attrs"
    :class="{
      'btn-primary': type === 'primary',
      'btn-accent': type === 'accent',
      'btn-secondary': type === 'secondary',
      'btn-green': type === 'secondary',
      'btn-success': type === 'success',
      'btn-danger': type === 'danger',
      'btn-warning': type === 'warning',
      'btn-info': type === 'info',
      'btn-dark': type === 'dark',
      'btn-light': type === 'light',
      'btn-disable': type === 'disable',

      'outline-primary': type === 'out-primary',
      'outline-accent': type === 'out-accent',
      'outline-secondary': type === 'out-secondary',
      'outline-success': type === 'out-success',
      'outline-danger': type === 'out-danger',
      'outline-warning': type === 'out-warning',
      'outline-info': type === 'out-info',
      'outline-dark': type === 'out-dark',
      'outline-light': type === 'out-light',

      'translucent-primary': type === 'trans-primary',
      'translucent-accent': type === 'trans-accent',
      'translucent-success': type === 'trans-success',
      'translucent-danger': type === 'trans-danger',
      'translucent-warning': type === 'trans-warning',
      'translucent-info': type === 'trans-info',
      'translucent-dark': type === 'trans-dark',
      'translucent-light': type === 'trans-light',

      'btn-default': size === 'default',
      'btn-lg': size === 'lg',
      'btn-sm': size === 'sm',

      'shape-default': shape === 'default',
      'shape-sm': shape === 'sm',
      'shape-none': shape === 'none',
    }"
  >
    <i v-if="prefix" :class="prefix" class="pe-1"></i>
    {{ title }}
    <i v-if="suffix" :class="suffix" class="ps-1"></i>
  </button>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  prefix: String,
  suffix: String,
  title: { type: String, required: true },
  type: { type: String, default: "btn-default" },
  size: { type: String, default: "btn-md" },
  shape: { type: String, default: "btn-shape-default" },
});
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

  /* Size */
  .btn-default {
    padding: 10px 24px;
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

<template>
  <a
    v-bind="$attrs"
    :aria-disabled="isDisabled"
    :href="url"
    :class="{
      'link-primary': color === 'primary',
      'link-accent': color === 'accent',
      'link-secondary': color === 'secondary',
      'link-green': color === 'secondary',
      'link-success': color === 'success',
      'link-danger': color === 'danger',
      'link-warning': color === 'warning',
      'link-info': color === 'info',
      'link-dark': color === 'dark',
      'link-light': color === 'light',
      'link-disabled': isDisabled,

      'link-default': size === 'default',
      'link-lg': size === 'lg',
      'link-sm': size === 'sm',
      'link-xs': size === 'xs',
      transition,
    }"
  >
    <i v-if="prefix" :class="prefix" class="align-baseline"></i>
    {{ title }}
    <i v-if="suffix" :class="suffix"></i>
  </a>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  prefix: String,
  suffix: String,
  title: { type: String, required: true },
  color: { type: String, default: "link-primary" },
  size: { type: String, default: "link-default" },
  transition: { type: Boolean, default: true },
  isDisabled: { type: Boolean, default: false },
  url: { type: String, required: true, default: "#" },
});
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* Colors */
  .link-primary {
    @apply text-primary hover:text-primaryHover;
  }
  .link-accent {
    @apply text-accent hover:text-violet-700;
  }
  .link-secondary {
    @apply text-gray-700 hover:text-gray-900;
  }
  .link-success {
    @apply text-success hover:text-green-600;
  }
  .link-danger {
    @apply text-danger hover:text-red-700;
  }
  .link-warning {
    @apply text-warning hover:text-yellow-700;
  }
  .link-info {
    @apply text-info hover:text-blue-800;
  }
  .link-dark {
    @apply text-gray-900 hover:text-gray-700;
  }
  .link-light {
    @apply text-gray-100 hover:text-gray-200;
  }
  .link-disabled {
    @apply text-gray-400 hover:text-gray-500;
  }

  /* Size */
  .link-default {
    padding: 2px 6px;
    @apply text-base font-bold leading-6;
  }
  .link-lg {
    padding: 2px 6px;
    @apply text-lg font-bold leading-6;
  }
  .link-sm {
    padding: 2px 6px;
    @apply text-sm font-bold leading-6;
  }
}
</style>

<template>
  <span
    v-bind="$attrs"
    :disabled="isDisabled"
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
      'btn-disabled': isDisabled,

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

      'badge-default': size === 'default',
      'badge-lg': size === 'lg',

      'shape-default': shape === 'default',
      'shape-sm': shape === 'sm',
      transition,
    }"
  >
    <i v-if="prefix" :class="prefix" class="pe-1"></i>
    {{ title }}
    <i v-if="suffix" :class="suffix" class="ps-1"></i>
  </span>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  prefix: String,
  suffix: String,
  title: { type: String, required: true },
  type: { type: String, default: "btn-primary" },
  size: { type: String, default: "badge-default" },
  shape: { type: String, default: "shape-default" },
  transition: { type: Boolean, default: true },
  isDisabled: { type: Boolean, default: false },
});
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* Size */
  .badge-default {
    padding: 2px 10px 2px 10px;
    @apply text-sm;
  }
  .badge-lg {
    padding: 4px 15px;
    @apply text-sm;
  }
}
</style>

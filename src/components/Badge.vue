<template>
  <span
    v-bind="$attrs"
    :disabled="isDisabled"
    :class="{
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

      'badge-lg': size === 'large',
      'badge-md': size === 'medium',
      'badge-sm': size === 'small',

      'shadow-medium': shadow === 'medium',
      'shadow-large': shadow === 'large',
      'shadow-small': shadow === 'small',

      'transition-300': true,
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

  color: { type: String, default: "primary" },
  type: { type: String, default: "filled" },
  shape: { type: String, default: "pill" },
  size: { type: String, default: "badge-md" },

  isDisabled: { type: Boolean, default: false },
  shadow: String,
});
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* Size */
  .badge-md {
    padding: 2px 10px 2px 10px;
    @apply text-sm;
  }
  .badge-lg {
    padding: 4px 15px;
    @apply text-sm;
  }
  .badge-sm {
    padding: 1px 10px 2px 10px;
    @apply text-sm;
  }
}
</style>

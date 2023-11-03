<template>
  <button
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

      'iconBox-default': size === 'default',
      'iconBox-lg': size === 'lg',
      'iconBox-sm': size === 'sm',
      transition,
    }"
  >
    <i :class="icon"></i>
  </button>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  prefix: String,
  suffix: String,
  icon: { type: String, required: true },
  type: { type: String, default: "primary" },
  size: { type: String, default: "default" },
  shape: { type: String, default: "default" },
  transition: { type: Boolean, default: true },
  isDisabled: { type: Boolean, default: false },
});
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* Size */
  .iconBox-default {
    display: flex;
    width: 32px;
    height: 32px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 40px;
  }
}
</style>

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

      'icon-primary': type === 'iprimary',
      'icon-accent': type === 'iaccent',
      'icon-secondary': type === 'isecondary',
      'icon-green': type === 'isecondary',
      'icon-success': type === 'isuccess',
      'icon-danger': type === 'idanger',
      'icon-warning': type === 'iwarning',
      'icon-info': type === 'iinfo',
      'icon-dark': type === 'idark',
      'icon-light': type === 'ilight',

      'btn-default': size === 'default',
      'btn-lg': size === 'lg',
      'btn-sm': size === 'sm',
      'btn-xs': size === 'xs',

      'btn-circle-default': size === 'circle-default',
      'btn-circle-lg': size === 'circle-lg',

      'shape-default': shape === 'default',
      'shape-sm': shape === 'sm',
      'shape-none': shape === 'none',

      'shape-circle': shape === 'circle',

      'shadow-default': shadow === 'default',

      transition,
    }"
  >
    <i v-if="prefix" :class="prefix"></i>
    {{ title }}
    <i v-if="suffix" :class="suffix"></i>
  </button>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  prefix: String,
  suffix: String,
  title: String,
  type: { type: String, default: "btn-primary" },
  size: { type: String, default: "default" },
  shape: { type: String, default: "default" },
  transition: { type: Boolean, default: true },
  isDisabled: { type: Boolean, default: false },
  shadow: { type: String, default: "shadow-default" },
});
</script>

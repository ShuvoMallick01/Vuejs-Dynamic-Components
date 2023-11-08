<template>
  <button
    v-bind="$attrs"
    :disabled="isDisabled"
    :class="{
      // 'outline-success': type === 'out-success',
      // 'outline-danger': type === 'out-danger',
      // 'outline-warning': type === 'out-warning',
      // 'outline-info': type === 'out-info',
      // 'outline-dark': type === 'out-dark',
      // 'outline-light': type === 'out-light',

      // 'translucent-primary': type === 'trans-primary',
      // 'translucent-accent': type === 'trans-accent',
      // 'translucent-success': type === 'trans-success',
      // 'translucent-danger': type === 'trans-danger',
      // 'translucent-warning': type === 'trans-warning',
      // 'translucent-info': type === 'trans-info',
      // 'translucent-dark': type === 'trans-dark',
      // 'translucent-light': type === 'trans-light',

      // 'icon-primary': type === 'iprimary',
      // 'icon-accent': type === 'iaccent',
      // 'icon-secondary': type === 'isecondary',
      // 'icon-green': type === 'isecondary',
      // 'icon-success': type === 'isuccess',
      // 'icon-danger': type === 'idanger',
      // 'icon-warning': type === 'iwarning',
      // 'icon-info': type === 'iinfo',
      // 'icon-dark': type === 'idark',
      // 'icon-light': type === 'ilight',

      'fill-primary': (type === 'fill') & (color === 'primary'),
      'fill-accent': (type === 'fill') & (color === 'accent'),

      'outline-primary': (type === 'outline') & (color === 'primary'),
      'outline-accent': (type === 'outline') & (color === 'accent'),

      'translucent-primary': (type === 'translucent') & (color === 'primary'),
      'translucent-accent': (type === 'translucent') & (color === 'accent'),

      'rounded-full': shape === 'pill',
      'rounded-xl': shape === 'rounded',
      'rounded-none': shape === 'square',

      'btn-lg': size === 'large',
      'btn-md': size === 'medium',
      'btn-sm': size === 'small',
      'btn-xs': size === 'xsmall',

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
  type: { type: String, default: "fill" },
  shape: { type: String, default: "pill" },
  size: { type: String, default: "btn-md" },

  shadow: String,
  isDisabled: { type: Boolean, default: false },
  // transition: { type: String, default: "transition-300" },
});
</script>

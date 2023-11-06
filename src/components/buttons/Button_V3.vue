<template>
  <button
    v-bind="$attrs"
    :disabled="isDisabled"
    :class="{
      // primary: color === 'primary',
      // accent: color === 'accent',
      // secondary: color === 'secondary',
      // green: color === 'secondary',
      // success: color === 'success',
      // danger: color === 'danger',
      // warning: color === 'warning',
      // info: color === 'info',
      // dark: color === 'dark',
      // light: color === 'light',
      // disabled: color === 'disabled',

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

      // 'translucent-primary': type === 'translucent-primary',
      // 'translucent-accent': type === 'translucent-accent',

      'fill-primary': (type === 'fill') & (color === 'primary'),
      'fill-accent': (type === 'fill') & (color === 'accent'),

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

      'transition-300': transition === 'all-300',
      disabled: isDisabled,
    }"
  >
    <i v-if="prefix" :class="prefix"></i>
    {{ title }}
    <i v-if="suffix" :class="suffix"></i>
  </button>
</template>

<script setup>
import { computed, ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  prefix: String,
  suffix: String,
  title: String,

  color: { type: String, default: "primary" },
  type: { type: String, default: "fill" },
  shape: { type: String, default: "pill" },
  size: { type: String, default: "btn-md" },

  transition: { type: String, default: "transition-300" },
  isDisabled: { type: Boolean, default: false },
  shadow: String,
});

// let btnColorTypeClasses = ref("");

// const btnColorType = computed(() => {
//   let colorTypeClass = `${props.type}-${props.color} `;
//   return colorTypeClass;
// });

// btnColorTypeClasses.value = btnColorType;
</script>

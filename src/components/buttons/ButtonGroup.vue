<template>
  <div class="group relative">
    <button
      v-bind="$attrs"
      class="group-hover:z-10 transition-300"
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

        'shape-s-pill': shape === 'pill',
        'shape-s-rounded': shape === 'rounded',
        'shape-square': shape === 'square',

        'icon-lg': size === 'large',
        'icon-md': size === 'medium',
        'icon-sm': size === 'small',

        'shadow-medium': shadow === 'medium',
        'shadow-large': shadow === 'large',
        'shadow-small': shadow === 'small',

        'transition-300': true,
      }"
    >
      <i :class="iconName"></i>
    </button>

    <span
      class="border-s group-hover:border-hidden border-white/50 absolute h-6 top-0 bottom-0 m-auto"
    ></span>

    <button
      v-bind="$attrs"
      :disabled="isDisabled"
      class="transition-300 font-primary"
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

        'btn-lg': size === 'large',
        'btn-md': size === 'medium',
        'btn-sm': size === 'small',
        'btn-xs': size === 'xsmall',

        'shape-e-pill': shape === 'pill',
        'shape-e-rounded': shape === 'rounded',
        'shape-square': shape === 'square',

        'shadow-medium': shadow === 'medium',
        'shadow-large': shadow === 'large',
        'shadow-small': shadow === 'small',

        'transition-300': true,
      }"
    >
      {{ title }}
    </button>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  isIconBtnFirst: { type: Boolean, default: true },
  prefixIcon: { type: Boolean, default: true },
  iconName: { type: String, required: true, default: "icon-alert-circle" },
  shape: String,
  title: String,
  color: { type: String, default: "primary" },
  type: { type: String, default: "filled" },
  size: { type: String, default: "btn-md" },

  isDisabled: { type: Boolean, default: false },
  shadow: String,
});
</script>

<style scoped>
.icon-lg {
  @apply text-xl align-bottom px-5 py-3;
}
.icon-md {
  @apply text-xl align-bottom px-4 py-2;
}
.icon-sm {
  @apply text-xl align-bottom px-4 py-1.5;
}

/* Shape */
.shape-s-pill {
  @apply rounded-s-full;
}
.shape-e-pill {
  @apply rounded-e-full;
}

.shape-s-rounded {
  @apply rounded-s-lg;
}
.shape-e-rounded {
  @apply rounded-e-lg;
}
</style>

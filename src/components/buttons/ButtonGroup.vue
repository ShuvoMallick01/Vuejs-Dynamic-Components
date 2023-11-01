<template>
  <div class="group relative">
    <button
      v-bind="!prefixIcon ? $attrs : ''"
      class="group-hover:z-10 transition-300"
      :disabled="isDisabled"
      :class="{
        'icon-default': prefixIcon && size === 'default',
        'icon-lg': prefixIcon && size === 'lg',
        'icon-sm': prefixIcon && size === 'sm',

        'btn-default': !prefixIcon && size === 'default',
        'btn-lg': !prefixIcon && size === 'lg',
        'btn-sm': !prefixIcon && size === 'sm',

        'btn-primary': variant === 'primary',
        'btn-accent': variant === 'accent',
        'btn-secondary': variant === 'secondary',
        'btn-green': variant === 'secondary',
        'btn-success': variant === 'success',
        'btn-danger': variant === 'danger',
        'btn-warning': variant === 'warning',
        'btn-info': variant === 'info',
        'btn-dark': variant === 'dark',
        'btn-light': variant === 'light',
        'btn-disabled': variant === 'disabled',

        'shape-s-default': shape === 'default',
        'shape-s-sm': shape === 'sm',
      }"
    >
      <span v-if="prefixIcon"><i :class="icon"></i></span>
      <template v-else>
        {{ title }}
      </template>
    </button>

    <span
      class="border-s group-hover:border-hidden border-white/50 absolute h-6 top-0 bottom-0 m-auto"
    ></span>

    <button
      v-bind="prefixIcon ? $attrs : ''"
      :disabled="isDisabled"
      class="transition-300"
      :class="{
        'icon-default': !prefixIcon && size === 'default',
        'icon-lg': !prefixIcon && size === 'lg',
        'icon-sm': !prefixIcon && size === 'sm',

        'btn-default': prefixIcon && size === 'default',
        'btn-lg': prefixIcon && size === 'lg',
        'btn-sm': prefixIcon && size === 'sm',

        'btn-primary': variant === 'primary',
        'btn-accent': variant === 'accent',
        'btn-secondary': variant === 'secondary',
        'btn-green': variant === 'secondary',
        'btn-success': variant === 'success',
        'btn-danger': variant === 'danger',
        'btn-warning': variant === 'warning',
        'btn-info': variant === 'info',
        'btn-dark': variant === 'dark',
        'btn-light': variant === 'light',
        'btn-disabled': variant === 'disabled',

        'shape-e-default': shape === 'default',
        'shape-s-sm': shape === 'sm',
      }"
    >
      <span v-if="!prefixIcon"><i :class="icon"></i></span>
      <template v-else>
        {{ title }}
      </template>
    </button>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  prefixIcon: { type: Boolean, default: true },
  icon: { type: String, required: true, default: "icon-alert-circle" },
  title: { type: String, required: true },
  variant: { type: String, default: "primary" },
  size: { type: String, default: "default" },
  shape: String,
  isDisabled: { type: Boolean, default: false },
});
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* Size */
  .icon-default {
    @apply text-xl align-bottom ps-5 pe-3 py-2;
  }
  .icon-lg {
    @apply text-xl align-bottom ps-5 pe-3 py-3;
  }
  .icon-sm {
    @apply text-xl align-bottom ps-5 pe-3 py-1.5;
  }

  /* Shape */
  .shape-s-default {
    @apply rounded-s-full;
  }
  .shape-e-default {
    @apply rounded-e-full;
  }
  .shape-s-sm {
    @apply rounded-s-lg;
  }
  .shape-s-sm {
    @apply rounded-e-lg;
  }
}
</style>

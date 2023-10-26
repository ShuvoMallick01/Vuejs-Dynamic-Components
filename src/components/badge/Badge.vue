<template>
  <span
    v-bind="$attrs"
    :class="{
      'badge-default': variant === 'badge-default',
      'badge-dark': variant === 'badge-dark',
      'badge-border-default': variant === 'badge-border-default',
      'badge-border-dark': variant === 'badge-border-dark',

      'badge-sm': size === 'badge-sm',
      'badge-lg': size === 'badge-lg',

      'badge-rounded-default': rounded === 'badge-rounded-default',
      'badge-rounded-full': rounded === 'badge-rounded-full',
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
  variant: { type: String, default: "badge-default" },
  size: { type: String, default: "badge-sm" },
  rounded: { type: String, default: "badge-rounded-default" },
});
</script>

<template>
  <span
    v-bind="$attrs"
    :class="{
      'badge-default': type === 'badge-default',
      'badge-dark': type === 'badge-dark',
      'badge-border-default': type === 'badge-border-default',
      'badge-border-dark': type === 'badge-border-dark',
      'badge-circle-default': type === 'badge-circle-default',
      'badge-circle-blue': type === 'badge-circle-blue',
      'badge-dismiss-default': type === 'badge-dismiss-default',

      'badge-sm': size === 'badge-sm',
      'badge-lg': size === 'badge-lg',
      'badge-sm-circle': size === 'badge-lg-circle',
      'badge-sm-dismiss': size === 'badge-sm-dismiss',

      'badge-rounded-default': rounded === 'badge-rounded-default',
      'badge-rounded-full': rounded === 'badge-rounded-full',
    }"
  >
    <slot name="prefix"></slot>
    <i v-if="prefix" :class="prefix" class="pe-1"></i>

    <slot v-if="$slots.default"></slot>
    <template v-else>{{ title }}</template>

    <i v-if="suffix" :class="suffix" class="ps-1"></i>
    <slot name="suffix"></slot>
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
  type: { type: String, default: "badge-default" },
  size: { type: String, default: "badge-sm" },
  rounded: { type: String, default: "badge-rounded-default" },
});
</script>

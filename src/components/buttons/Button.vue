<template>
  <button
    v-bind="$attrs"
    :class="{
      'btn-default': variant === 'btn-default',
      'btn-dark': variant === 'btn-dark',
      'btn-green': variant === 'btn-green',
      'btn-outline-default': variant === 'btn-outline-default',
      'btn-outline-dark': variant === 'btn-outline-dark',
      'btn-outline-green': variant === 'btn-outline-green',
      'btn-xs': size === 'btn-xs',
      'btn-sm': size === 'btn-sm',
      'btn-md': size === 'btn-md',
      'btn-rounded-default': rounded === 'btn-rounded-default',
      'btn-rounded-pill': rounded === 'btn-rounded-pill',
    }"
  >
    <i v-if="beforeIcon" :class="beforeIcon"></i>
    {{ title }}
    <i v-if="afterIcon" :class="afterIcon" id="inputName"></i>
  </button>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  afterIcon: String,
  beforeIcon: String,
  title: { type: String, required: true },
  variant: { type: String, default: "btn-default" },
  size: { type: String, default: "btn-md" },
  rounded: { type: String, default: "btn-rounded-default" },
});
</script>

<template>
  <div class="flex items-center" :class="wrapperClass">
    <input
      :class="{
        'checkbox-default': inputType === 'checkbox-default',
        'checkbox-green': inputType === 'checkbox-green',
      }"
      type="checkbox"
      v-bind="$attrs"
    />
    <slot v-if="$slots.default"></slot>

    <label
      v-else
      :class="{
        'form-label-default': labelType === 'form-label-default',
        'form-label-green': labelType === 'form-label-green',
      }"
      :for="$attrs.id"
      >{{ label }}</label
    >
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  wrapperClass: String,
  label: String,
  inputType: {
    type: String,
    default: "checkbox-default",
  },
  labelType: {
    type: String,
    default: "form-label-default",
  },
});
</script>

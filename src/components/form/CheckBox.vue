<template>
  <div class="flex items-center" :class="wrapperClass">
    <input class="text-gray-700" type="checkbox" v-bind="$attrs" />
    <slot v-if="$slots.default"></slot>
    <label v-else class="" :for="$attrs.id">{{ label }}</label>
  </div>
</template>

<script setup>
defineOptions({ inheritAttrs: false });

defineProps({
  wrapperClass: String,
  label: String,
});
</script>

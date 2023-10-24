<template>
  <div class="flex items-center" :class="wrapperClass">
    <input class="text-gray-700" type="checkbox" v-bind="$attrs" />
  </div>

  <slot></slot>
</template>

<script setup>
defineOptions({ inheritAttrs: false });

defineProps({
  wrapperClass: String,
});
</script>

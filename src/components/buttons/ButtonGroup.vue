<template>
  <div class="group relative">
    <slot name="prefixButton"></slot>

    <span
      class="border-s group-hover:border-hidden border-white/50 absolute h-6 top-0 bottom-0 m-auto"
    ></span>

    <slot name="suffixButton"></slot>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({});
</script>

<!-- STYLE -->
<style scoped></style>

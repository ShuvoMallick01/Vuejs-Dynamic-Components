<template>
  <div
    class="icon-box flex items-center gap-4 shadow-small hover:shadow-default cursor-pointer"
    :class="{
      vertical: layout === 'vertical',
      horizontal: layout === 'horizontal',
      'bg-gray-200': boxBg === 'gray',
    }"
  >
    <slot name="icon"></slot>

    <h2 class="text-gray-900 font-bold font-['Noto_Sans']">Hotels & Hotels</h2>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  boxBg: { type: String, default: "bg-white" },
  layout: { type: String, default: "vertical" },
  transition: { type: Boolean, default: true },
});
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* Layout */
  .vertical {
    @apply flex-col px-6 py-5 rounded-xl;
  }
  .horizontal {
    @apply flex-row ps-2 pe-7 rounded-full py-2;
  }
}
</style>

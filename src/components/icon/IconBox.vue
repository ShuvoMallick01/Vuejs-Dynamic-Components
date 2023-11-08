<template>
  <div
    class="icon-box flex items-center gap-4 shadow-small hover:shadow-default cursor-pointer"
    :class="{
      vertical: direction === 'vertical',
      horizontal: direction === 'horizontal',
      'bg-primary': bgColor === 'primary',
      'bg-secondary': bgColor === 'secondary',
    }"
  >
    <slot name="icon"></slot>

    <h2 class="text-gray-900 font-bold font-['Noto_Sans']">{{ title }}</h2>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  title: String,
  bgColor: { type: String, default: "bg-primary" },
  direction: { type: String, default: "vertical" },
  transition: { type: Boolean, default: true },
});
</script>

<style scoped>
/* Background Color */
.bg-primary {
  @apply bg-white;
}
.bg-secondary {
  @apply bg-gray-200;
}
/* Direction */
.vertical {
  @apply flex-col px-6 py-5 rounded-xl;
}
.horizontal {
  @apply flex-row ps-2 pe-7 rounded-full py-2;
}
</style>

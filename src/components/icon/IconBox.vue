<template>
  <div class="p-4 shadow-default flex flex-col items-center gap-3 rounded-xl">
    <Button suffix="icon-bed" type="iprimary" size="circle-lg" shape="circle">
    </Button>

    <h2
      class="text-gray-800 hover:text-primary cursor-pointer font-bold truncate"
    >
      Hotels & Hotels
    </h2>
  </div>
</template>

<script setup>
import Button from "../buttons/Button.vue";

defineOptions({
  inheritAttrs: false,
});

defineProps({
  prefix: String,
  suffix: String,
  icon: { type: String, required: true },
  type: { type: String, default: "primary" },
  size: { type: String, default: "default" },
  shape: { type: String, default: "default" },
  transition: { type: Boolean, default: true },
  isDisabled: { type: Boolean, default: false },
});
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* Size */
}
</style>

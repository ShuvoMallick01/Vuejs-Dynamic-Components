<template>
  <div class="group relative">
    <button
      class="btn-primary btn-default shape-s-default group-hover:z-10 transition-300"
    >
      Btn Combined
    </button>

    <span
      class="border-s group-hover:border-hidden border-white/50 absolute h-6 top-0 bottom-0 m-auto"
    ></span>

    <button
      class="icon-default shape-e-default transition-300"
      :class="{
        'btn-primary': type === 'primary',
        'icon-default': iconSize === 'default',
      }"
    >
      <i v-if="suffix" :class="suffix"></i>
    </button>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  prefix: { type: String, required: true, default: "icon-alert-circle" },
  suffix: { type: String, required: true, default: "icon-alert-circle" },
  title: { type: String, required: true },
  type: { type: String, default: "primary" },
  size: { type: String, default: "default" },
  iconSize: { type: String, default: "icon-default" },
  shape: { type: String, default: "default" },
  transition: { type: Boolean, default: true },
  isDisabled: { type: Boolean, default: false },
});
</script>

<style scoped>
@tailwind utilities;

@layer utilities {
  /* Size */
  .icon-default {
    @apply text-xl align-bottom px-5 py-2;
  }
  .icon-lg {
    @apply text-xl align-bottom px-5 py-2;
  }
  .icon-sm {
    @apply text-xl align-bottom px-5 py-2;
  }

  /* Shape */
  .shape-s-default {
    @apply rounded-s-full;
  }
  .shape-e-default {
    @apply rounded-e-full;
  }
  .shape-s-sm {
    @apply rounded-s-full;
  }
  .shape-e-sm {
    @apply rounded-e-full;
  }
}
</style>

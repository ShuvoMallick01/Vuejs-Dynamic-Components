<template>
  <div
    class="card rounded-lg overflow-hidden shadow-default"
    :class="{
      horizontal: variant === 'horizontal',
    }"
  >
    <div
      v-if="imgSrc"
      class="card-top relative imgHover"
      :class="{ 'w-2/5': variant === 'horizontal' }"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="h-full cursor-pointer"
        :class="{ 'object-cover object-center': variant === 'horizontal' }"
      />

      <!-- Badge -->
      <slot name="badge"></slot>
      <slot name="heart"></slot>
    </div>

    <slot name="card-body"></slot>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  imgAlt: String,
  imgSrc: String,
  variant: String,
  color: { type: String, default: "link-primary" },
  size: { type: String, default: "link-default" },
  transition: { type: Boolean, default: true },
  isDisabled: { type: Boolean, default: false },
});
</script>

<style scoped>
/* Variant */
.horizontal {
  @apply flex justify-stretch;
}
.imgHover::after {
  content: "";
  z-index: 2;
  @apply bg-black/30 absolute top-0 left-0 w-full h-full transition-all duration-300  opacity-0 cursor-pointer;
}
.card:hover .imgHover::after {
  opacity: 1;
}
</style>

<template>
  <div
    class="card"
    :class="[
      cardClass,
      {
        horizontal: isHorizontal,
      },
    ]"
  >
    <div
      v-if="imgSrc"
      class="card-top relative imgHover"
      :class="{ 'w-2/5': isHorizontal }"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="h-full cursor-pointer"
        :class="{ 'object-cover object-center': isHorizontal }"
      />

      <!-- Badge -->
      <slot name="badge"></slot>

      <!-- HeartBtn -->
      <div
        v-if="heartBtn"
        class="card-heart-icon absolute top-0 right-0 z-10 p-4 gap-1 flex flex-col items-start"
      >
        <Button
          suffix="icon-heart-default text-primary"
          type="light"
          size="circle-default"
          shape="circle"
          shadow="default"
        ></Button>
      </div>
    </div>

    <!-- Body -->
    <div v-if="cardBody" :class="bodyClass">
      <slot name="card-body"></slot>
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script setup>
import Button from "./buttons/Button.vue";

defineOptions({
  inheritAttrs: false,
});

defineProps({
  imgAlt: String,
  imgSrc: String,
  cardClass: String,
  bodyClass: String,

  isHorizontal: { type: Boolean, default: false },
  heartBtn: { type: Boolean, default: true },
  cardBody: { type: Boolean, default: false },
});
</script>

<!-- CSS -->
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

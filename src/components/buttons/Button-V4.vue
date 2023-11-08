<template>
  <button v-bind="$attrs" :disabled="isDisabled" :class="buttonClasses">
    <i v-if="prefixIcon" :class="prefixIcon"></i>
    {{ title }}
    <i v-if="suffixIcon" :class="suffixIcon"></i>
  </button>

  <button class=""></button>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { computed, ref } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  prefixIcon: String,
  suffixIcon: String,
  title: String,

  color: { type: String, default: "primary" },
  type: { type: String, default: "fill" },
  shape: { type: String, default: "pill" },
  size: { type: String, default: "btn-md" },

  shadow: String,
  isDisabled: { type: Boolean, default: false },
  // transition: { type: String, default: "transition-300" },
});

const colorTypeClass = computed(() => {
  if ((props.type === "fill") & (props.color === "primary")) {
    return `text-white text-center bg-primary hover:bg-primaryHover ring-0 dark:bg-primary dark:hover:bg-primaryHover focus:outline-none`;
  }
  if ((props.type === "fill") & (props.color === "accent")) {
    return `text-white text-center bg-accent hover:bg-violet-700 ring-0 dark:bg-accent dark:hover:bg-violet-700 focus:outline-none`;
  } else return "";
});

const buttonClasses = ref("");

const getClasses = () => {
  return [
    colorTypeClass.value,

    props.shape === "pill" ? "rounded-full" : "",
    props.shape === "rounded" ? "rounded-xl" : "",
    props.shape === "square" ? "rounded-none" : "",

    props.size === "large" ? "btn-lg" : "",
    props.size === "medium" ? "btn-md" : "",
    props.size === "small" ? "btn-sm" : "",
    props.size === "xsmall" ? "btn-xs" : "",

    props.transition ? "transition-300" : "",
  ].join(" ");
};

buttonClasses.value = getClasses();
console.log(buttonClasses.value);
</script>

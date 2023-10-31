<template>
  <button v-bind="$attrs" :class="buttonClasses">
    <i v-if="prefix" :class="prefix" class="pe-1"></i>
    {{ title }}
    <i v-if="suffix" :class="suffix" class="ps-1"></i>
  </button>
</template>

<script setup>
import { ref, computed } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  prefix: String,
  suffix: String,
  title: { type: String, required: true },
  type: { type: String, default: "primary" },
  size: String,
  shape: String,
  transition: Boolean,
  isDisabled: { type: Boolean, default: false },
});

const typeClass = computed(() => {
  switch (props.type) {
    case "primary":
      return "btn-primary";
    case "accent":
      return "btn-accent";
    case "secondary":
      return "btn-secondary";
    case "success":
      return "btn-success";
    case "danger":
      return "btn-danger";
    case "warning":
      return "btn-warning";
    case "dark":
      return "btn-dark";
    case "light":
      return "btn-light";
    case "disabled":
      return "btn-disabled";
    default:
      return "";
  }
});

const outlineClass = computed(() => {
  switch (props.type) {
    case "out-primary":
      return "outline-primary";
    case "out-accent":
      return "outline-accent";
    case "out-secondary":
      return "outline-secondary";
    case "out-success":
      return "outline-success";
    case "out-danger":
      return "outline-danger";
    case "out-warning":
      return "outline-warning";
    case "out-dark":
      return "outline-dark";
    case "out-light":
      return "outline-light";
    case "out-disabled":
      return "outline-disabled";
    default:
      return "";
  }
});

const translucentClass = computed(() => {
  switch (props.type) {
    case "trans-primary":
      return "translucent-primary";
    case "trans-accent":
      return "translucent-accent";
    case "trans-secondary":
      return "translucent-secondary";
    case "trans-success":
      return "translucent-success";
    case "trans-danger":
      return "translucent-danger";
    case "trans-warning":
      return "translucent-warning";
    case "trans-dark":
      return "translucent-dark";
    case "trans-light":
      return "translucent-light";
    case "trans-disabled":
      return "translucent-disabled";
    default:
      return "";
  }
});

const buttonClasses = ref("");

const getClasses = () => {
  return [
    typeClass.value,
    outlineClass.value,
    translucentClass.value,

    props.size === "default" ? "btn-default" : "",
    props.size === "lg" ? "btn-lg" : "",
    props.size === "sm" ? "btn-sm" : "",

    props.shape === "default" ? "shape-default" : "",
    props.shape === "sm" ? "shape-sm" : "",

    props.transition ? "transition" : "",
  ].join(" ");
};

buttonClasses.value = getClasses();
</script>

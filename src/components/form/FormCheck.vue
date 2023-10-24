<template>
  <div>
    <input class="text-primary-600 me-2" type="checkbox" v-bind="$attrs" />
    <label v-if="title" class="" :for="$attrs.id">{{ title }}</label>
  </div>
</template>

<script setup>
defineProps(["title", "modelValue"]);
defineOptions({
  inheritAttrs: false,
});
</script>

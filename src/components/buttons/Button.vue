<template>
  <button v-bind="$attrs">
    <i v-if="beforeIcon" :class="beforeIcon"></i>
    {{ title }}
    <i v-if="afterIcon" :class="afterIcon" id="inputName"></i>
  </button>
</template>

<script setup>
defineProps({
  afterIcon: String,
  beforeIcon: String,
  title: { type: String, required: true },
});
</script>

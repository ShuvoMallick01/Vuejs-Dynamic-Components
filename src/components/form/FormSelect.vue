<template>
  <label
    :for="$attrs.id"
    :class="{ required: $attrs.required, 'text-slate-600 block': true }"
    >{{ label }}</label
  >

  <select
    v-bind="$attrs"
    class="bg-slate-200"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
      :selected="item.value === modelValue"
    >
      {{ item.title }}
    </option>
  </select>
</template>

<script setup>
defineOptions({ inheritAttrs: false });

defineProps({
  label: String,
  modelValue: { type: true, default: "" },
  options: { type: Array, default: [], required: true },
});
</script>

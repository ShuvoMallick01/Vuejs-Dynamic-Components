<template>
  <label
    v-if="label"
    :for="$attrs.id"
    :class="{
      'form-label-default': labelType === 'form-label-default',
      'form-label-green': labelType === 'form-label-green',
      'block mb-2': true,
      requiredMark: $attrs.required,
    }"
    :required="$attrs.required"
    >{{ label }}
  </label>

  <select
    v-bind="$attrs"
    :class="{
      'form-input-default': inputType === 'form-input-default',
      'form-input-green': inputType === 'form-input-green',
    }"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
      :selected="item.value === modelValue"
    >
      {{ item.name }}
    </option>
  </select>
</template>

<script setup>
defineOptions({ inheritAttrs: false });

defineProps({
  label: String,
  modelValue: String,
  options: { type: Array, default: [], required: true },
  labelType: { type: String, default: "form-label-default" },
  inputType: { type: String, default: "form-input-default" },
  sizeType: { type: String, default: "form-input-size-default" },
});
</script>

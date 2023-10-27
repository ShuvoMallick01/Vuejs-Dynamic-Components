<template>
  <div>
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

    <textarea
      v-if="textarea"
      v-bind="$attrs"
      :class="{
        'form-input-default': inputType === 'form-input-default',
        'form-input-green': inputType === 'form-input-green',
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>

    <input
      v-else
      v-bind="$attrs"
      :class="{
        'form-input-default': inputType === 'form-input-default',
        'form-input-green': inputType === 'form-input-green',
        'form-input-size-default': sizeType === 'form-input-size-default',
        'form-input-size-lg': sizeType === 'form-input-size-lg',
        'form-input-size-sm': sizeType === 'form-input-size-sm',
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <slot name="helper"></slot>
  </div>
</template>

<script setup>
// import { ref } from "vue";
// const requiredMark = ref("requiredMark");

defineOptions({
  inheritAttrs: false,
});

defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, required: true },
  textarea: { type: Boolean, default: false },
  labelType: { type: String, default: "form-label-default" },
  inputType: { type: String, default: "form-input-default" },
  sizeType: { type: String, default: "form-input-size-default" },
});
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="$attrs.id"
      :class="{
        'form-label-default': labelType === 'default',
        'form-label-green': labelType === 'green',
        'block mb-2': true,
        'required-mark': $attrs.required,
      }"
      :required="$attrs.required"
      >{{ label }}
    </label>

    <slot name="prefix"></slot>

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
        'form-input-default': inputType === 'default',
        'form-input-green': inputType === 'green',
        'form-input-search': inputType === 'search',

        'form-input-size-default': sizeType === 'form-input-size-default',
        'form-input-size-lg': sizeType === 'form-input-size-lg',
        'form-input-size-sm': sizeType === 'form-input-size-sm',
        'form-search-size-default': sizeType === 'form-search-size-default',
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <slot name="suffix"></slot>
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
  label: String,
  textarea: { type: Boolean, default: false },
  labelType: { type: String, default: "form-label-default" },
  inputType: { type: String, default: "form-input-default" },
  sizeType: { type: String, default: "form-input-size-default" },
});
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="$attrs.id"
      class="block mb-2"
      :class="{
        'form-label-default': labelType === 'default',
        'form-label-green': labelType === 'green',
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
        'form-input-default': inputType === 'default',
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

        'form-input-size-default': size === 'default',
        'form-input-size-md': size === 'md',
        'form-input-size-sm': size === 'sm',
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
  labelType: { type: String, default: "form-label-default" },
  inputType: { type: String, default: "form-input-default" },
  size: { type: String, default: "form-input-size-default" },

  textarea: { type: Boolean, default: false },
});
</script>

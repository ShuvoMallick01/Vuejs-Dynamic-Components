<template>
  <div>
    <label
      v-if="labelName"
      :for="$attrs.id"
      class="block mb-2"
      :class="{
        'form-label-gray': labelColor === 'gray',
        'form-label-green': labelColor === 'green',

        'required-mark': isRequired,
      }"
      :required="$attrs.required"
      >{{ labelName }}
    </label>

    <slot name="prefix"></slot>

    <textarea
      v-if="textarea"
      v-bind="$attrs"
      rows="4"
      cols="50"
      :class="{
        'form-input-gray': inputColor === 'gray',
        'form-input-green': inputColor === 'green',
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>

    <input
      v-else
      v-bind="$attrs"
      :class="{
        'form-input-gray': inputColor === 'gray',
        'form-input-green': inputColor === 'green',
        'form-input-search': inputColor === 'search',

        'form-input-size-lg': inputSize === 'large',
        'form-input-size-md': inputSize === 'medium',
        'form-input-size-sm': inputSize === 'small',
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <slot name="suffix"></slot>
  </div>
</template>

<!-- SCIRPT -->
<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  isRequired: { type: Boolean, default: false },
  modelValue: { type: String, default: "" },

  labelName: String,
  labelColor: { type: String, default: "form-label-gray" },

  inputColor: { type: String, default: "form-input-gray" },
  inputSize: { type: String, default: "form-input-size-md" },

  textarea: { type: Boolean, default: false },
});
</script>

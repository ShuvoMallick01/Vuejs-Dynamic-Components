<template>
  <div>
    <label
      v-if="label"
      :for="$attrs.id"
      :class="{
        [labelClass]: true,
        required: $attrs.required,
        'block mb-2 ': true,
      }"
      >{{ label }}
    </label>

    <textarea
      v-if="textarea"
      v-bind="$attrs"
      class="bg-slate-300"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>

    <input
      v-else
      v-bind="$attrs"
      class="bg-slate-300 p-2 rounded-lg"
      :value="modelValue"
      @input="$emit('update:modelValue', $eventt.target.value)"
    />
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, required: true },
  textarea: { type: Boolean, default: false },
  labelClass: { type: String, default: "" },
});
</script>

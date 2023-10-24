<template>
  <div class="flex gap-5">
    <Button title="Button" class="bg-slate-300 px-6 py-2 rounded-xl" />

    <!-- Form -->
    <FormCheck
      title="Label"
      id="checkId"
      :name="'checkName'"
      value="checkValue"
    />

    <CheckBox>
      <span
        for="terms"
        class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-500"
      >
        I agree with the
        <a href="#" class="text-secondary hover: underline dark:text-gray-600"
          >Terms and condition</a
        >
      </span>
    </CheckBox>
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import Button from "./components/buttons/Button.vue";
import FormCheck from "./components/form/FormCheck.vue";
import CheckBox from "./components/form/CheckBox.vue";
</script>

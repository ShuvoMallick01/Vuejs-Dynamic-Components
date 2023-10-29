<template>
  <div class="sp space-y-3 mt-5">
    <!-- Buttons Primary -->
    <h2 class="font-bold text-lg text-slate-600">Button</h2>
    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <Button title="Primary" type="primary" size="default" shape="default" />
      <Button title="Accent" type="accent" size="default" shape="default" />
      <Button
        title="Secondary"
        type="secondary"
        size="default"
        shape="default"
      />
      <Button title="Success" type="success" size="default" shape="default" />
      <Button title="Danger" type="danger" size="default" shape="default" />
      <Button title="Warning" type="warning" size="default" shape="default" />
      <Button title="Info" type="info" size="default" shape="default" />
      <Button title="Dark" type="dark" size="default" shape="default" />
      <Button title="Light" type="light" size="default" shape="default" />

      <!-- Shape Sm Rounded -->
      <Button title="Primary" type="primary" size="default" shape="sm" />
      <Button title="Accent" type="accent" size="default" shape="sm" />
      <Button title="Secondary" type="secondary" size="default" shape="sm" />
      <Button title="Success" type="success" size="default" shape="sm" />
      <Button title="Danger" type="danger" size="default" shape="sm" />
      <Button title="Warning" type="warning" size="default" shape="sm" />
      <Button title="Info" type="info" size="default" shape="sm" />
      <Button title="Dark" type="dark" size="default" shape="sm" />
      <Button title="Light" type="light" size="default" shape="sm" />

      <!-- Outline Variation -->
      <Button title="Primary" type="out-primary" size="default" shape="sm" />
      <Button title="Accent" type="out-accent" size="default" shape="sm" />
      <Button
        title="Secondary"
        type="out-secondary"
        size="default"
        shape="sm"
      />
      <Button title="Success" type="out-success" size="default" shape="sm" />

      <!-- Translucent Variation -->
      <Button title="primary" type="trans-primary" size="default" shape="sm" />
      <Button title="Accent" type="trans-accent" size="default" shape="sm" />
      <Button title="Success" type="trans-success" size="default" shape="sm" />
      <Button title="Danger" type="trans-danger" size="default" shape="sm" />

      <!-- <Button title="Button" variant="btn-outline-default" size="btn-md" />
      <Button title="Button" variant="btn-outline-dark" size="btn-md" />
      <Button title="Button" variant="btn-outline-green" size="btn-md" />

      <Button title="Button" variant="btn-default" size="btn-md" />
      <Button title="Button" variant="btn-dark" size="btn-md" />
      <Button title="Button" variant="btn-green" size="btn-md" />

      <Button title="Button" variant="btn-outline-default" size="btn-md" />
      <Button title="Button" variant="btn-outline-dark" size="btn-md" />
      <Button title="Button" variant="btn-outline-green" size="btn-md" />

      <Button title="Button" variant="btn-default" size="btn-xs" />
      <Button title="Button" variant="btn-dark" size="btn-xs" />
      <Button title="Button" variant="btn-green" size="btn-xs" />

      <Button title="Button" variant="btn-outline-default" size="btn-xs" />
      <Button title="Button" variant="btn-outline-dark" size="btn-xs" />
      <Button title="Button" variant="btn-outline-green" size="btn-xs" />

      <Button
        title="Button"
        variant="btn-default"
        size="btn-md"
        prefix="icon-facebook-2"
      />
      <Button
        title="Download"
        variant="btn-dark"
        size="btn-sm"
        suffix="icon-download"
      />
      <Button
        title="Button"
        variant="btn-green"
        size="btn-xs"
        prefix="icon-credit-card"
      /> -->
    </div>
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { reactive, ref } from "vue";
import Button from "./components/buttons/Button.vue";
import Badge from "./components/badge/Badge.vue";
import FormSelect from "./components/form/FormSelect.vue";
import FormInput from "./components/form/FormInput.vue";
import Checkbox from "./components/form/Checkbox.vue";

const formFields = reactive({ email: "", name: "", password: "" });
const selected = ref("");
const countries = ref([
  { value: "", name: "Coose a country" },
  { value: "us", name: "United States" },
  { value: "ca", name: "Canada" },
  { value: "fr", name: "France" },
]);
</script>

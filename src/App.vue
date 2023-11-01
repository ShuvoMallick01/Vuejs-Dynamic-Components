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
      <Button
        title="Disabled"
        type="disabled"
        disabled
        size="default"
        shape="default"
      />

      <!-- Small Buttons Primary -->
      <Button title="SM Primary" type="primary" size="sm" shape="default" />
      <Button title="SM Accent" type="accent" size="sm" shape="default" />
      <Button title="SM Secondary" type="secondary" size="sm" shape="default" />
      <Button title="SM Success" type="success" size="sm" shape="default" />
      <Button title="SM Danger" type="danger" size="sm" shape="default" />

      <!-- Extra Small Buttons Primary -->
      <Button title="XS Primary" type="primary" size="xs" shape="default" />
      <Button title="XS Accent" type="accent" size="xs" shape="default" />
      <Button title="XS Secondary" type="secondary" size="xs" shape="default" />
      <Button title="XS Success" type="success" size="xs" shape="default" />
      <Button title="XS Danger" type="danger" size="xs" shape="default" />

      <!-- Big Size Buttons Primary -->
      <Button title="LG Warning" type="warning" size="lg" shape="default" />
      <Button title="LG Dark" type="dark" size="lg" shape="default" />
      <Button title="LG Light" type="light" size="lg" shape="default" />

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

      <!-- Icon Primary -->
      <Button
        title="Primary"
        type="primary"
        suffix="icon-arrow-single-right"
        size="default"
        shape="default"
      />
      <Button
        title="Accent"
        type="accent"
        size="default"
        suffix="icon-arrow-single-right"
        shape="default"
      />
      <Button
        title="Success"
        type="success"
        suffix="icon-arrow-single-right"
        size="default"
        shape="default"
      />
      <!-- Icon Primary -->
      <Button
        title="Primary"
        type="primary"
        prefix="icon-default-user"
        size="default"
        shape="default"
      />
      <Button
        title="Accent"
        type="accent"
        size="default"
        prefix="icon-default-user"
        shape="default"
      />
      <Button
        title="Success"
        type="success"
        prefix="icon-default-user"
        size="default"
        shape="default"
      />

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
    </div>
  </div>

  <!-- GROUP BUTTON -->
  <div class="sp space-y-3 mt-5">
    <!-- Buttons Primary -->
    <h2 class="font-bold text-lg text-slate-600">GROUP BUTTONS</h2>
    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="primary"
        shape="default"
        size="default"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="accent"
        shape="default"
        size="default"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="success"
        shape="default"
        size="default"
        type="submit"
      />
      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="primary"
        shape="default"
        size="default"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="false"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="accent"
        shape="default"
        size="default"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="false"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="success"
        shape="default"
        size="default"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="false"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="primary"
        shape="default"
        size="sm"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="accent"
        shape="default"
        size="sm"
        type="submit"
      />

      <ButtonGroup
        :prefixIcon="true"
        :icon="'icon-alert-circle'"
        title="Btn Combined"
        variant="success"
        shape="default"
        size="sm"
        type="submit"
      />
    </div>
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { reactive, ref } from "vue";
import Button from "./components/buttons/Button.vue";
import Button_V2 from "./components/buttons/Button_V2.vue";
import ButtonGroup from "./components/buttons/ButtonGroup.vue";
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

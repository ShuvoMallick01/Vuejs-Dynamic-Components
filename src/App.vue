<template>
  <div class="sp space-y-3 mt-5">
    <div class="flex gap-2 flex-wrap items-start">
      <Button title="Button" variant="btn-default" size="btn-md" />
      <Button title="Button" variant="btn-dark" size="btn-md" />
      <Button title="Button" variant="btn-green" size="btn-md" />

      <Button title="Button" variant="btn-outline-default" size="btn-md" />
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
    </div>

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

    <TextField
      id="name"
      type="email"
      :input="true"
      label="Label Name"
      placeholder="Type your email address"
      v-model="formFields.email"
    />

    <TextField
      :textarea="true"
      row="4"
      label="Label Name Textarea"
      id="textAreaName"
      placeholder="Type your description"
      rows="5"
      cols="50"
      v-model="formFields.inputName"
    />

    <SelectField label="Select Field" :options="roleSelect" required />
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import Button from "./components/buttons/Button.vue";
import FormCheck from "./components/form/FormCheck.vue";
import CheckBox from "./components/form/CheckBox.vue";
import TextField from "./components/form/TextField.vue";
import SelectField from "./components/form/SelectField.vue";
import { reactive, ref } from "vue";

const formFields = reactive({ email: "", inputName: "", password: "" });

const roleSelect = ref([
  { title: "Select your Role", value: "" },
  { title: "Job Seeker", value: "jobseeeker" },
  { title: "Employer", value: "employer" },
]);
</script>

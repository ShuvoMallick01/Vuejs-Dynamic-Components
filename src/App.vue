<template>
  <div class="sp space-y-3 mt-5">
    <!-- Buttons -->
    <h2 class="font-bold text-lg text-slate-600">Button</h2>
    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
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
      />
    </div>

    <!-- Badge -->
    <h2 class="font-bold text-lg text-slate-600">Badge</h2>
    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <Badge title="Badge" variant="badge-default" size="badge-sm" />
      <Badge title="Badge" variant="badge-dark" size="badge-sm" />

      <Badge title="Badge" variant="badge-border-default" size="badge-lg" />
      <Badge title="Badge" variant="badge-border-dark" size="badge-lg" />

      <Badge
        title="Badge"
        variant="badge-border-default"
        size="badge-sm"
        rounded="badge-rounded-full"
      />
      <Badge
        title="Badge"
        variant="badge-border-dark"
        size="badge-sm"
        rounded="badge-rounded-full"
      />

      <Badge
        title="Badge"
        variant="badge-default"
        size="badge-sm"
        suffix="icon-facebook-2"
      />
      <Badge
        title="Badge"
        variant="badge-dark"
        size="badge-sm"
        prefix="icon-twitter"
      />
    </div>

    <!-- Form -->
    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <FormCheck
        title="Label"
        id="checkId"
        :name="'checkName'"
        value="checkValue"
      />
    </div>

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
import { reactive, ref } from "vue";
import Button from "./components/buttons/Button.vue";
import Badge from "./components/badge/Badge.vue";
import FormCheck from "./components/form/FormCheck.vue";
import CheckBox from "./components/form/CheckBox.vue";
import TextField from "./components/form/TextField.vue";
import SelectField from "./components/form/SelectField.vue";

const formFields = reactive({ email: "", inputName: "", password: "" });

const roleSelect = ref([
  { title: "Select your Role", value: "" },
  { title: "Job Seeker", value: "jobseeeker" },
  { title: "Employer", value: "employer" },
]);
</script>

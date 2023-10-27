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
      <Badge title="Badge" type="badge-default" size="badge-sm" />
      <Badge title="Badge" type="badge-dark" size="badge-sm" />

      <Badge title="Badge" type="badge-border-default" size="badge-lg" />
      <Badge title="Badge" type="badge-border-dark" size="badge-lg" />

      <Badge
        title="Badge"
        type="badge-border-default"
        size="badge-sm"
        rounded="badge-rounded-full"
      />
      <Badge
        title="Badge"
        type="badge-border-dark"
        size="badge-sm"
        rounded="badge-rounded-full"
      />

      <Badge
        title="Badge"
        type="badge-default"
        size="badge-sm"
        suffix="icon-facebook-2"
      />
      <Badge
        title="Badge"
        type="badge-dark"
        size="badge-sm"
        prefix="icon-twitter"
      />

      <!-- Badge with Links -->
      <a class="m-0 p-0" href="#">
        <Badge
          title="Badge"
          type="badge-dark"
          class="hover:bg-blue-900"
          size="badge-sm"
          prefix="icon-twitter"
        />
      </a>

      <!-- Badge with Badge -->
      <Badge title="Badge" type="badge-default" size="badge-lg">
        <template v-slot:suffix>
          <span
            class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
          >
            2
          </span>
        </template>
      </Badge>

      <!-- Icon Badge -->
      <Badge
        type="badge-circle-default"
        size="badge-lg-circle"
        rounded="badge-rounded-full"
      >
        <svg
          class="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 16 12"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5.917 5.724 10.5 15 1.5"
          />
        </svg>
        <span class="sr-only">Icon description</span>
      </Badge>

      <Badge
        type="badge-circle-blue"
        size="badge-lg-circle"
        rounded="badge-rounded-full"
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill="currentColor"
            d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
          />
          <path
            fill="#fff"
            d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
          />
        </svg>
        <span class="sr-only">Icon description</span>
      </Badge>

      <!--  Dismissible Badges -->
      <Badge title="Badge" type="badge-dismiss-default" size="badge-sm-dismiss">
        <template v-slot:suffix>
          <button
            type="button"
            class="inline-flex items-center p-1 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
            data-dismiss-target="#badge-dismiss-default"
            aria-label="Remove"
          >
            <svg
              class="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Remove badge</span>
          </button>
        </template>
      </Badge>
    </div>

    <!-- Form Check -->
    <h2 class="font-bold text-lg text-slate-600">Form Check</h2>
    <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <div class="flex gap-2 flex-wrap items-start border-b pb-6 mb-6">
        <FormCheck
          title="Label"
          id="checkId"
          :name="'checkName'"
          value="checkValue"
        />
      </div>
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

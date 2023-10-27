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
    <div class="flex flex-col gap-2 flex-wrap items-start border-b pb-6 mb-6">
      <Checkbox label="Label Name" id="Form-Check"> </Checkbox>

      <Checkbox
        :inputType="'checkbox-green'"
        :inputlabel="'form-label-green'"
        label="Label Green"
        id="Form-green"
      >
      </Checkbox>

      <Checkbox label="Label Disable" id="Form-Check" disabled> </Checkbox>

      <Checkbox id="checkboxSlot">
        <span
          for="terms"
          class="ml-2 text-sm font-medium text-gray-800 dark:text-gray-500"
        >
          I agree with the
          <a href="#" class="text-slate-500 hover: underline dark:text-gray-600"
            >Terms and condition</a
          >
        </span>
      </Checkbox>
    </div>

    <!-- Form Input -->
    <h2 class="font-bold text-lg text-slate-600">Form Input</h2>
    <div class="space-y-6 flex-wrap items-start border-b pb-6 mb-6">
      <FormInput
        id="name"
        type="email"
        required
        label="Label Email"
        placeholder="Type your email address"
        v-model="formFields.email"
      >
      </FormInput>

      <FormInput
        id="name2"
        type="email"
        required
        label="Label Name"
        labelType="form-label-green"
        inputType="form-input-green"
        placeholder="Type your name"
        v-model="formFields.name"
      >
      </FormInput>

      <!-- form-input-size-lg -->
      <FormInput
        id="name3"
        type="email"
        required
        label="Large Size Input"
        labelType="form-label-green"
        inputType="form-input-green"
        :sizeType="'form-input-size-lg'"
        placeholder="Type your name"
      >
      </FormInput>

      <!-- form-input-size-sm -->
      <FormInput
        id="name6"
        type="email"
        required
        label="Small Size Input"
        labelType="form-label-green"
        inputType="form-input-green"
        :sizeType="'form-input-size-sm'"
        placeholder="Type your name"
      >
      </FormInput>

      <!-- Input with Helper Using Slot -->
      <FormInput
        id="name"
        type="email"
        required
        label="Input with Helper"
        placeholder="Type your email address"
        v-model="formFields.email"
      >
        <template v-slot:helper>
          <p
            id="helper-text-explanation"
            class="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            We’ll never share your details. Read our
            <a
              href="#"
              class="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >Privacy Policy</a
            >.
          </p>
        </template>
      </FormInput>

      <!-- Text Area -->
      <FormInput
        textarea
        id="message"
        rows="4"
        type="email"
        required
        label="Message Text Area"
        placeholder="Type your Message"
        v-model="formFields.name"
      >
      </FormInput>

      <!-- Form with Search Box-->
      <form>
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>

    <p>------------------------</p>

    <SelectField label="Select Field" :options="roleSelect" required />
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { reactive, ref } from "vue";
import Button from "./components/buttons/Button.vue";
import Badge from "./components/badge/Badge.vue";
import Checkbox from "./components/form/Checkbox.vue";
import TextField from "./components/form/TextField.vue";
import SelectField from "./components/form/SelectField.vue";
import FormInput from "./components/form/FormInput.vue";

const formFields = reactive({ email: "", name: "", password: "" });

const roleSelect = ref([
  { title: "Select your Role", value: "" },
  { title: "Job Seeker", value: "jobseeeker" },
  { title: "Employer", value: "employer" },
]);
</script>

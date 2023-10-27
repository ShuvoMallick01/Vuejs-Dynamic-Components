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
        <template v-slot:suffix>
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
        <div class="relative">
          <FormInput
            id="search"
            type="search"
            placeholder="Search"
            required
            input-type="form-input-search"
            size-type="form-search-size-default"
            v-model="formFields.email"
          >
            <template v-slot:prefix>
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
            </template>

            <template v-slot:suffix>
              <Button
                type="submit"
                title="Search"
                :variant="'btn-default'"
                class="absolute right-2.5 bottom-2"
              ></Button>
            </template>
          </FormInput>
        </div>
      </form>

      <!-- Icon Input -->
      <div class="relative">
        <FormInput
          id="search"
          type="search"
          placeholder="Your Email"
          required
          label="Username"
          input-type="form-input-search"
          size-type="form-search-size-default"
          v-model="formFields.email"
        >
          <template v-slot:prefix>
            <div
              class="absolute inset-y-0 mt-7 left-0 flex items-center pl-3.5 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path
                  d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
                />
                <path
                  d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
                />
              </svg>
            </div>
          </template>
        </FormInput>
      </div>
    </div>

    <!-- Form Select -->
    <h2 class="font-bold text-lg text-slate-600">Form Select</h2>
    <div class="space-y-0 flex-wrap items-start border-b pb-6 mb-6">
      <FormSelect
        id="country"
        label="Select Field"
        :options="countries"
        v-model="selected"
        required
      />
    </div>
  </div>
</template>

<!-- FUNCTIONALITY -->
<script setup>
import { reactive, ref } from "vue";
import Button from "./components/buttons/Button.vue";
import Badge from "./components/badge/Badge.vue";
import Checkbox from "./components/form/Checkbox.vue";
import FormSelect from "./components/form/FormSelect.vue";
import FormInput from "./components/form/FormInput.vue";

const formFields = reactive({ email: "", name: "", password: "" });
const selected = ref("");
const countries = ref([
  { value: "", name: "Coose a country" },
  { value: "us", name: "United States" },
  { value: "ca", name: "Canada" },
  { value: "fr", name: "France" },
]);
</script>

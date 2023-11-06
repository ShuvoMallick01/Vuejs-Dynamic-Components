<template>
  <nav class="bg-gray-200 border-gray-200 dark:bg-gray-900 rounded-xl">
    <div class="flex items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >BITSKYBER</span
        >
      </a>

      <button @click="toggleDark()" class="">
        <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
        <i
          v-if="isDark"
          class="fa-regular fa-sun hover:bg-slate-800 text-slate-100 px-4 py-3 rounded-md"
        ></i>
        <i
          v-else
          class="fa-solid fa-moon text-lg hover:bg-slate-100 px-4 py-2 rounded-md"
        ></i>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
// import { useRoute, useRouter } from "vue-router";
import { initCollapses, initFlowbite } from "flowbite";
import {
  useDark,
  useToggle,
  useElementHover,
  onClickOutside,
} from "@vueuse/core";

// STATE
// const route = useRoute();
const menu = ref([
  {
    title: "Home",
    path: "/",
    private: false,
  },

  {
    title: "Job Seekers",
    path: "/jobseeker-profile",
    private: false,
  },
  {
    title: "Employers",
    path: "/employer-profile",
    private: false,
  },
  {
    title: "Contact",
    path: "/contact",
    private: false,
  },
]);
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <RouterLink v-bind="$attrs">
    <slot></slot>
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";
</script>

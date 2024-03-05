<script setup>
// src/views/Dashboard.vue
import { ref, onMounted } from "vue";
import { newApplicationGetAll } from "../services/applications.js";
import NewApplication from "@/components/NewApplication.vue";
</script>

<template>
  <NewApplication></NewApplication>
</template>

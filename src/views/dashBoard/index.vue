<template>
        <Select enum="sexEnum" v-model="selectedValue"></Select>
</template>

<script setup lang="ts">
import { ref } from "vue";
let selectedValue = ref<number>(1);
</script>

<style scoped></style>
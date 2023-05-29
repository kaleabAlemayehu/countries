<script setup>
import { ref } from "vue";

defineProps({
  name: String,
  emoji: String,
});

const count = ref(0);
</script>

<template>
  <div
    class="w-80 h-80 bg-secondaryColor flex flex-col mx-4 my-4 rounded-2xl justify-center items-center hover:shadow-2xl transition-all duration-1000"
  >
    <div class="text-8xl py-2">{{ emoji }}</div>
    <div class="text-white text-2xl my-8">{{ name }}</div>
    <a class="text-white">View Detail</a>
  </div>
</template>

<style scoped></style>

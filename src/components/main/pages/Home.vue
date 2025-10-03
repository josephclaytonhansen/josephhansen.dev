<script setup>
  import { defineProps } from "vue"

  const props = defineProps({
    brightness: Number,
  })
</script>

<template>
  <div
    class="flex flex-col items-center justify-center w-full p-8"
    :class="{
      'text-slate-900': brightness >= 4,
      'text-slate-200': brightness <= 3,
    }">
    <h1 class="text-4xl font-bold mb-6">Welcome to josephhansen.dev</h1>
    <p class="text-lg mb-4 text-center max-w-2xl">
      This is the homepage skeleton. Add your content here.
    </p>
  </div>
</template>

<style scoped>
</style>

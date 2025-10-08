<script setup>
  import { ref } from "vue"

  defineProps({
    brightness: {
      type: Number,
      required: true,
    },
  })

  const year = ref(new Date().getFullYear())
</script>

<template>
  <footer
    :class="{
      'bg-slate-100 text-slate-800': brightness >= 4,
      'bg-slate-200 text-slate-900': brightness == 3,
      'bg-slate-900 text-slate-100': brightness == 2,
      'bg-black text-slate-100': brightness == 1,
    }"
    class="w-full py-6 px-4 sm:px-6 lg:px-8">
    <div
      class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <p class="text-sm">© {{ year }} Joseph Hansen. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Header from "./blocks/header/Header.vue"
import Hero from "./blocks/hero/Hero.vue"
import Services from "./blocks/services/Services.vue"
import messageBanner from "./blocks/messageBanner/messageBanner.vue"
import Pricing from "./pages/Pricing.vue"

import { ref, computed, onMounted } from "vue"

const brightness = ref(3)

const props = defineProps({
  component: String,
})

const handleBrightnessUpdate = (value) => {
  brightness.value = Number(value)
  let localStorage = window.localStorage
  localStorage.setItem("brightness", brightness.value)
}

const brightnessClass = computed(() => {
  switch (brightness.value) {
    case 5:
      return "bg-gradient-to-br from-sky-300 to-sky-500"
    case 4:
      return "bg-gradient-to-br from-sky-400 to-sky-600"
    case 3:
      return "bg-gradient-to-br from-slate-400 to-slate-600"
    case 2:
      return "bg-gradient-to-br from-sky-800 to-slate-800"
    case 1:
      return "bg-gradient-to-br from-slate-700 to-slate-900"
    default:
      return ""
  }
})

onMounted(() => {
  let localStorage = window.localStorage
  if (localStorage.getItem("brightness")) {
    brightness.value = Number(localStorage.getItem("brightness"))
  } else {
    localStorage.setItem("brightness", brightness.value)
  }
})
</script>

<template>
  <main
    :class="['w-dvw', brightnessClass]"
    class="md:p-7 sm:p-5"
    style="min-height: 100vh; overflow-x: hidden"
  >
    <Header @update:brightness="handleBrightnessUpdate" />

    <div class="flex justify-center w-full md:px-10 sm:px-5 mt-5">
      <div
        class="md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center"
        :class="{
          'bg-slate-200': brightness == 5,
          'bg-slate-300': brightness == 4,
          'bg-slate-600': brightness == 3,
          'bg-slate-800': brightness == 2,
          'bg-slate-900': brightness == 1,
        }"
        v-if="component == 'pricing'"
      >
        <Pricing :brightness="brightness" />
      </div>

      <div
        class="md:w-10/12 sm:w-12/12 rounded p-3"
        :class="{
          'bg-slate-200': brightness == 5,
          'bg-slate-300': brightness == 4,
          'bg-slate-600': brightness == 3,
          'bg-slate-800': brightness == 2,
          'bg-slate-900': brightness == 1,
        }"
        v-if="component == 'home'"
      >
        <Hero :brightness="brightness" />
      </div>
    </div>

    <div class="flex justify-center w-full md:px-10 sm:px-5 pt-10">
      <div
        class="md:w-10/12 sm:w-12/12 rounded p-3"
        :class="{
          'bg-slate-200': brightness == 5,
          'bg-slate-300': brightness == 4,
          'bg-slate-600': brightness == 3,
          'bg-slate-800': brightness == 2,
          'bg-slate-900': brightness == 1,
        }"
        v-if="component == 'home'"
      >
        <Services :brightness="brightness" />
      </div>
    </div>
  </main>
  <messageBanner :brightness="brightness" />
</template>

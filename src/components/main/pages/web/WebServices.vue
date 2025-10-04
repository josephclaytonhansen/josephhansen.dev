<script setup>
  import { defineProps } from "vue"
  import WebServicesHero from "../../blocks/Hero/WebServicesHero.vue"
  import Services from "../../blocks/services/Services.vue"

  const props = defineProps({
    brightness: Number,
  })
</script>

<template>
  <div>
    <WebServicesHero :brightness="brightness" />
    <Services :brightness="brightness" />
  </div>
</template>

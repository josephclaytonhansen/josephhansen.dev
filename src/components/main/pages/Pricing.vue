<script setup>
  import serviceCalculator from "../blocks/pricing/servicesCalculator/servicesCalculator.vue"

  const props = defineProps({
    brightness: Number,
  })
</script>

<template>
  <serviceCalculator :brightness="brightness" />
</template>

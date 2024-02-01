<script setup>
  const props = defineProps({
    brightness: Number,
  })

  const pClass = (brightness) => {
    if (brightness >= 4) {
      return "text-slate-800"
    } else if (brightness == 3) {
      return "text-slate-200"
    } else if (brightness == 2) {
      return "text-slate-300"
    } else if (brightness == 1) {
      return "text-slate-300"
    }
  }
</script>

<template>Bazaar</template>

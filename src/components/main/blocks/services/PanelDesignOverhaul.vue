<script setup>
  import { ref, computed, onMounted, watch } from "vue"
  import chroma from "chroma-js"
  const props = defineProps({
    brightness: Number,
  })

  const iconClass = (brightness) => {
    if (brightness >= 4) {
      return "text-emerald-500"
    } else if (brightness == 3) {
      return "text-orange-200"
    } else if (brightness == 2) {
      return "text-orange-500"
    } else if (brightness == 1) {
      return "text-orange-400"
    }
  }

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

  const alternateTableRowColors = (brightness) => {
    let rows = document.querySelectorAll("tr")

    let currentBackground
    if (brightness == 5) {
      currentBackground = chroma("#e2e8f0")
    } else if (brightness == 4) {
      currentBackground = chroma("#cbd5e1")
    } else if (brightness == 3) {
      currentBackground = chroma("#475569")
    } else if (brightness == 2) {
      currentBackground = chroma("#1e293b")
    } else if (brightness == 1) {
      currentBackground = chroma("#0f172a")
    }
    for (let i = 1; i < rows.length; i++) {
      if (i % 2 == 0) {
        rows[i].style.backgroundColor = currentBackground.brighten(0.0)
      } else {
        rows[i].style.backgroundColor = currentBackground.brighten(0.2)
      }
    }
  }

  onMounted(() => {
    alternateTableRowColors(props.brightness)
  })

  watch(
    () => props.brightness,
    (newValue, oldValue) => {
      alternateTableRowColors(newValue)
    },
  )
</script>

<template></template>

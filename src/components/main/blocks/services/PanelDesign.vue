<script setup>
  import { ref, computed, onMounted, watch } from "vue"
  const props = defineProps({
    brightness: Number,
  })

  import chroma from "chroma-js"

  import bazaarFigma from "@/assets/main/bazaarFigma.webp"
  import bazaarHero from "@/assets/main/bazaarHero.webp"

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

<template>
  <div class="flex flex-col w-full">
    <div
      class="flex w-full gap-4 p-8 items-center justify-center"
      id="panelSpeed">
      <h2 class="text-left text-5xl" :class="pClass(brightness)">
        Looking for a beautiful design?
      </h2>
    </div>

    <div class="flex w-full">
      <div class="w-auto">
        <img
          :src="bazaarFigma"
          class="rounded"
          style="height: 500px; width: auto" />
      </div>

      <div class="w-auto p-3 items-center flex">
        <moveRight size="5rem" :class="iconClass(brightness)" />
      </div>

      <div class="w-auto">
        <img
          :src="bazaarHero"
          class="rounded"
          style="height: 500px; width: auto" />
      </div>
    </div>
  </div>
</template>

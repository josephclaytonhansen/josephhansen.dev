<script setup>
  import { ref, computed, onMounted, onUnmounted } from "vue"
  const props = defineProps({
    brightness: Number,
  })

  const isRevealed = ref(false)

  onMounted(() => {
    const checkScroll = () => {
      isRevealed.value = window.scrollY > 200
      let url = window.location.href
      if (url.includes("pricing")) {
        isRevealed.value = false
      }
    }

    window.addEventListener("scroll", checkScroll)

    onUnmounted(() => {
      window.removeEventListener("scroll", checkScroll)
    })
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

<template>
  <div
    style="transition: opacity 0.5s ease-in-out"
    class="fixed bottom-0 left-0 w-screen p-2 overflow-hidden flex flex-wrap justify-center items-center gap-3 sm:text-xs md:text-sm"
    :class="{
      'bg-slate-100': brightness == 5,
      'bg-slate-400': brightness == 4,
      'bg-slate-500': brightness == 3,
      'bg-slate-700': brightness == 2,
      'bg-slate-800': brightness == 1,
      'opacity-0': !isRevealed,
      'opacity-100': isRevealed,
    }">
    <p class="text-center" :class="pClass(brightness)">
      Get a free site speed audit with recommendations for optimizing. My gift
      to you.
    </p>
    <a href="/pricing"
      ><button
        class="rounded px-5 py-2 text-white font-semibold"
        :class="{
          'bg-emerald-600': brightness >= 4,
          'bg-orange-700': brightness == 3,
          'bg-orange-600': brightness == 2,
          'bg-orange-500': brightness == 1,
        }">
        Get a Free Audit
      </button></a
    >
  </div>
</template>

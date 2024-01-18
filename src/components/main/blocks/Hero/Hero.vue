<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUpdate,
  watch,
  onUnmounted,
} from "vue"

const props = defineProps({
  brightness: Number,
})

const headlines = ref([
  "super fast",
  "responsive",
  "beautiful",
  "secure",
  "accessible",
  "easy to use",
  "efficient",
  "ultra-functional",
  "simple to use",
  "powerful",
  "optimized",
  "SEO-optimized",
  "lightning fast",
  "lightweight",
  "perfectly customized",
  "perfectly tailored",
  "blazing fast",
  "extremely secure",
  "beautifully designed",
  "high-quality",
  "precisely optimized",
  "precisely tailored",
  "your dream",
  "your perfect",
  "your ideal",
  "your projects'",
])

let index = ref(0)
let isAnimating = ref(false)

onMounted(() => {
  headlines.value = headlines.value.sort(() => Math.random() - 0.5)
  setInterval(() => {
    if (!isAnimating.value) {
      isAnimating.value = true
      index.value = (index.value + 1) % headlines.value.length
    }
  }, 4000)

  const handleMouseDown = () => {
    isAnimating.value = false
  }

  const handleMouseUp = () => {
    isAnimating.value = true
  }

  window.addEventListener("mousedown", handleMouseDown)
  window.addEventListener("mouseup", handleMouseUp)

  onUnmounted(() => {
    window.removeEventListener("mousedown", handleMouseDown)
    window.removeEventListener("mouseup", handleMouseUp)
  })
})

onBeforeUpdate(() => {
  isAnimating.value = false
})

const currentHeadline = computed(() => headlines.value[index.value])
</script>

<template>
  <div class="flex justify-center py-5 flex-col">
    <h1
      class="text-4xl font-semibold font-serif relative align-top text-center py-5"
      :class="{
        'text-slate-900': brightness == 5,
        'text-slate-800': brightness == 4,
        'text-slate-300': brightness == 3,
        'text-slate-200': brightness == 2,
        'text-slate-400': brightness == 1,
      }"
    >
      I make
      <div class="inline-block relative">
        <span
          class="font-semibold text-center px-1"
          v-typewriter="currentHeadline"
          >{{ currentHeadline }}</span
        >
        <div
          class="absolute bottom-1 left-0 right-0 border-b-2"
          :class="{
            'border-emerald-500 ': brightness >= 4,
            'border-orange-200': brightness == 3,
            'border-orange-500': brightness == 2,
            'border-orange-400': brightness == 1,
          }"
        ></div>
      </div>
      websites.
    </h1>
    <p
      class="text-center text-slate-500 font-sans pt-5"
      :class="{
        'text-slate-800': brightness == 5,
        'text-slate-700': brightness == 4,
        'text-slate-400': brightness == 3,
        'text-slate-300': brightness == 2,
        'text-slate-500': brightness == 1,
      }"
    >
      Hi, I'm Joseph. I'm a full-stack web developer. What can I do for you?
    </p>
    <div class="flex py-5 justify-center gap-3 w-full">
      <button
        class="rounded px-5 py-2 text-white font-semibold"
        :class="{
          'bg-emerald-600': brightness >= 4,
          'bg-slate-500': brightness == 3,
          'bg-orange-600': brightness == 2,
          'bg-orange-500': brightness == 1,
        }"
      >
        Portfolio
      </button>
      <a href="/pricing"
        ><button
          class="rounded px-5 py-2 text-white font-semibold"
          :class="{
            'bg-slate-700': brightness >= 4,
            'bg-slate-500': brightness == 3,
            'bg-slate-400': brightness <= 2,
          }"
        >
          Get a Quote
        </button></a
      >
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    typewriter: {
      beforeUpdate(el, binding) {
        if (binding.oldValue !== binding.value) {
          let text = binding.value
          let delay = Math.random() * 100 + 25
          el.textContent = ""
          text.split("").forEach((char, i) => {
            setTimeout(() => {
              el.textContent += char
            }, delay * i)
          })
        }
      },
    },
  },
}
</script>

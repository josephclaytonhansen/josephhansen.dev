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

  const iconClass = (brightness) => {
    if (brightness >= 4) {
      return "text-emerald-500"
    } else if (brightness == 3) {
      return "text-orange-600"
    } else if (brightness == 2) {
      return "text-orange-500"
    } else if (brightness == 1) {
      return "text-orange-400"
    }
  }

  import { ref } from "vue"
  import {
    siWordpress,
    siVuedotjs,
    siPhp,
    siFigma,
    siJavascript,
    siNginx,
    siCloudflare,
    siTailwindcss,
    siReact,
    siBootstrap,
  } from "simple-icons"

  const fullWidthcards = ref([
    {
      icons: [siWordpress, siPhp, siFigma],
      title: "BlenderNation Bazaar",
      image:
        "https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp",
      link: "",
    },
    {
      icons: [siVuedotjs, siNginx, siCloudflare],
      title: "OKC South Stake",
      image:
        "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327228231.webp",
      link: "",
    },
  ])

  const thirdCards = ref([
    {
      icons: [siWordpress, siJavascript],
      title: "Build On Your Land",
      image:
        "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327309879.webp",
      link: "",
    },
    {
      icons: [siWordpress, siPhp],
      title: "Stuart Pipe and Hose",
      image:
        "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327408619.webp",
      link: "",
    },
    {
      icons: [siWordpress, siBootstrap],
      title: "Atlanta Floor One",
      image:
        "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327469595.webp",
      link: "",
    },
    {
      icons: [siWordpress, siBootstrap],
      title: "Swim State Pool",
      image:
        "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327599394.webp",
      link: "",
    },
    {
      title: "josephhansen.dev",
      icons: [siVuedotjs, siTailwindcss],
      image:
        "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327789450.webp",
      link: "",
    },
    {
      title: "Tub Boys",
      icons: [siWordpress, siBootstrap],
      image:
        "https://images.josephhansen.dev/uploads/file2024-01-2621-1706327660749.webp",
      link: "",
    },
  ])

  const hoveredCard = ref(null)
</script>

<template>
  <div class="flex-col w-full lg:w-9/12 md:w-10/12 sm:wd-11/12">
    <div class="py-5 flex-col w-full">
      <span class="prose">
        <h2
          class="text-5xl text-center text-semibold"
          :class="pClass(props.brightness)">
          Web Portfolio
        </h2>
        <p class="text-center" :class="pClass(props.brightness)">
          I've been working on websites for over a decade. I love the creativity
          and problem solving that goes into a hiqh-quality website. Check out
          some of my work below!
        </p>
        <h3 class="text-2xl text-center" :class="pClass(props.brightness)">
          Full Sites (I designed and developed)
        </h3>
      </span>
    </div>

    <div
      class="grid md:grid-cols-none gap-4 w-full"
      v-for="w in [fullWidthcards, thirdCards]"
      :class="{
        'lg:grid-cols-2': w == fullWidthcards,
        'lg:grid-cols-3 mt-4': w == thirdCards,
      }">
      <div
        class="flex flex-col justify-end rounded-xl portfolioCard"
        v-for="cards in w"
        :key="cards.title"
        @mouseover="hoveredCard = cards.title"
        @mouseleave="hoveredCard = null"
        :style="{
          opacity:
            hoveredCard === cards.title || hoveredCard === null ? 1 : 0.7,
        }">
        <div>
          <img
            :src="cards.image"
            :alt="cards.title"
            class="bg-slate-200 object-contain w-full rounded-t-xl" />
        </div>
        <div>
          <div>
            <div
              class="p-4 flex justify-between items-center rounded-b-xl"
              :class="{
                'bg-slate-300': brightness == 5,
                'bg-slate-200': brightness == 4,
                'bg-slate-300': brightness == 3,
                'bg-slate-500': brightness == 2,
                'bg-slate-600': brightness == 1,
              }">
              <div>
                <h5
                  class="text-xl m-0 p-0"
                  :class="iconClass(props.brightness)">
                  {{ cards.title }}
                </h5>
              </div>

              <div class="flex gap-2 items-center">
                <div
                  v-for="(icon, index) in cards.icons"
                  :key="index"
                  class="block"
                  :class="{
                    'text-slate-800': brightness == 5,
                    'text-slate-800': brightness == 4,
                    'text-slate-800': brightness == 3,
                    'text-slate-200': brightness == 2,
                    'text-slate-200': brightness == 1,
                  }">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="24px"
                    height="24px">
                    <path :d="icon.path" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .portfolioCard {
    transition: all 0.2s ease-out;
  }
</style>

<script setup>
  import {
    bazaarHome,
    okcssHome,
    boylHome,
    stuartHome,
    atlantaHome,
    swimHome,
    josephhansenHome,
    tubHome,
    stehlHome,
    arrisHome,
  } from "../../images/imageLinks.js"

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
    siBootstrap,
  } from "simple-icons"

  const fullWidthcards = ref([
    {
      icons: [siWordpress, siPhp, siFigma],
      title: "BlenderNation Bazaar",
      image: bazaarHome,
      link: "/portfolio/bazaar",
    },
    {
      icons: [siVuedotjs, siNginx, siCloudflare],
      title: "OKC South Stake",
      image: okcssHome,
      link: "/portfolio/okc-south-stake",
    },
  ])

  const thirdCards = ref([
    {
      icons: [siWordpress, siJavascript],
      title: "Build On Your Land",
      image: boylHome,
      link: "/portfolio/build-on-your-land",
    },
    {
      icons: [siWordpress, siPhp],
      title: "Stuart Pipe and Hose",
      image: stuartHome,
      link: "/portfolio/stuart-pipe",
    },
    {
      icons: [siWordpress, siBootstrap],
      title: "Atlanta Floor One",
      image: atlantaHome,
      link: "/portfolio/atlanta-floor-one",
    },
    {
      icons: [siWordpress, siBootstrap],
      title: "Swim State Pool",
      image: swimHome,
      link: "/portfolio/swim-state-pool",
    },
    {
      title: "josephhansen.dev",
      icons: [siVuedotjs, siTailwindcss],
      image: josephhansenHome,
      link: "/portfolio/josephhansen-dev",
    },
    {
      title: "Tub Boys",
      icons: [siWordpress, siBootstrap],
      image: tubHome,
      link: "/portfolio/tub-boys",
    },
    {
      title: "Stehl Family Dental",
      icons: [siWordpress, siBootstrap],
      image: stehlHome,
      link: "/portfolio/stehl-family-dental",
    },
    {
      title: "Aris",
      icons: [siWordpress, siBootstrap],
      image: arrisHome,
      link: "/portfolio/aris-search",
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
        @click="$router.push(cards.link)"
        :style="{
          opacity:
            hoveredCard === cards.title || hoveredCard === null ? 1 : 0.7,
        }">
        <div class="image-container">
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
  .image-container {
    position: relative;
    width: 100%;
    padding-top: 58%;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

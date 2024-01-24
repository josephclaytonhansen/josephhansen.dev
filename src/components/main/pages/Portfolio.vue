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
      return "text-orange-200"
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
    siCss3,
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
        "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "",
      width: "w-full",
    },
    {
      icons: [siVuedotjs, siNginx, siCloudflare],
      title: "OKC South Stake",
      image:
        "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
      excerpt: "Excerpt",
      link: "",
    },
  ])

  const thirdCards = ref([
    {
      icons: [siWordpress, siPhp, siJavascript],
      title: "Build On Your Land",
      image:
        "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
      excerpt: "",
      link: "",
    },
    {
      icons: [siWordpress, siPhp, siCss3],
      title: "Stuart Pipe and Hose",
      image: "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
      excerpt: "",
      link: "",
    },
    {
      icons: [siWordpress, siBootstrap, siCss3],
      title: "Atlanta Floor One",
      image: "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
      excerpt: "",
      link: "",
    },
    {
      icons: [siWordpress, siBootstrap, siCss3],
      title: "Swim State Pool",
      image: "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
      excerpt: "",
      link: "",
    },
    {
      title: 'josephhansen.dev',
      icons: [siVuedotjs, siTailwindcss, siNginx],
      image: "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
      excerpt: "",
      link: "",
      
    },
    {
      title: 'Nonsense Free Recipes',
      icons: [siReact, siBootstrap, siNginx],
      image: "https://images.josephhansen.dev/uploads/fileIMG_3533.png-1705724032543.webp",
      excerpt: "",
      link: "",
    }
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
    
    <div class="grid lg:grid-cols-2 md:grid-cols-none gap-4 w-full">
      <div
        class="flex flex-col justify-end rounded-xl portfolioCard"
        v-for="cards in fullWidthcards" :key="cards.title" @mouseover="hoveredCard = cards.title"
      @mouseleave="hoveredCard = null"
      :style="{ opacity: hoveredCard === cards.title || hoveredCard === null ? 1 : 0.5 }">
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

    <div class ="grid lg:grid-cols-3 md:grids-col-1 gap-4 w-full mt-4">
      <div
        class="flex flex-col justify-end rounded-xl portfolioCard" @mouseover="hoveredCard = cards.title"
      @mouseleave="hoveredCard = null"
      :style="{ opacity: hoveredCard === cards.title || hoveredCard === null ? 1 : 0.5 }"
        v-for="cards in thirdCards" :key="cards.title">
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
    transition: all 0.2s ease-in-out;
  }

</style>
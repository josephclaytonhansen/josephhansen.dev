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

  import { ref } from "vue"
  import {
    siWordpress,
    siVuedotjs,
    siPhp,
    siHtml5,
    siCss3,
    siJavascript,
    siNginx,
    siCloudflare,
  } from "simple-icons"

  const fullWidthcards = ref([
    {
      icons: [siWordpress, siPhp],
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
      excerpt: "",
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
      width: "w-full",
    },
    {
      icons: [siWordpress, siPhp, siCss3],
      title: "Stuart Pipe and Hose",
      image: "",
      excerpt: "",
      link: "",
      width: "w-1/3",
    },
    {
      icons: [siWordpress, siPhp, siCss3],
      title: "Atlanta Floor One",
      image: "",
      excerpt: "",
      link: "",
      width: "w-1/3",
    },
    {
      icons: [siWordpress, siPhp, siCss3],
      title: "Swim State Pool",
      image: "",
      excerpt: "",
      link: "",
      width: "w-1/3",
    },
  ])
</script>

<template>
  <div class="flex-col">
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
        class="flex-col rounded-xl"
        v-for="cards in fullWidthcards"
        :class="{
          'bg-slate-100': brightness == 5,
          'bg-slate-400': brightness == 4,
          'bg-slate-500': brightness == 3,
          'bg-slate-700': brightness == 2,
          'bg-slate-800': brightness == 1,
        }">
        <div>
          <img
            :src="cards.image"
            :alt="cards.title"
            class="bg-slate-200 object-contain w-full rounded-t-xl" />
        </div>
        <div><div>
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
                :class="{
                  'text-slate-800': brightness == 5,
                  'text-slate-800': brightness == 4,
                  'text-slate-800': brightness == 3,
                  'text-slate-200': brightness == 2,
                  'text-slate-200': brightness == 1,
                }">
                {{ cards.title }}
              </h5>
            </div>

            <div class="flex gap-2 items-center">
              <div
                v-for="(icon, index) in cards.icons"
                :key="index"
                class="block"
                :class="pClass(props.brightness)">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="24px"
                  height="24px">
                  <path :d="icon.path" />
                </svg>
              </div>
            </div></div>
          </div>
          <p class="text-slate-500" :class="pClass(props.brightness)">
            {{ cards.excerpt }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

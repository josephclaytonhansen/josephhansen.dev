<script setup>
  import { defineProps, ref, computed, onMounted } from "vue"
  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"

  import {
    siBootstrap,
    siTailwindcss,
    siPhp,
    siFirebase,
    siGoogleanalytics,
    siWordpress,
    siVuedotjs,
    siJavascript,
    siMysql,
    siCss3,
    siHtml5,
    siGit,
    siAdobephotoshop,
    siCanva,
    siAdobe,
  } from "simple-icons"

  const props = defineProps({
    brightness: Number,
  })

  let getIconColor = (brightness, simpleIcon) => {
    if (brightness >= 4) {
      return `#${simpleIcon.hex}`
    } else if (brightness == 3) {
      return "#fed7aa"
    } else if (brightness == 2) {
      return "#fb923c"
    } else if (brightness == 1) {
      return "#f97316"
    }
  }

  const fullWidthcards = ref([
    {
      title: "Stehl Family Dental",
      path: "stehl-family-dental",
      images: [
        "stehl-family-dental-01.webp",
        "stehl-family-dental-02.webp",
        "stehl-family-dental-03.webp",
      ],
      tags: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
      icons: [siHtml5, siCss3, siPhp, siBootstrap, siMysql],
      slug: "A dentist wanted a new website that would help them stand out in their local area.",
    },
    {
      title: "Stuart Pipe & Hose",
      path: "stuart-pipe-and-hose",
      images: [
        "stuart-pipe-and-hose-01.webp",
        "stuart-pipe-and-hose-02.webp",
        "stuart-pipe-and-hose-03.webp",
      ],
      tags: ["HTML", "CSS", "PHP", "MySQL"],
      icons: [siHtml5, siCss3, siPhp, siMysql],
      slug: "A small repair shop wanted a new website that would help them organize and promote their work.",
    },
    {
      title: "SwimState Pool Services",
      path: "swim-state-pool",
      images: [
        "swim-state-pool-01.webp",
        "swim-state-pool-02.webp",
        "swim-state-pool-03.webp",
      ],
      tags: ["HTML", "CSS", "Bootstrap", "jQuery"],
      icons: [siHtml5, siCss3, siBootstrap, siJavascript],
      slug: "A pool service company wanted a custom website to help them grow their business.",
    },
    {
      title: "AtlantaFloorOne",
      path: "atlanta-floor-one",
      images: [
        "atlanta-floor-one-01.webp",
        "atlanta-floor-one-02.webp",
        "atlanta-floor-one-03.webp",
      ],
      tags: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
      icons: [siHtml5, siCss3, siPhp, siBootstrap, siMysql],
      slug: "A flooring company wanted a new website to help them showcase their work and get more customers.",
    },
    {
      title: "OKC South Stake",
      path: "okc-south-stake",
      images: [
        "okc-south-stake-01.webp",
        "okc-south-stake-02.webp",
        "okc-south-stake-03.webp",
      ],
      tags: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL"],
      icons: [siHtml5, siCss3, siPhp, siBootstrap, siMysql],
      slug: "A religious organization needed a website to help members stay connected and informed.",
    },
    {
      title: "Build On Your Land",
      path: "build-on-your-land",
      images: [
        "build-on-your-land-01.webp",
        "build-on-your-land-02.webp",
        "build-on-your-land-03.webp",
      ],
      tags: ["HTML", "CSS", "PHP", "Bootstrap", "jQuery", "MySQL"],
      icons: [siHtml5, siCss3, siPhp, siBootstrap, siJavascript, siMysql],
      slug: "A land development company needed a website to help potential customers understand their services.",
    },
    {
      title: "Tub Boys",
      path: "tub-boys",
      images: ["tub-boys-01.webp", "tub-boys-02.webp", "tub-boys-03.webp"],
      tags: ["HTML", "CSS", "Bootstrap", "Google Analytics"],
      icons: [siHtml5, siCss3, siBootstrap, siGoogleanalytics],
      slug: "A bathtub refinishing company needed a new website to help them get more customers.",
    },
    {
      title: "Bazaar",
      path: "bazaar",
      images: ["bazaar-01.webp", "bazaar-02.webp", "bazaar-03.webp"],
      tags: ["WordPress", "CSS"],
      icons: [siWordpress, siCss3],
      slug: "A marketplace needed a custom WordPress theme to help them sell more products.",
    },
  ])

  const thirdCards = ref([
    {
      title: "ARIS Search",
      path: "aris-search",
      images: ["aris-search-01.webp"],
      tags: ["Vue.js", "Tailwind CSS"],
      icons: [siVuedotjs, siTailwindcss],
      slug: "A UX design studio wanted a new website to showcase their work.",
    },
    {
      title: "Chai.",
      path: "chai",
      images: ["chai-01.webp"],
      tags: ["Vue.js", "Tailwind CSS", "Firebase"],
      icons: [siVuedotjs, siTailwindcss, siFirebase],
      slug: "A coffee shop needed a website to help them promote their business.",
    },
    {
      title: "Feed Council",
      path: "feed-council",
      images: ["feed-council-01.webp"],
      tags: ["WordPress", "CSS", "Adobe Photoshop", "Canva"],
      icons: [siWordpress, siCss3, siAdobephotoshop, siCanva],
      slug: "A nonprofit needed a new website to help them get more donations.",
    },
    {
      title: "josephhansen.dev",
      path: "joseph-hansen-dev",
      images: ["joseph-hansen-dev-01.webp"],
      tags: ["Vue.js", "Tailwind CSS", "Vite", "Git"],
      icons: [siVuedotjs, siTailwindcss, siAdobe, siGit],
      slug: "I built this website to showcase my work and help potential clients learn about me.",
    },
  ])

  let imagePath = (cardType, card, image) => {
    return `/src/assets/main/${cardType}/${card.path}/${image}`
  }

  let portfolioCardStyle = (brightness) => {
    if (brightness == 5) {
      return "border border-slate-400 bg-slate-400"
    } else if (brightness == 4) {
      return "border border-slate-300 bg-slate-300"
    } else if (brightness == 3) {
      return "border border-slate-600 bg-slate-600"
    } else if (brightness == 2) {
      return "border border-slate-800 bg-slate-800"
    } else if (brightness == 1) {
      return "border border-slate-900 bg-slate-900"
    }
  }

  let portfolioCardHover = (brightness) => {
    if (brightness == 5) {
      return "hover:border-emerald-600"
    } else if (brightness == 4) {
      return "hover:border-emerald-600"
    } else if (brightness == 3) {
      return "hover:border-orange-200"
    } else if (brightness == 2) {
      return "hover:border-orange-500"
    } else if (brightness == 1) {
      return "hover:border-orange-400"
    }
  }

  let portfolioCardTextColor = (brightness) => {
    if (brightness == 5) {
      return "text-slate-900"
    } else if (brightness == 4) {
      return "text-slate-800"
    } else if (brightness == 3) {
      return "text-slate-300"
    } else if (brightness == 2) {
      return "text-slate-200"
    } else if (brightness == 1) {
      return "text-slate-400"
    }
  }

  let portfolioCardBackgroundColor = (brightness) => {
    if (brightness == 5) {
      return "bg-slate-300"
    } else if (brightness == 4) {
      return "bg-slate-200"
    } else if (brightness == 3) {
      return "bg-slate-700"
    } else if (brightness == 2) {
      return "bg-slate-900"
    } else if (brightness == 1) {
      return "bg-black"
    }
  }

  let portfolioCardTagBackground = (brightness) => {
    if (brightness == 5) {
      return "bg-slate-800"
    } else if (brightness == 4) {
      return "bg-slate-700"
    } else if (brightness == 3) {
      return "bg-orange-200"
    } else if (brightness == 2) {
      return "bg-orange-500"
    } else if (brightness == 1) {
      return "bg-orange-400"
    }
  }

  let portfolioCardTagText = (brightness) => {
    if (brightness == 5) {
      return "text-slate-200"
    } else if (brightness == 4) {
      return "text-slate-200"
    } else if (brightness == 3) {
      return "text-slate-800"
    } else if (brightness == 2) {
      return "text-slate-800"
    } else if (brightness == 1) {
      return "text-slate-800"
    }
  }
</script>

<template>
  <div class="py-5 flex justify-center">
    <div class="w-full max-w-6xl">
      <h1
        class="text-4xl font-semibold font-sans relative align-top text-center py-5"
        :class="portfolioCardTextColor(brightness)">
        Recent Projects
      </h1>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5">
        <div
          v-for="card in thirdCards"
          :key="card.path"
          class="rounded p-5 transition-all duration-300 cursor-pointer"
          :class="
            portfolioCardStyle(brightness) +
            ' ' +
            portfolioCardHover(brightness)
          "
          @click="$router.push(`/web-portfolio/${card.path}`)">
          <div class="overflow-hidden rounded">
            <sliderAndGallery
              :images="card.images"
              :card-type="'thirdCards'"
              :card-path="card.path"
              :brightness="brightness" />
          </div>
          <h3
            class="text-lg font-semibold mt-3"
            :class="portfolioCardTextColor(brightness)">
            {{ card.title }}
          </h3>
          <p class="text-sm mt-2" :class="portfolioCardTextColor(brightness)">
            {{ card.slug }}
          </p>
          <div class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="icon in card.icons"
              :key="icon.title"
              class="text-xs px-2 py-1 rounded flex items-center gap-1"
              :class="
                portfolioCardTagBackground(brightness) +
                ' ' +
                portfolioCardTagText(brightness)
              ">
              <svg
                :viewBox="icon.viewBox"
                class="w-3 h-3"
                :fill="getIconColor(brightness, icon)">
                <path :d="icon.path" />
              </svg>
              {{ icon.title }}
            </span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
        <div
          v-for="card in fullWidthcards"
          :key="card.path"
          class="rounded p-5 transition-all duration-300 cursor-pointer"
          :class="
            portfolioCardStyle(brightness) +
            ' ' +
            portfolioCardHover(brightness)
          "
          @click="$router.push(`/web-portfolio/${card.path}`)">
          <div class="overflow-hidden rounded">
            <sliderAndGallery
              :images="card.images"
              :card-type="'fullWidthcards'"
              :card-path="card.path"
              :brightness="brightness" />
          </div>
          <h3
            class="text-lg font-semibold mt-3"
            :class="portfolioCardTextColor(brightness)">
            {{ card.title }}
          </h3>
          <p class="text-sm mt-2" :class="portfolioCardTextColor(brightness)">
            {{ card.slug }}
          </p>
          <div class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="icon in card.icons"
              :key="icon.title"
              class="text-xs px-2 py-1 rounded flex items-center gap-1"
              :class="
                portfolioCardTagBackground(brightness) +
                ' ' +
                portfolioCardTagText(brightness)
              ">
              <svg
                :viewBox="icon.viewBox"
                class="w-3 h-3"
                :fill="getIconColor(brightness, icon)">
                <path :d="icon.path" />
              </svg>
              {{ icon.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

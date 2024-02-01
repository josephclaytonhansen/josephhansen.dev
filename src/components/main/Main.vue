<script setup>
  import Header from "./blocks/header/Header.vue"
  import Hero from "./blocks/hero/Hero.vue"
  import Services from "./blocks/services/Services.vue"
  import messageBanner from "./blocks/messageBanner/messageBanner.vue"
  import Pricing from "./pages/Pricing.vue"
  import Contact from "./pages/Contact.vue"
  import AboutMe from "./pages/AboutMe.vue"
  import Portfolio from "./pages/Portfolio.vue"

  import { ref, computed, onMounted, watchEffect, reactive } from "vue"
  
  import Bazaar from "./pages/portfolio/Bazaar.vue"
  import OkcSouthStake from "./pages/portfolio/OkcSouthStake.vue"
  import ArisSearch from "./pages/portfolio/ArisSearch.vue"
  import AtlantaFloorOne from "./pages/portfolio/AtlantaFloorOne.vue"
  import BuildOnYourLand from "./pages/portfolio/BuildOnYourLand.vue"
  import StehlFamilyDental from "./pages/portfolio/StehlFamilyDental.vue"
  import TubBoys from "./pages/portfolio/TubBoys.vue"
  import StuartPipeAndHose from "./pages/portfolio/StuartPipeAndHose.vue"
  import SwimStatePool from "./pages/portfolio/SwimStatePool.vue"

  const brightness = ref(1)

  const props = defineProps({
    component: String,
  })

  const handleBrightnessUpdate = (value) => {
    brightness.value = Number(value)
    let localStorage = window.localStorage
    localStorage.setItem("brightness", brightness.value)
  }

  const portfolioSubpages = {
  "okc-south-stake": OkcSouthStake,
        "aris-search": ArisSearch,
        "atlanta-floor-one": AtlantaFloorOne,
        "build-on-your-land": BuildOnYourLand,
        "stehl-family-dental": StehlFamilyDental,
        "tub-boys": TubBoys,
        "stuart-pipe": StuartPipeAndHose,
        "swim-state-pool": SwimStatePool,
        "bazaar": Bazaar,
  }

  const brightnessClass = computed(() => {
    switch (brightness.value) {
      case 5:
        return "bg-gradient-to-br from-sky-300 to-sky-500"
      case 4:
        return "bg-gradient-to-br from-sky-400 to-sky-600"
      case 3:
        return "bg-gradient-to-br from-slate-400 to-slate-600"
      case 2:
        return "bg-gradient-to-br from-sky-800 to-slate-800"
      case 1:
        return "bg-gradient-to-br from-slate-700 to-slate-900"
      default:
        return ""
    }
  })

  onMounted(() => {
    let localStorage = window.localStorage
    if (localStorage.getItem("brightness")) {
      brightness.value = Number(localStorage.getItem("brightness"))
    } else {
      localStorage.setItem("brightness", brightness.value)
    }

    if (props.component == "pricing") {
      meta.title = "josephhansen.dev | web developer/designer | pricing"
      meta.meta[1].content =
        "josephhansen.dev | web developer/designer | pricing"
      meta.meta[6].content =
        "josephhansen.dev | web developer/designer | pricing"
      meta.meta[4].content = "https://josephhansen.dev/pricing"
      meta.meta[9].content = "https://josephhansen.dev/pricing"
    } else if (props.component == "contact") {
      meta.title = "josephhansen.dev | web developer/designer | contact"
      meta.meta[1].content =
        "josephhansen.dev | web developer/designer | contact"
      meta.meta[6].content =
        "josephhansen.dev | web developer/designer | contact"
      meta.meta[4].content = "https://josephhansen.dev/contact"
      meta.meta[9].content = "https://josephhansen.dev/contact"
    } else if (props.component == "about") {
      meta.title = "josephhansen.dev | web developer/designer | about"
      meta.meta[1].content = "josephhansen.dev | web developer/designer | about"
      meta.meta[6].content = "josephhansen.dev | web developer/designer | about"
      meta.meta[4].content = "https://josephhansen.dev/about"
      meta.meta[9].content = "https://josephhansen.dev/about"
    } else if (props.component == "portfolio") {
      meta.title = "josephhansen.dev | web developer/designer | portfolio"
      meta.meta[1].content =
        "josephhansen.dev | web developer/designer | portfolio"
      meta.meta[6].content =
        "josephhansen.dev | web developer/designer | portfolio"
      meta.meta[4].content = "https://josephhansen.dev/portfolio"
      meta.meta[9].content = "https://josephhansen.dev/portfolio"
    }  else {
      let options = portfolioSubpages
      options.forEach((option) => {
        if (Object.keys(option)[0] == props.component) {
          let deSlugged = props.component.replace(/-/g, " ")
          meta.title = `josephhansen.dev | web developer/designer | ${deSlugged}`
          meta.meta[1].content = `josephhansen.dev | web developer/designer | ${deSlugged}`
          meta.meta[6].content = `josephhansen.dev | web developer/designer | ${deSlugged}`
          meta.meta[4].content = `https://josephhansen.dev/portfolio/${props.component}`
          meta.meta[9].content = `https://josephhansen.dev/portfolio/${props.component}`
        }
      })
    }
  })

  const meta = reactive({
    title: "josephhansen.dev | web developer/designer",
    meta: [
      {
        name: "description",
        content:
          "Better, cheaper, and faster than an agency. Let me help you make your website incredible. | Expert in WordPress, Shopify, Vue, React, and more | Website speedups, optimizations, web security, web accessibility, design, custom web development",
      },
      {
        property: "og:title",
        content: "josephhansen.dev | web developer/designer",
      },
      {
        property: "og:description",
        content:
          "Better, cheaper, and faster than an agency. Let me help you make your website incredible. | Expert in WordPress, Shopify, Vue, React, and more | Website speedups, optimizations, web security, web accessibility, design, custom web development",
      },
      {
        property: "og:image",
        content: "",
      },
      {
        property: "og:url",
        content: "https://josephhansen.dev",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "twitter:title",
        content: "josephhansen.dev | web developer/designer",
      },
      {
        property: "twitter:description",
        content:
          "Better, cheaper, and faster than an agency. Let me help you make your website incredible. | Expert in WordPress, Shopify, Vue, React, and more | Website speedups, optimizations, web security, web accessibility, design, custom web development",
      },
      {
        property: "twitter:image",
        content: "",
      },
      {
        property: "twitter:url",
        content: "https://josephhansen.dev",
      },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "keywords",
        content:
          "web development, custom website, website creation, website design, website creation oklahoma, web development oklahoma, web development oklahoma city, web design oklahoma, vue developer, react developer, wordpress developer, shopify developer, web security, web security audit, site security audity, seo optimization, seo optimization oklahoma, web speed audit",
      },
    ],
  })

  watchEffect(() => {
    document.title = meta.title
    meta.meta.forEach((m) => {
      let metaEl = document.querySelector(
        `meta[name="${m.name}"], meta[property="${m.property}"]`,
      )
      if (metaEl) {
        metaEl.setAttribute("content", m.content)
      } else {
        metaEl = document.createElement("meta")
        if (m.name) {
          metaEl.setAttribute("name", m.name)
        }
        if (m.property) {
          metaEl.setAttribute("property", m.property)
        }
        metaEl.setAttribute("content", m.content)
        document.getElementsByTagName("head")[0].appendChild(metaEl)
      }
    })
  })
</script>

<template>
  <main
    :class="['w-dvw', brightnessClass]"
    class="md:p-7 sm:p-5"
    style="min-height: 100vh; overflow-x: hidden">
    <Header @update:brightness="handleBrightnessUpdate" />

    <div class="flex justify-center w-full md:px-10 sm:px-5 mt-5">
      <div
        class="md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center"
        :class="{
          'bg-slate-200': brightness == 5,
          'bg-slate-300': brightness == 4,
          'bg-slate-600': brightness == 3,
          'bg-slate-800': brightness == 2,
          'bg-slate-900': brightness == 1,
        }"
        v-if="component == 'pricing'">
        <Pricing :brightness="brightness" />
      </div>

      <div
        class="md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center"
        :class="{
          'bg-slate-200': brightness == 5,
          'bg-slate-300': brightness == 4,
          'bg-slate-600': brightness == 3,
          'bg-slate-800': brightness == 2,
          'bg-slate-900': brightness == 1,
        }"
        v-if="component == 'contact'">
        <Contact :brightness="brightness" />
      </div>

      <div
        class="md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center"
        :class="{
          'bg-slate-200': brightness == 5,
          'bg-slate-300': brightness == 4,
          'bg-slate-600': brightness == 3,
          'bg-slate-800': brightness == 2,
          'bg-slate-900': brightness == 1,
        }"
        v-if="component == 'portfolio'">
        <Portfolio :brightness="brightness" />
      </div>

      <div
        class="md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center"
        :class="{
          'bg-slate-200': brightness == 5,
          'bg-slate-300': brightness == 4,
          'bg-slate-600': brightness == 3,
          'bg-slate-800': brightness == 2,
          'bg-slate-900': brightness == 1,
        }"
        v-if="component == 'about-me'">
        <AboutMe :brightness="brightness" />
      </div>

      <div
        class="md:w-10/12 sm:w-12/12 rounded p-3 flex justify-center"
        :class="{
          'bg-slate-200': brightness == 5,
          'bg-slate-300': brightness == 4,
          'bg-slate-600': brightness == 3,
          'bg-slate-800': brightness == 2,
          'bg-slate-900': brightness == 1,
        }"
        v-if="component in portfolioSubpages">
    <component
      :is="portfolioSubpages[component]"
      :brightness="brightness" />
      </div>

      <div
        class="md:w-10/12 sm:w-12/12 rounded p-3"
        :class="{
          'bg-slate-200': brightness == 5,
          'bg-slate-300': brightness == 4,
          'bg-slate-600': brightness == 3,
          'bg-slate-800': brightness == 2,
          'bg-slate-900': brightness == 1,
        }"
        v-if="component == 'home'">
        <Hero :brightness="brightness" />
      </div>
    </div>

    <div class="flex justify-center w-full md:px-10 sm:px-5 pt-10">
      <div
        class="md:w-10/12 sm:w-12/12 rounded p-3"
        :class="{
          'bg-slate-200': brightness == 5,
          'bg-slate-300': brightness == 4,
          'bg-slate-600': brightness == 3,
          'bg-slate-800': brightness == 2,
          'bg-slate-900': brightness == 1,
        }"
        v-if="component == 'home'">
        <Services :brightness="brightness" />
      </div>
    </div>
  </main>
  <messageBanner :brightness="brightness" />
</template>

<style scoped>
  @media (max-width: 768px) {
    main {
      padding-bottom: 15vh;
      padding-left: 3vw;
      padding-right: 3vw;
    }
  }
</style>

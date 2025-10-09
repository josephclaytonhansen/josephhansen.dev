<script setup>
  import Header from "./blocks/header/Header.vue"
  import Footer from "./blocks/header/Footer.vue"
  import WebServicesHero from "./blocks/Hero/WebServicesHero.vue"
  import Services from "./blocks/services/Services.vue"
  import messageBanner from "./blocks/messageBanner/messageBanner.vue"
  import Pricing from "./pages/Pricing.vue"
  import Contact from "./pages/Contact.vue"
  import AboutMe from "./pages/AboutMe.vue"
  import WebPortfolio from "./pages/WebPortfolio.vue"
  import Home from "./pages/Home.vue"

  import { ref, computed, onMounted, watchEffect, reactive } from "vue"

  import Bazaar from "./pages/web-portfolio/Bazaar.vue"
  import OkcSouthStake from "./pages/web-portfolio/OkcSouthStake.vue"
  import ArisSearch from "./pages/web-portfolio/ArisSearch.vue"
  import AtlantaFloorOne from "./pages/web-portfolio/AtlantaFloorOne.vue"
  import BuildOnYourLand from "./pages/web-portfolio/BuildOnYourLand.vue"
  import StehlFamilyDental from "./pages/web-portfolio/StehlFamilyDental.vue"
  import TubBoys from "./pages/web-portfolio/TubBoys.vue"
  import StuartPipeAndHose from "./pages/web-portfolio/StuartPipeAndHose.vue"
  import SwimStatePool from "./pages/web-portfolio/SwimStatePool.vue"
  import JosephHansenDev from "./pages/web-portfolio/JosephHansenDev.vue"
  import Chai from "./pages/web-portfolio/Chai.vue"
  import FeedCouncil from "./pages/web-portfolio/FeedCouncil.vue"

  // Unity components
  import HelpfulEditorScripts from "./pages/unity/HelpfulEditorScripts.vue"
  import UnityProjects from "./pages/unity/Projects.vue"
  import ShaderGraph from "./pages/unity/ShaderGraph.vue"

  // Programming components
  import FigRef from "./pages/programming/php/FigRef.vue"
  import CustomWordPressThemes from "./pages/programming/php/CustomWordPressThemes.vue"
  import WordPressPlugins from "./pages/programming/php/WordPressPlugins.vue"
  import DiscourseImageComparison from "./pages/programming/javascript/DiscourseImageComparison.vue"
  import GardenTracker from "./pages/programming/javascript/GardenTracker.vue"
  import JavaScriptSnippets from "./pages/programming/javascript/JavaScriptSnippets.vue"
  import BlenderArduinoController from "./pages/programming/arduino/BlenderArduinoController.vue"
  import ArduinoLEDs from "./pages/programming/arduino/LEDs.vue"
  import InstagramScraper from "./pages/programming/python/InstagramScraper.vue"

  // Blender components
  import ArtPortfolio from "./pages/blender/ArtPortfolio.vue"
  import CustomBuild from "./pages/blender/CustomBuild.vue"
  import MyAddOns from "./pages/blender/MyAddOns.vue"
  import ShadingRig from "./pages/blender/ShadingRig.vue"

  // Communications components
  import TechnicalBlog from "./pages/communications/TechnicalBlog.vue"
  import PersonalBlog from "./pages/communications/PersonalBlog.vue"
  import Presentations from "./pages/communications/Presentations.vue"

  // About Me components
  import Resume from "./pages/about-me/Resume.vue"

  const brightness = ref(5)

  /* -------------------------- Show message banner? -------------------------- */
  const banner = ref(false)

  const props = defineProps({
    component: String,
  })

  // Computed background classes based on brightness
  const contentBg = computed(() => {
    return {
      "bg-slate-200": brightness.value == 5,
      "bg-slate-300": brightness.value == 4,
      "bg-slate-600": brightness.value == 3,
      "bg-slate-800": brightness.value == 2,
      "bg-slate-900": brightness.value == 1,
    }
  })

  const handleBrightnessUpdate = (value) => {
    brightness.value = Number(value)
    let localStorage = window.localStorage
    localStorage.setItem("brightness", brightness.value)

    // Set link colors based on brightness
    let linkColor = {
      1: "#cbd5e1", // slate-400
      2: "#e2e8f0", // slate-200
      3: "#d1d5db", // slate-300
      4: "#1e293b", // slate-800
      5: "#0f172a", // slate-900
    }[brightness.value]
    let linkHoverColor = {
      1: "#fb923c", // orange-400
      2: "#f97316", // orange-500
      3: "#fed7aa", // orange-200
      4: "#10b981", // emerald-500
      5: "#10b981", // emerald-500
    }[brightness.value]
    document.documentElement.style.setProperty("--link-color", linkColor)
    document.documentElement.style.setProperty(
      "--link-hover-color",
      linkHoverColor,
    )
  }

  const webPortfolioSubpages = {
    "okc-south-stake": OkcSouthStake,
    "aris-search": ArisSearch,
    "atlanta-floor-one": AtlantaFloorOne,
    "build-on-your-land": BuildOnYourLand,
    "stehl-family-dental": StehlFamilyDental,
    "tub-boys": TubBoys,
    "stuart-pipe": StuartPipeAndHose,
    "swim-state-pool": SwimStatePool,
    "josephhansen-dev": JosephHansenDev,
    bazaar: Bazaar,
    chai: Chai,
    "feed-council": FeedCouncil,
  }

  // Unity component mappings
  const unityComponents = {
    "helpful-editor-scripts": HelpfulEditorScripts,
    "unity-projects": UnityProjects,
    "shader-graph": ShaderGraph,
  }

  // Programming component mappings
  const programmingComponents = {
    figref: FigRef,
    "wordpress-themes": CustomWordPressThemes,
    "wordpress-plugins": WordPressPlugins,
    "discourse-image-comparison": DiscourseImageComparison,
    "garden-tracker": GardenTracker,
    "javascript-snippets": JavaScriptSnippets,
    "blender-arduino-controller": BlenderArduinoController,
    "arduino-leds": ArduinoLEDs,
    "instagram-scraper": InstagramScraper,
  }

  // Blender component mappings
  const blenderComponents = {
    "art-portfolio": ArtPortfolio,
    fruitbat: CustomBuild,
    addons: MyAddOns,
    "shading-rig": ShadingRig,
  }

  // Communications component mappings
  const communicationsComponents = {
    devlog: TechnicalBlog,
    blog: PersonalBlog,
    presentations: Presentations,
  }

  // About Me component mappings
  const aboutMeComponents = {
    resume: Resume,
  }

  // Consolidated component mappings for easier iteration
  const componentCategories = [
    {
      name: "webPortfolioSubpages",
      components: webPortfolioSubpages,
      centered: true,
      pathPrefix: "/web-portfolio/",
    },
    {
      name: "unityComponents",
      components: unityComponents,
      centered: true,
      pathPrefix: "/",
    },
    {
      name: "programmingComponents",
      components: programmingComponents,
      centered: true,
      pathPrefix: "/",
    },
    {
      name: "blenderComponents",
      components: blenderComponents,
      centered: true,
      pathPrefix: "/",
    },
    {
      name: "communicationsComponents",
      components: communicationsComponents,
      centered: true,
      pathPrefix: "/",
    },
    {
      name: "aboutMeComponents",
      components: aboutMeComponents,
      centered: true,
      pathPrefix: "/",
    },
  ]

  // Special pages with custom layouts
  const specialPages = [
    { name: "pricing", component: Pricing, centered: true },
    { name: "contact", component: Contact, centered: true },
    { name: "web-portfolio", component: WebPortfolio, centered: true },
    { name: "about-me", component: AboutMe, centered: true },
    { name: "home", component: Home, centered: false },
    { name: "web-services", component: WebServicesHero, centered: false },
  ]

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

    // Set link colors based on brightness
    let linkColor = {
      1: "#cbd5e1", // slate-400
      2: "#e2e8f0", // slate-200
      3: "#d1d5db", // slate-300
      4: "#1e293b", // slate-800
      5: "#0f172a", // slate-900
    }[brightness.value]
    let linkHoverColor = {
      1: "#fb923c", // orange-400
      2: "#f97316", // orange-500
      3: "#fed7aa", // orange-200
      4: "#10b981", // emerald-500
      5: "#10b981", // emerald-500
    }[brightness.value]
    document.documentElement.style.setProperty("--link-color", linkColor)
    document.documentElement.style.setProperty(
      "--link-hover-color",
      linkHoverColor,
    )

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
    } else if (props.component == "web-portfolio") {
      meta.title = "josephhansen.dev | web developer/designer | web portfolio"
      meta.meta[1].content =
        "josephhansen.dev | web developer/designer | web portfolio"
      meta.meta[6].content =
        "josephhansen.dev | web developer/designer | web portfolio"
      meta.meta[4].content = "https://josephhansen.dev/web-portfolio"
      meta.meta[9].content = "https://josephhansen.dev/web-portfolio"
    } else if (props.component == "web-services") {
      meta.title = "josephhansen.dev | web developer/designer | services"
      meta.meta[1].content =
        "josephhansen.dev | web developer/designer | services"
      meta.meta[6].content =
        "josephhansen.dev | web developer/designer | services"
      meta.meta[4].content = "https://josephhansen.dev/web-services"
      meta.meta[9].content = "https://josephhansen.dev/web-services"
    } else {
      if (props.component in webPortfolioSubpages) {
        let deSlugged = props.component.replace(/-/g, " ")
        meta.title = `josephhansen.dev | web developer/designer | ${deSlugged}`
        meta.meta[1].content = `josephhansen.dev | web developer/designer | ${deSlugged}`
        meta.meta[6].content = `josephhansen.dev | web developer/designer | ${deSlugged}`
        meta.meta[4].content = `https://josephhansen.dev/web-portfolio/${props.component}`
        meta.meta[9].content = `https://josephhansen.dev/web-portfolio/${props.component}`
      } else if (props.component in unityComponents) {
        let deSlugged = props.component.replace(/-/g, " ")
        meta.title = `josephhansen.dev | unity developer | ${deSlugged}`
        meta.meta[1].content = `josephhansen.dev | unity developer | ${deSlugged}`
        meta.meta[6].content = `josephhansen.dev | unity developer | ${deSlugged}`
        meta.meta[4].content = `https://josephhansen.dev/${props.component}`
        meta.meta[9].content = `https://josephhansen.dev/${props.component}`
      } else if (props.component in programmingComponents) {
        let deSlugged = props.component.replace(/-/g, " ")
        meta.title = `josephhansen.dev | programmer | ${deSlugged}`
        meta.meta[1].content = `josephhansen.dev | programmer | ${deSlugged}`
        meta.meta[6].content = `josephhansen.dev | programmer | ${deSlugged}`
        meta.meta[4].content = `https://josephhansen.dev/${props.component}`
        meta.meta[9].content = `https://josephhansen.dev/${props.component}`
      } else if (props.component in blenderComponents) {
        let deSlugged = props.component.replace(/-/g, " ")
        meta.title = `josephhansen.dev | blender artist | ${deSlugged}`
        meta.meta[1].content = `josephhansen.dev | blender artist | ${deSlugged}`
        meta.meta[6].content = `josephhansen.dev | blender artist | ${deSlugged}`
        meta.meta[4].content = `https://josephhansen.dev/${props.component}`
        meta.meta[9].content = `https://josephhansen.dev/${props.component}`
      } else if (props.component in communicationsComponents) {
        let deSlugged = props.component.replace(/-/g, " ")
        meta.title = `josephhansen.dev | ${deSlugged}`
        meta.meta[1].content = `josephhansen.dev | ${deSlugged}`
        meta.meta[6].content = `josephhansen.dev | ${deSlugged}`
        meta.meta[4].content = `https://josephhansen.dev/${props.component}`
        meta.meta[9].content = `https://josephhansen.dev/${props.component}`
      } else if (props.component in aboutMeComponents) {
        let deSlugged = props.component.replace(/-/g, " ")
        meta.title = `josephhansen.dev | ${deSlugged}`
        meta.meta[1].content = `josephhansen.dev | ${deSlugged}`
        meta.meta[6].content = `josephhansen.dev | ${deSlugged}`
        meta.meta[4].content = `https://josephhansen.dev/${props.component}`
        meta.meta[9].content = `https://josephhansen.dev/${props.component}`
      }
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
      <!-- Special pages -->
      <div
        v-for="page in specialPages"
        :key="page.name"
        v-show="component == page.name"
        class="w-full md:w-10/12 sm:w-12/12 rounded p-3"
        :class="[contentBg, page.centered ? 'flex justify-center' : '']">
        <component :is="page.component" :brightness="brightness" />
      </div>

      <!-- Dynamic component categories -->
      <template v-for="category in componentCategories" :key="category.name">
        <div
          v-if="component in category.components"
          class="w-full md:w-10/12 sm:w-12/12 rounded p-3"
          :class="[contentBg, category.centered ? 'flex justify-center' : '']">
          <component
            :is="category.components[component]"
            :brightness="brightness" />
        </div>
      </template>
    </div>

    <!-- Web services additional section -->
    <div
      v-if="component == 'web-services'"
      class="flex justify-center w-full md:px-10 sm:px-5 pt-10">
      <div class="w-full md:w-10/12 sm:w-12/12 rounded p-3" :class="contentBg">
        <Services :brightness="brightness" />
      </div>
    </div>

    <Footer :brightness="brightness" class="mt-10" />
  </main>

  <messageBanner :brightness="brightness" v-if="banner" />
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

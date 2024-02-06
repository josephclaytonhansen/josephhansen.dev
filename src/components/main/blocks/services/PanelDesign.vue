<script setup>
  import { ref, computed, onMounted, watch } from "vue"
  const props = defineProps({
    brightness: Number,
  })

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"

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

  const bazaarLink = ""

  import {bazaarHome, swimHome, stehlHome, stuartHome, boylHome, tubHome, josephhansenHome, atlantaHome, okcssHome, arrisHome} from "../../../images/imageLinks.js"

  const bazaarImages = ref([bazaarHome, swimHome, stehlHome, stuartHome, boylHome, tubHome, josephhansenHome, atlantaHome, okcssHome, arrisHome])

  const bazaarCaptions = ref([
    "BlenderNation Bazaar",
    "Swimstate Pool Services",
    "Stehl Family Dental",
    "Stuart Hose and Pipe",
    "Build on Your Land",
    "Tub Boys",
    "josephhansen.dev",
    "Atlanta Floors One",
    "OKC South Stake",
    "Aris Search",
  ])

  const bazaarTitle = "Web Design"
</script>

<template>
  <sliderAndGallery
    :images="bazaarImages"
    :captions="bazaarCaptions"
    :link="bazaarLink"
    :title="bazaarTitle"
    :brightness="brightness"
    ><slot>
      <h2 class="text-3xl mb-1" :class="pClass(brightness)">
       I've designed dozens of websites.
      </h2>
      <div class = "px-3 text-center">
        <p>Whether you need a design overhaul, a modernization, a rebranding, or a new website design completely, I'm your guy! I have extensive graphic design and UI/UX experience. I minored in Visual Communication, and I love making websites beautiful. Don't just take my word for it though, here's what a UX professional has to say:</p>
        <div
        class="rounded p-8 flex"
        :class="{
          'bg-slate-100': brightness == 5,
          'bg-slate-400': brightness == 4,
          'bg-slate-500': brightness == 3,
          'bg-slate-700': brightness == 2,
          'bg-slate-800': brightness == 1,
        }">
        <p>Joseph is a good friend of mine from school. We worked closely on many projects with both pursuing degrees in design. He can design anything. This is not an exaggeration. I personally struggled to learn new design tools and manipulate pixels the way I wanted them to be. Joseph just... did it. He is incredible. He is also incredibly passionate about non-profit organizations and helping people who have had challenging lives or have troubles that they cannot overcome themselves. He is as compassionate as they come. I would recommend him to anyone with utmost confidence that he will surpass all expectations.</p>
        </div>
      </div>
      </slot>
      </sliderAndGallery>

</template>

<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const bazaarLink = "https://arissearch.com//"
  const bazaarTitle = "Aris Search"

  import { arrisHome, aris1 } from "../../../images/imageLinks.js"

  const bazaarImages = ref([arrisHome, aris1])

  const bazaarCaptions = ref([
    "Aris Search homepage",
    "Aris Search image effects",
  ])

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
  <sliderAndGallery
    :images="bazaarImages"
    :captions="bazaarCaptions"
    :link="bazaarLink"
    :title="bazaarTitle"
    :brightness="brightness"
    ><slot>
      <h3 class="text-2xl font-bold text-inherit">
        Stark colors + clean white and transparency
      </h3>
      <p>Lorem ipsum</p>
      <h3 class="text-2xl font-bold text-inherit">Geometric effects</h3>
      <p>Lorem ipsum</p>
    </slot></sliderAndGallery
  >
</template>

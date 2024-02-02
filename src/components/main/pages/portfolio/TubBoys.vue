<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const bazaarLink = "https://tub-boys.com/"
  const bazaarTitle = "Tub Boys"

  import {
    tubHome
  } from "../../../images/imageLinks.js"

  const bazaarImages = ref([tubHome])

  const bazaarCaptions = ref([
    "Tub Boys homepage",
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
        Using design to present minimal text in a compelling way
      </h3>
      <p>Lorem ipsum</p>
      <h3 class="text-2xl font-bold text-inherit">
        Image comparison sliders
      </h3>
      <p>Lorem ipsum</p>
    </slot></sliderAndGallery
  >
</template>

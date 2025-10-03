<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const galleryLink = "https://arissearch.com//"
  const galleryTitle = "Aris Search"

  import { arrisHome, aris1 } from "../../../images/imageLinks.js"

  const galleryImages = ref([arrisHome, aris1])

  const galleryCaptions = ref([
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
    :images="galleryImages"
    :captions="galleryCaptions"
    :link="galleryLink"
    :title="galleryTitle"
    :brightness="brightness"
    ><slot>
      <p class="text-inherit">
        Aris Search needed a powerful, functional, site to connect recruiters
        and job applicants. In addition to a clean, professional design with
        excellent SEO, I developed everything they needed on the backend to
        handle their data. The result is a site that's fast, functional, and
        easy to use.
      </p>
    </slot></sliderAndGallery
  >
</template>

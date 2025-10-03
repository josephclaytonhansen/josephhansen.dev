<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const galleryLink = "https://www.feedcouncil.com/"
  const galleryTitle = "FEED Council"

  import { feedCouncilHome } from "../../../images/imageLinks.js"

  const galleryImages = ref([
    feedCouncilHome,
  ])

  const galleryCaptions = ref([])
</script>

<template>
  <sliderAndGallery
    :images="galleryImages"
    :captions="galleryCaptions"
    :link="galleryLink"
    :title="galleryTitle"
    :brightness="brightness"
    ><slot>
      
    </slot></sliderAndGallery
  >
</template>

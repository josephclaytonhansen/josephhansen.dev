<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const bazaarLink = "https://bazaar.blendernation.com"
  const bazaarTitle = "BlenderNation Bazaar"

  import {
    bazaarHome,
    bazaar1,
    bazaar2,
    bazaar3,
    bazaar4,
  } from "../../../images/imageLinks.js"

  const bazaarImages = ref([bazaarHome, bazaar1, bazaar2, bazaar3, bazaar4])

  const bazaarCaptions = ref([
    "Bazaar homepage",
    "Bazaar collection page",
    "Bazaar user page",
    "Bazaar search results",
    "Bazaar product listing",
  ])
</script>

<template>
  <sliderAndGallery
    :images="bazaarImages"
    :captions="bazaarCaptions"
    :link="bazaarLink"
    :title="bazaarTitle"
    :brightness="brightness" />
</template>

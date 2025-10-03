<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const galleryLink = "https://www.chai.org/"
  const galleryTitle = "Coalition Healthcare Artificial Intelligence"

  import { chaiHome } from "../../../images/imageLinks.js"

  const galleryImages = ref([chaiHome])

  const galleryCaptions = ref([])
</script>

<template>
  <sliderAndGallery
    :images="galleryImages"
    :captions="galleryCaptions"
    :link="galleryLink"
    :title="galleryTitle"
    :brightness="brightness"
    ><slot> </slot
  ></sliderAndGallery>
</template>

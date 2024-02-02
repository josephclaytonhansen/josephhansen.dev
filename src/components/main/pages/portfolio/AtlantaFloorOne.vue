<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const bazaarLink = "https://floorsfloors.com/"
  const bazaarTitle = "Atlanta Floor One"

  import {
    atlantaHome,
    atlanta1,
    atlanta2,
    atlanta3,
  } from "../../../images/imageLinks.js"

  const bazaarImages = ref([atlantaHome, atlanta1, atlanta2, atlanta3])

  const bazaarCaptions = ref([
    "Atlanta Floors One homepage",
    "Atlanta Floors One testimonial section",
    "Contact page (featuring parallax architectural sketch background)",
    "Atlanta Floors One image section",
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
        Clean and professional with an unusual color palette
      </h3>
      <p>Lorem ipsum</p>
      <h3 class="text-2xl font-bold text-inherit">
        Parallax architectural sketch backgrounds
      </h3>
      <p>Lorem ipsum</p>
    </slot></sliderAndGallery
  >
</template>

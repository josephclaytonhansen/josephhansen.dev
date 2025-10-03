<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const galleryLink = "https://stehlfamilydental.com/"
  const galleryTitle = "Stuart Hose and Pipe"

  import { stehlHome } from "../../../images/imageLinks.js"

  const galleryImages = ref([stehlHome])

  const galleryCaptions = ref(["Stehl Family Dental homepage"])

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
        I built a website for Stehl Family Dental, a small dental practice
        looking to expand their business. Their site needed to make it easy for
        potential customers to understand what was available and the benefits of
        choosing them. I built them a professional and engaging site that
        presents all the important information in a well-designed,
        easy-to-navigate format.
      </p>
    </slot></sliderAndGallery
  >
</template>

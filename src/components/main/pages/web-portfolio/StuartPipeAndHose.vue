<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const galleryLink = "https://stuarthose.com/"
  const galleryTitle = "Stuart Hose and Pipe"

  import { stuartHome } from "../../../images/imageLinks.js"

  const galleryImages = ref([
    stuartHome,
    "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275652278.webp",
    "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275668557.webp",
  ])

  const galleryCaptions = ref(["Stuart Hose and Pipe homepage"])

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
        Stuart Pipe Co. presented a unique challenge: they needed a site that
        matched extremely precise branding requirements from their parent
        company, while still being clean, professional, and appealing. I built
        and designed a site that met all of their requirements, and they were
        extremely happy with the results.
      </p>
    </slot></sliderAndGallery
  >
</template>

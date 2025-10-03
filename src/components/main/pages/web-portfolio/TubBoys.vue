<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const galleryLink = "https://tub-boys.com/"
  const galleryTitle = "Tub Boys"

  import { tubHome } from "../../../images/imageLinks.js"

  const galleryImages = ref([
    tubHome,
    "https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp",
    "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274374594.webp",
    "https://images.josephhansen.dev/uploads/file2024-02-0620-1707274402279.webp",
  ])

  const galleryCaptions = ref(["Tub Boys homepage"])

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
        Tub Boys didn't have a website, and they were hoping to expand their
        business through a web presence. I built them a site that exceeded their
        expectations and helped them grow their business.
      </p>
      <h3 class="text-2xl font-bold text-inherit">
        Using design to present minimal text in a compelling way
      </h3>
      <p class="text-inherit">
        They had very little copy, so it was my task to make their site engaging
        and feel full with what I had to work with. I took the opporunity to use
        large, engaging, typography as well as swooshing lines that invoke a
        sense of movement. The result feels professional, while still invoking
        the "fun" energy the client requested.
      </p>
      <h3 class="text-2xl font-bold text-inherit">Image comparison sliders</h3>
      <img
        src="https://images.josephhansen.dev/uploads/file2024-02-0620-1707273750624.webp"
        class="rounded" />
      <p class="text-inherit">
        Tub Boys wanted to be able to showcase their work with before and after
        images. I devloped a custom JavaScript solution for interactive image
        sliders that integrated nicely with their WordPress platform.
      </p>
    </slot></sliderAndGallery
  >
</template>

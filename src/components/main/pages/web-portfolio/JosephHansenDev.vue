<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const bazaarLink = "/"
  const bazaarTitle = "josephhansen.dev"

  import { josephhansenHome } from "../../../images/imageLinks.js"

  const bazaarImages = ref([josephhansenHome])

  const bazaarCaptions = ref(["This site's homepage"])

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
        A lightning-fast, responsive, accessible site
      </h3>
      <p class="text-inherit">
        I built this site with care and pride- it's showcasing my abilities,
        after all. To that end, I've optimized it for speed to the max. This
        site scores 99/100 on Google's Page Speed test, a score so rare it's
        essentially mythical. This site is also highly responsive and features
        five distinct color themes for perfect user satisfication (check out the
        header to change them!).
      </p>
      <p class="text-inherit">
        I've built, designed, and developed every part of this site. I use Vue
        as the JavaScript framework, with Vite, Node.js, Express, MongoDB, and
        other technologies to make it not just work, but excel. All the images
        are served in blazing-fast, modern, formats like WebP, and the site is
        fully accessible, with ARIA roles and other accessibility features.
      </p>
      <p class="text-inherit">
        Looking for a site that will blow your customer's minds? I make those.
        Let me build yours.
      </p>
    </slot></sliderAndGallery
  >
</template>

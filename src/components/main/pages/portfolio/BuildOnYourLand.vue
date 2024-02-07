<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const bazaarLink = "https://www.buildonyourlandllc.com/"
  const bazaarTitle = "Build on Your Land"

  import {
    boylHome,
  } from "../../../images/imageLinks.js"

  const bazaarImages = ref([boylHome, "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275933220.webp", "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp", "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275982586.webp", "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275995615.webp" ])

  const bazaarCaptions = ref([
  ])

</script>

<template>
  <sliderAndGallery
    :images="bazaarImages"
    :captions="bazaarCaptions"
    :link="bazaarLink"
    :title="bazaarTitle"
    :brightness="brightness"
    ><slot>
      <p class = "text-inherit">Build On Your Land is one of my favorite sites I've ever built. From dynamic showroom hours I developed in JavaScript, to parallax home design backgrounds, the site is full of my best work. The client needed a beautiful, responsive, site, and tey loved what they got.</p>
      <h3 class="text-2xl font-bold text-inherit">
        Dynamic showroom hours
      </h3>
      <p class="text-inherit">
        The client wanted customers to be able to tell at a glance if the showroom was currently open. The JavaScript/PHP solution I built is simple- the hours show "Open" or "Closed" based on the current time and day- but extremely effective. The client was thrilled with the result.
      </p>
      <h3 class="text-2xl font-bold text-inherit">
        Design elements
        </h3>
        <p class="text-inherit">
          The site is full of design elements that make it stand out. The parallax home design sketch backgrounds, for example, add a unique touch and make the site memorable.</p>
          <img src = "https://images.josephhansen.dev/uploads/file2024-02-0621-1707275970184.webp" alt = "Parallax home design sketch backgrounds" class = "rounded" />
          <p class="text-inherit">
            Every part of the site is packed with care and intention- this site shows my design abilities at their best.</p>
    </slot></sliderAndGallery
  >
</template>

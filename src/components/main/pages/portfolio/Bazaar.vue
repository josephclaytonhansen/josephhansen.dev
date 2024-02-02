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
      <div class="prose pt-6">
        <h3 :class="pClass(brightness)" class="text-2xl font-bold">
          The vision: a one-stop shop for Blender users
        </h3>
        <p>Lorem ipsum</p>
        <h3 :class="pClass(brightness)" class="text-2xl font-bold">
          Tight deadlines and high stakes
        </h3>
        <p>Lorem ipsum</p>
        <h3 :class="pClass(brightness)" class="text-2xl font-bold">
          From concept to results
        </h3>
        <p>Lorem ipsum</p>
        <h3 :class="pClass(brightness)" class="text-2xl font-bold">
          Security- keeping the Bazaar safe
        </h3>
        <p>Lorem ipsum</p>
      </div>
    </slot></sliderAndGallery
  >
</template>

<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const bazaarLink = "https://swimstatepoolservice.com/"
  const bazaarTitle = "Swim State Pool"

  import { swimHome } from "../../../images/imageLinks.js"

  const bazaarImages = ref([swimHome])

  const bazaarCaptions = ref(["Swim State Pool Services homepage"])

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
      <p class="text-inherit">
        Swim State Pool Services needed a website to help them grow their
        business. I built them a site that was both professional and engaging,
        helping them to attract new customers and grow their business. They
        loved the results, which were a massive upgrade from their existing
        site.
      </p>
    </slot></sliderAndGallery
  >
</template>

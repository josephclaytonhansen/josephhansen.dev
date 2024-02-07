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

  const images = {
    planning:
      "https://images.josephhansen.dev/uploads/file2024-02-0619-1707270927524.webp",
    figma:
      "https://images.josephhansen.dev/uploads/file2024-02-0619-1707271001166.webp",
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
      <h3 class="text-2xl font-semibold text-inherit">
        The vision: a one-stop shop for Blender users
      </h3>
      <p class="text-inherit">
        When Bart from BlenderNation approached me with the idea for Bazaar, I
        was pumped. Nothing quite like Bazaar existed at the time: one central
        hub for Blender users to find tutorials, resources, assets, and add-ons.
        I was heavily involved with every step of the process of making the
        Bazaar come to life, and the end result is fantastic.
      </p>
      <figure>
        <img :src="images.planning" class="rounded-xl" />
        <figcaption>Bazaar's planning board</figcaption>
      </figure>
      <p class="text-inherit">
        With the above Figma document as a guide from Bart, I dove into both
        design and figuring out the backend details for managing the complex
        data the site would be handling. Bart wanted to do this through
        WordPress, and I was able to use my expertise to recommend
        AdvancedCustomFields to do a lot of the major data-wrangling. I also
        built the theme from scratch, to make sure it was as simplifie and
        lightweight as possible while still providing beautiful, responsive, and
        functional results.
        <figure>
          <img :src="images.figma" class="rounded-xl" />
          <figcaption>My approved design for the Bazaar</figcaption>
        </figure>
      </p>
      <h3 class="text-2xl font-bold text-inherit">
        Tight deadlines and high stakes
      </h3>
      <p>
        When Bart approached me, there was about a month until the next Blender
        Conference, a massive community event that he hoped to present Bazaar
        at. At this point, the Bazaar was just an idea- there wasn't even a logo
        yet. Long story short- Bazaar launched successfully with time to spare.
        I believe this project showed I can work well under pressure and with
        tight deadlines to achieve exactly what a client needs.
      </p>
      <h3 class="text-2xl font-bold text-inherit">
        Security: keeping the Bazaar safe
      </h3>
      <p>
        Among the other development, I've implemented powerful security
        guardrails across Bazaar, ranging from DDoS protection to a
        comprehensive firewall. I'm proud to report that my security measures
        are currently preventing around 4500 attacks a month, with that number
        growing larger all the time.
      </p>
    </slot></sliderAndGallery
  >
</template>

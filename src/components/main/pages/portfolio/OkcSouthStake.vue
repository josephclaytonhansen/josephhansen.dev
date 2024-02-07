<script setup>
  import { ref } from "vue"

  import sliderAndGallery from "../../blocks/sliderAndGallery/sliderAndGallery.vue"
  const bazaarLink = "https://okcsouthstake.org"
  const bazaarTitle = "OKC South Stake"

  import { okcssHome } from "../../../images/imageLinks.js"

  const bazaarImages = ref([okcssHome, 'https://images.josephhansen.dev/uploads/file2024-02-0621-1707277285248.webp', 'https://images.josephhansen.dev/uploads/file2024-02-0621-1707277310460.webp'])

  const bazaarCaptions = ref([
    "OKC South Stake homepage (light)", 
    "OKC South Stake congregation subpage",
    "OKC South Stake homepage (dark)",
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
      <p class="text-inherit">
        To describe this project as "massive" would be an understatement. What at first glance appears to be a simple informational website is in fact a massive hub of information, resources, and tools for the members of a regional church. This site is a massive, sprawling, and complex project with dozens of custom tools, subdomains, features, and more. 
      </p>
      <h3 class="text-2xl font-bold text-inherit">
        Everything in a single web app</h3>
        <p class = "text-inherit">I've designed, built, and developed everything on this site. And I do mean everything. This site has congregation subpages with fully functional, collaborative, calendars:</p>
        <img src = "https://images.josephhansen.dev/uploads/file2024-02-0621-1707277670567.webp" alt = "Example of a congregation subpage calendar" class = "rounded">
        <p class = "text-inherit">This web application also has a fully functional CMS and blog system, scheduling systems, complex communication tools, an internal email system, user roles and restricted access, and more. The scope of this site is frankly staggering. If you can imagine a tool an organization might need, it's somewhere on this site. And it's all built with the same care, attention to detail, and quality that I put into every project I work on.</p>
        <h3 class="text-2xl font-bold text-inherit">Built to take a beating</h3>
        <p class = "text-inherit">This site is built to handle a massive amount of traffic, and it's built to be as fast as possible. I've optimized it for speed, and it's fully responsive, accessible, and built with the latest technologies. It's a site that's built to last, and to be a valuable resource for the members of the church it serves.</p>
        <p class = "text-inherit">Additionally, this site has advanced security guardrails, DDoS protection, bot monitoring and filtering, extremely strong database encryption, MFA/TFA protection, and other essential security features for a large organizational website. I've extensively tested the security of this site, and I'm proud to say it's rock-solid.</p>
        <p class = "text-inherit">If you need a web application that's built to last, and built to be a valuable resource for your organization, I'm the developer you need. Let me build your site.</p>


    </slot></sliderAndGallery
  >
</template>

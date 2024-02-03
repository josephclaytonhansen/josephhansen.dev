<script setup>
  const props = defineProps({
    brightness: Number,
  })
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

  import ctaForm from "../ctaForm/ctaForm.vue"
</script>

<template>

<div
    class="flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col">
    <div
      class="prose md:w-10/12 sm:w-12/12 mt-8"
      style="max-width: 84ch !important">
      <h2 class="text-3xl mb-1" :class="pClass(brightness)">
        Need a custom pricing calculator?
        </h2>
        
        <div class="image-container">
          <img
            src="https://images.josephhansen.dev/uploads/file2024-02-0313-1706989687978.webp"
            alt="Screenshot of GalaxyIT Pricing Calculator"
            class="bg-slate-200 object-contain w-full rounded-xl" />
        </div>

        <div class = "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12">
        <h3 class="text-xl m-0" :class="pClass(brightness)">
          I can do that! Check out this one I made for GalaxyIT:</h3>
          <a href="https://galaxyit.com/savings-calculator/">
        <button
          class="rounded px-5 py-2 text-white font-semibold"
          :class="{
            'bg-slate-700': brightness >= 4,
            'bg-slate-500': brightness == 3,
            'bg-slate-400': brightness <= 2,
          }">
          GalaxyIT Pricing Calculator
        </button>
      </a>
        
        </div>

        <h2 class="text-3xl mb-1" :class="pClass(brightness)">
        What about dynamic hours?
        </h2>
        
        <div class="image-container">
          <img
            src="https://images.josephhansen.dev/uploads/file2024-02-0313-1706990008524.webp"
            alt="Screenshot of Build on Your Land dynamic showroom hours"
            class="bg-slate-200 object-contain w-full rounded-xl" />
        </div>

        <div class = "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12">
        <h3 class="text-xl m-0" :class="pClass(brightness)">
          Been there, done that:</h3>
          <a href="">
        <button
          class="rounded px-5 py-2 text-white font-semibold"
          :class="{
            'bg-slate-700': brightness >= 4,
            'bg-slate-500': brightness == 3,
            'bg-slate-400': brightness <= 2,
          }">
          Build on Your Land site
        </button>
      </a>
        
        </div>


        <h2 class="text-3xl mb-1" :class="pClass(brightness)">
        Maybe you need a complex WordPress theme built from scratch?
        </h2>
        
        <div class="image-container">
          <img
            src="https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp"
            alt="Screenshot of BlenderNation Bazaar"
            class="bg-slate-200 object-contain w-full rounded-xl" />
        </div>

        <div class = "flex w-full items-center justify-between flex-wrap sm:flex-wrap md:flex-nowrap mt-12">
        <h3 class="text-xl m-0" :class="pClass(brightness)">
          No sweat - let's make it happen! </h3>
          <a href="">
        <button
          class="rounded px-5 py-2 text-white font-semibold"
          :class="{
            'bg-slate-700': brightness >= 4,
            'bg-slate-500': brightness == 3,
            'bg-slate-400': brightness <= 2,
          }">
          Yep, done this too (Bazaar)
        </button>
      </a>
        
        </div>

        <h2 class="text-5xl mb-1" :class="pClass(brightness)">
        No matter how complex your problem may be, I can fix it.</h2>
        <p :class = "pClass(brightness)">
          I've been working on websites for over a decade, and I can do custom development for you in pretty much any language you can throw my way. Let me worry about automations, algorithims, integrations, and all that other stuff that is distracting you from your business. I'll take your problems off your plate and develop a solution.</p>



        </div>
        <ctaForm :brightness="brightness" />
        </div>
  
</template>


<style scoped>
  .image-container {
    position: relative;
    width: 100%;
    padding-top: 58%;
  }

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

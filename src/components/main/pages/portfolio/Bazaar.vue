<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

  import 'swiper/css/pagination'
  import 'swiper/css/navigation'

  import { Autoplay, Pagination, Navigation } from 'swiper/modules'

  const modules = [Autoplay, Pagination, Navigation]

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
</script>

<template>
  <div class = "flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4">
  <div class="flex w-full justify-center gap-8 items-center">
    
      <h2
        class="text-5xl text-center text-semibold"
        :class="pClass(props.brightness)">
        BlenderNation's Bazaar
      </h2>
      <a href = "https://bazaar.blendernation.com">
      <button
          aria-label="Visit the Bazaar website"
          class="rounded px-5 py-2 text-white font-semibold"
          :class="{
            'bg-slate-700': brightness >= 4,
            'bg-slate-500': brightness == 3,
            'bg-slate-400': brightness <= 2,
          }">
          Visit Site
        </button>
      </a>

      
</div>

<swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    :loop="true"
    class="mt-5"
  >



  <swiper-slide class="image-container">
    <a href = "https://bazaar.blendernation.com">
      <img
        :src="'https://images.josephhansen.dev/uploads/file2024-01-2621-1706326995802.webp'"
        :alt="'Bazaar\'s home page'"
        class="bg-slate-200 object-contain w-full rounded-xl" />
        </a>
  </swiper-slide>

  <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
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

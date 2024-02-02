<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue"
  import "swiper/css"

  import "swiper/css/pagination"
  import "swiper/css/navigation"

  import { Autoplay, Pagination, Navigation } from "swiper/modules"

  import {
    bazaarHome,
    bazaar1,
    bazaar2,
    bazaar3,
    bazaar4,
  } from "../../../images/imageLinks.js"

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
  <div class="flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4">
    <div
      class="flex w-full justify-center gap-8 items-center flex-wrap sm:flex-wrap md:flex-nowrap">
      <h2
        class="text-5xl text-center text-semibold"
        :class="pClass(props.brightness)">
        BlenderNation's Bazaar
      </h2>
      <a href="https://bazaar.blendernation.com">
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

    <div class="hidden md:hidden lg:block">
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        :loop="true"
        class="mt-5">
        <swiper-slide class="image-container">
          <a href="https://bazaar.blendernation.com">
            <img
              :src="bazaarHome"
              :alt="'Bazaar\'s home page'"
              class="bg-slate-200 object-contain w-full rounded-xl" />
          </a>
        </swiper-slide>

        <swiper-slide class="image-container" v-for = "
          (image, index) in [bazaar1, bazaar2, bazaar3, bazaar4]" :key="index">
          <a href="https://bazaar.blendernation.com">
            <img
              :src="image"
              :alt="'Bazaar screenshot ' + index"
              class="bg-slate-200 object-contain w-full rounded-xl" />
          </a>
        </swiper-slide>
        
      </swiper>
    </div>

    <div class = "block md:block lg:hidden py-6">
      <div class="grid grid-cols-2 gap-4">
        <div class="image-container" v-for="
          (image, index) in [bazaarHome, bazaar1, bazaar2, bazaar3, bazaar4]" :key="index">
            <img
              :src="image"
              :alt="'Bazaar screenshot ' + index"
              class="bg-slate-200 object-contain w-full rounded" />
        </div>
      </div>
    </div>
    
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

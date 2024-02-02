<script setup>
  import { onMounted, ref, nextTick } from "vue"
  import { Swiper, SwiperSlide } from "swiper/vue"
  import "swiper/css"

  import "swiper/css/pagination"
  import "swiper/css/navigation"

  import { Autoplay, Pagination, Navigation } from "swiper/modules"

  const lightboxCaptions = ref([])

  const modules = [Autoplay, Pagination, Navigation]

  const props = defineProps({
    brightness: Number,
    images: Array,
    captions: Array,
    link: String,
    title: String,
  })

  const link = ref("")
  const title = ref("")
  const images = ref([])

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

  const lightbox = () => {
    console.log("lightbox")
    const lightbox = document.getElementById("lightbox")
    const lightboxImg = document.getElementById("lightbox-img")
    const lightboxClose = document.getElementById("lightbox-close")
    const lightboxImages = document.querySelectorAll(".lightbox")
    const lighboxCaption = document.getElementById("lightbox-caption")

    lightboxImages.forEach((image) => {
      console.log(image)
      image.addEventListener("click", () => {
        lightboxImg.src = image.src
        lighboxCaption.textContent = image.alt
        lightbox.classList.remove("hidden")
      })
    })

    lightboxClose.addEventListener("click", () => {
      lightbox.classList.add("hidden")
    })
  }

  onMounted(() => {
    lightboxCaptions.value = props.captions
    link.value = props.link
    title.value = props.title
    images.value = props.images
    nextTick(() => {
      lightbox()
    })
  })
</script>

<template>
  <div class="flex-col w-11/12 sm:w-10/12 md:w-8/12 py-4">
    <div
      class="flex w-full justify-center gap-8 items-center flex-wrap sm:flex-wrap md:flex-nowrap">
      <h2
        class="text-5xl text-center text-semibold"
        :class="pClass(props.brightness)">
        {{ title }}
      </h2>
      <a :href="link">
        <button
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
        <swiper-slide
          class="image-container"
          v-for="(image, index) in images"
          :key="index">
          <a :href="link">
            <img
              :src="image"
              :alt="lightboxCaptions[index]"
              class="bg-slate-200 object-contain w-full rounded-xl" />
          </a>
        </swiper-slide>
      </swiper>
    </div>

    <div
      id="lightbox"
      class="fixed inset-0 flex items-center justify-center z-50 hidden"
      style="background-color: rgba(0, 0, 0, 0.3)">
      <div class="bg-white p-5 rounded shadow-lg">
        <img
          id="lightbox-img"
          src=""
          alt="Lightbox Image"
          class="w-full h-auto" />
        <div class="flex justify-center">
          <p class="text-sm text-gray-500 mt-2" id="lightbox-caption"></p>
        </div>
        <button
          id="lightbox-close"
          style="top: 30%"
          class="absolute right-0 m-2 text-3xl text-orange-400">
          &times;
        </button>
      </div>
    </div>

    <div class="block md:block lg:hidden py-6">
      <div class="grid grid-cols-2 gap-4">
        <div
          class="image-container"
          v-for="(image, index) in images"
          :key="index">
          <img
            :src="image"
            :alt="lightboxCaptions[index]"
            class="bg-slate-200 object-contain w-full rounded lightbox" />
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

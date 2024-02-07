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

  const iconClass = (brightness) => {
    if (brightness >= 4) {
      return "text-emerald-500"
    } else if (brightness == 3) {
      return "text-orange-600"
    } else if (brightness == 2) {
      return "text-orange-500"
    } else if (brightness == 1) {
      return "text-orange-400"
    }
  }

  import { siLinkedin, siGithub, siInstagram, siBlender } from "simple-icons"

  const icons = [siLinkedin, siGithub, siBlender, siInstagram]

  const iconLinks = ["https://www.linkedin.com/in/josephclaytonhansen/", "https://www.github.com/josephclaytonhansen", 'https://blenderartists.org/u/joseph/summary', 'https://www.instagram.com/jhansen_art/']
</script>

<template>
  <div class="flex-col w-full">
    <div class="p-5 flex-col w-full">
      <div class="grid grid-cols-6">
        <div class="col-span-2 sm:col-span-2 md:col-span-1">
          <div class="square-image-container">
            <img
              class="rounded pr-4"
              src="https://images.josephhansen.dev/uploads/fileDSC01942-3.j-1707265732742.webp"
              alt="Joseph Hansen" />
          </div>
          <div class="flex gap-2 mt-4 justify-center items-center">
            <div class="flex gap-2 mt-4 justify-center items-center">
              <div
                v-for="(icon, index) in icons"
                :key="index"
                class="flex-1"
                :class="iconClass(props.brightness)">
                <a :href="iconLinks[index]">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  width="100%"
                  height="100%">
                  <path :d="icon.path" />
                </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-4 sm:col-span-4 md:col-span-5 prose">
          <h1 class="text-5xl font-bold mb-0" :class="pClass(props.brightness)">
            Joseph Hansen
          </h1>
          <h2 class="text-xl mt-2" :class="pClass(props.brightness)">
            <em>About me</em>
          </h2>
          <p :class="pClass(props.brightness)"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .square-image-container {
    position: relative;
    width: 100%;
    padding-top: 100%;
  }

  .square-image-container img,
  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-container {
    position: relative;
    width: 100%;
    padding-top: 58%;
  }
</style>

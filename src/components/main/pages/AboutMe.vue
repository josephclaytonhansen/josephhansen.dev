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
</script>

<template>
  <div class="flex-col w-full">
    <div class="py-5 flex-col w-full">

      <div class = "grid grid-cols-6">
        <div class = "col-span-2 sm:col-span-2 md:col-span-1">

          <div class="square-image-container">
      <img
      class="rounded"
        src="https://images.josephhansen.dev/uploads/fileDSC01942-3.j-1707265732742.webp"
        alt="Joseph Hansen" />
    </div>

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

  .square-image-container img, .image-container img{
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

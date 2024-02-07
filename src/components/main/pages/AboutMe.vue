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

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="square-image-container">
      <img src="https://images.josephhansen.dev/uploads/fileDSC01942-3.j-1707265732742.webp" alt="Joseph Hansen" />
    </div>
    </div>

</template>

<style scoped>

.square-image-container {
    position: relative;
    width: 100%;
    padding-top: 50%;
  }

  .square-image-container img {
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

  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>

<script setup>
  import { useRouter } from "vue-router"
  import { ref, onMounted } from "vue"
  const brightness = ref(3)
  const emit = defineEmits(["update:brightness"])
  const router = useRouter()

  onMounted(() => {
    let localStorage = window.localStorage
    if (localStorage.getItem("brightness")) {
      brightness.value = Number(localStorage.getItem("brightness"))
      let navVar = "--swiper-navigation-color"
      let paginationVar = "--swiper-pagination-color"
      let hexColor = {
        1: "#FB923C",
        2: "#F97316",
        3: "#D97706",
        4: "#10B981",
        5: "#047857",
      }[brightness.value]
      document.documentElement.style.setProperty(navVar, hexColor)
      document.documentElement.style.setProperty(paginationVar, hexColor)
    }
  })

  const navigate = (link) => {
    toggleMobileMenu()
    router.push(link)
  }
</script>

<template>
    <footer
        :class="{
        'bg-slate-100 text-slate-800': brightness >= 4,
        'bg-slate-200 text-slate-900': brightness == 3,
        'bg-slate-900 text-slate-100': brightness == 2,
        'bg-black text-slate-100': brightness == 1,
        }"
        class="w-full py-6 px-4 sm:px-6 lg:px-8"
    >
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
            <h2 class="text-lg font-semibold">Joseph Hansen</h2>
            <p class="text-sm">© 2024 Joseph Hansen. All rights reserved.</p>
        </div>
        </div>
    </footer> 
</template>
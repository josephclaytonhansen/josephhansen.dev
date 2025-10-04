<script setup>
  import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue"
  import { useRouter } from "vue-router"
  import {
    Menu,
    ChevronDown,
    Sun,
    Moon,
    CloudDrizzle,
    Terminal,
    CloudSun,
    MoonStar,
    X,
  } from "lucide-vue-next"
  import { siGithub } from "simple-icons"
  import { ref, onMounted } from "vue"

  const brightness = ref(5)

  const emit = defineEmits(["update:brightness"])

  const router = useRouter()

  const updateBrightness = (event) => {
    brightness.value = event.target.value
    emit("update:brightness", brightness.value)
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

  const goHome = () => {
    window.location.href = "/"
  }

  const toggleMobileMenu = () => {
    let mobileMenu = document.getElementById("mobileMenu")
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden")
    } else {
      mobileMenu.classList.add("hidden")
    }
  }

  const navigate = (link) => {
    toggleMobileMenu()
    router.push(link)
  }
</script>

<template>
  <div class="flex justify-center p-5 gap-5 content-center">
    <div class="w-1/12"></div>

    <div
      class="grow rounded lg:flex justify-between p-3 hidden"
      :class="{
        'bg-slate-200': brightness == 5,
        'bg-slate-300': brightness == 4,
        'bg-slate-600': brightness == 3,
        'bg-slate-800': brightness == 2,
        'bg-slate-900': brightness == 1,
      }">
      <div class="flex justify-between gap-2 w-full content-center">
        <div class="flex gap-1 p-2">
          <Terminal
            :class="{
              'text-emerald-500': brightness >= 4,
              'text-orange-200': brightness == 3,
              'text-orange-500': brightness == 2,
              'text-orange-400': brightness == 1,
            }"
            stroke-width="3" />

          <p
            :class="{
              'text-emerald-500 hover:text-emerald-400': brightness >= 4,
              'text-orange-200 hover:text-orange-100': brightness == 3,
              'text-orange-500 hover:text-orange-400': brightness == 2,
              'text-orange-400 hover:text-orange-300': brightness == 1,
            }"
            class="font-monospace font-bold cursor-pointer transition-colors duration-300"
            @click="goHome"
            id="logoText">
            josephhansen.dev
          </p>
        </div>

        <div class="flex gap-5 p-2 relative">
          <!-- Web Dropdown -->
          <Popover class="relative inline-block text-left">
            <PopoverButton
              aria-label="Web dropdown menu"
              class="font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300"
              :class="{
                'text-slate-900 hover:text-emerald-500': brightness == 5,
                'text-slate-800 hover:text-emerald-500': brightness == 4,
                'text-slate-300 hover:text-orange-200': brightness == 3,
                'text-slate-200 hover:text-orange-500': brightness == 2,
                'text-slate-400 hover:text-orange-400': brightness == 1,
              }">
              Web<ChevronDown />
            </PopoverButton>
            <PopoverPanel
              class="absolute z-10 mt-1 w-56 rounded"
              :class="{
                'bg-slate-100': brightness == 5,
                'bg-slate-200': brightness == 4,
                'bg-slate-500': brightness == 3,
                'bg-slate-700': brightness == 2,
                'bg-slate-800': brightness == 1,
              }">
              <div class="py-1" role="menu">
                <a
                  @click="$router.push('/web-portfolio')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  role="menuitem"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  ><b v-if="$route.path.startsWith('/web-portfolio')"
                    >Web Portfolio</b
                  ><span v-else>Web Portfolio</span></a
                >
                <a
                  @click="$router.push('/web-services')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  role="menuitem"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  ><b v-if="$route.path === '/web-services'">Web Services</b
                  ><span v-else>Web Services</span></a
                >
              </div>
            </PopoverPanel>
          </Popover>

          <!-- Unity Dropdown -->
          <Popover class="relative inline-block text-left">
            <PopoverButton
              aria-label="Unity dropdown menu"
              class="font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300"
              :class="{
                'text-slate-900 hover:text-emerald-500': brightness == 5,
                'text-slate-800 hover:text-emerald-500': brightness == 4,
                'text-slate-300 hover:text-orange-200': brightness == 3,
                'text-slate-200 hover:text-orange-500': brightness == 2,
                'text-slate-400 hover:text-orange-400': brightness == 1,
              }">
              Unity<ChevronDown />
            </PopoverButton>
            <PopoverPanel
              class="absolute z-10 mt-1 w-56 rounded"
              :class="{
                'bg-slate-100': brightness == 5,
                'bg-slate-200': brightness == 4,
                'bg-slate-500': brightness == 3,
                'bg-slate-700': brightness == 2,
                'bg-slate-800': brightness == 1,
              }">
              <div class="py-1" role="menu">
                <a
                  @click="$router.push('/unity-editor-scripts')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Helpful Editor Scripts</a
                >
                <a
                  @click="$router.push('/unity-projects')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Projects</a
                >
                <a
                  @click="$router.push('/unity-shader-graph')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Shader Graph</a
                >
              </div>
            </PopoverPanel>
          </Popover>

          <!-- Programming Dropdown with nested menus -->
          <Popover class="relative inline-block text-left">
            <PopoverButton
              aria-label="Programming dropdown menu"
              class="font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300"
              :class="{
                'text-slate-900 hover:text-emerald-500': brightness == 5,
                'text-slate-800 hover:text-emerald-500': brightness == 4,
                'text-slate-300 hover:text-orange-200': brightness == 3,
                'text-slate-200 hover:text-orange-500': brightness == 2,
                'text-slate-400 hover:text-orange-400': brightness == 1,
              }">
              Programming<ChevronDown />
            </PopoverButton>
            <PopoverPanel
              class="absolute z-10 mt-1 w-64 rounded"
              :class="{
                'bg-slate-100': brightness == 5,
                'bg-slate-200': brightness == 4,
                'bg-slate-500': brightness == 3,
                'bg-slate-700': brightness == 2,
                'bg-slate-800': brightness == 1,
              }">
              <div class="py-1" role="menu">
                <!-- PHP Section -->
                <div
                  class="px-4 py-1 text-sm font-semibold opacity-75"
                  :class="{
                    'text-slate-700': brightness == 5,
                    'text-slate-600': brightness == 4,
                    'text-slate-300': brightness == 3,
                    'text-slate-200': brightness == 2,
                    'text-slate-400': brightness == 1,
                  }">
                  PHP
                </div>
                <a
                  @click="$router.push('/figref')"
                  class="block px-6 py-1 cursor-pointer text-sm transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >FigRef</a
                >
                <a
                  @click="$router.push('/wordpress-themes')"
                  class="block px-6 py-1 cursor-pointer text-sm transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Custom WordPress Themes</a
                >
                <a
                  @click="$router.push('/wordpress-plugins')"
                  class="block px-6 py-1 cursor-pointer text-sm transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >WordPress Plugins</a
                >

                <!-- JavaScript Section -->
                <div
                  class="px-4 py-1 text-sm font-semibold opacity-75 mt-2"
                  :class="{
                    'text-slate-700': brightness == 5,
                    'text-slate-600': brightness == 4,
                    'text-slate-300': brightness == 3,
                    'text-slate-200': brightness == 2,
                    'text-slate-400': brightness == 1,
                  }">
                  JavaScript
                </div>
                <a
                  @click="$router.push('/discourse-image-comparison')"
                  class="block px-6 py-1 cursor-pointer text-sm transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Discourse Image Comparison Slider</a
                >
                <a
                  @click="$router.push('/garden-tracker')"
                  class="block px-6 py-1 cursor-pointer text-sm transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Garden Tracker</a
                >
                <a
                  @click="$router.push('/javascript-snippets')"
                  class="block px-6 py-1 cursor-pointer text-sm transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Javascript Snippets</a
                >

                <!-- Arduino Section -->
                <div
                  class="px-4 py-1 text-sm font-semibold opacity-75 mt-2"
                  :class="{
                    'text-slate-700': brightness == 5,
                    'text-slate-600': brightness == 4,
                    'text-slate-300': brightness == 3,
                    'text-slate-200': brightness == 2,
                    'text-slate-400': brightness == 1,
                  }">
                  Arduino
                </div>
                <a
                  @click="$router.push('/blender-arduino-controller')"
                  class="block px-6 py-1 cursor-pointer text-sm transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Blender Arduino Controller</a
                >
                <a
                  @click="$router.push('/arduino-leds')"
                  class="block px-6 py-1 cursor-pointer text-sm transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >LEDs</a
                >

                <!-- Python Section -->
                <div
                  class="px-4 py-1 text-sm font-semibold opacity-75 mt-2"
                  :class="{
                    'text-slate-700': brightness == 5,
                    'text-slate-600': brightness == 4,
                    'text-slate-300': brightness == 3,
                    'text-slate-200': brightness == 2,
                    'text-slate-400': brightness == 1,
                  }">
                  Python
                </div>
                <a
                  @click="$router.push('/instagram-scraper')"
                  class="block px-6 py-1 cursor-pointer text-sm transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Instagram Scraper</a
                >
              </div>
            </PopoverPanel>
          </Popover>

          <!-- Blender Dropdown -->
          <Popover class="relative inline-block text-left">
            <PopoverButton
              aria-label="Blender dropdown menu"
              class="font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300"
              :class="{
                'text-slate-900 hover:text-emerald-500': brightness == 5,
                'text-slate-800 hover:text-emerald-500': brightness == 4,
                'text-slate-300 hover:text-orange-200': brightness == 3,
                'text-slate-200 hover:text-orange-500': brightness == 2,
                'text-slate-400 hover:text-orange-400': brightness == 1,
              }">
              Blender<ChevronDown />
            </PopoverButton>
            <PopoverPanel
              class="absolute z-10 mt-1 w-64 rounded"
              :class="{
                'bg-slate-100': brightness == 5,
                'bg-slate-200': brightness == 4,
                'bg-slate-500': brightness == 3,
                'bg-slate-700': brightness == 2,
                'bg-slate-800': brightness == 1,
              }">
              <div class="py-1" role="menu">
                <a
                  @click="$router.push('/blender-art')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Art Portfolio</a
                >
                <a
                  @click="$router.push('/fruitbat')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Custom Build (Fruitbat)</a
                >
                <a
                  @click="$router.push('/blender-addons')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >My Add-Ons</a
                >
                <a
                  @click="$router.push('/shading-rig')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Shading Rig + Cel Character Tools</a
                >
              </div>
            </PopoverPanel>
          </Popover>

          <!-- Communications Dropdown -->
          <Popover class="relative inline-block text-left">
            <PopoverButton
              aria-label="Communications dropdown menu"
              class="font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300"
              :class="{
                'text-slate-900 hover:text-emerald-500': brightness == 5,
                'text-slate-800 hover:text-emerald-500': brightness == 4,
                'text-slate-300 hover:text-orange-200': brightness == 3,
                'text-slate-200 hover:text-orange-500': brightness == 2,
                'text-slate-400 hover:text-orange-400': brightness == 1,
              }">
              Communications<ChevronDown />
            </PopoverButton>
            <PopoverPanel
              class="absolute z-10 mt-1 w-56 rounded"
              :class="{
                'bg-slate-100': brightness == 5,
                'bg-slate-200': brightness == 4,
                'bg-slate-500': brightness == 3,
                'bg-slate-700': brightness == 2,
                'bg-slate-800': brightness == 1,
              }">
              <div class="py-1" role="menu">
                <a
                  @click="$router.push('/devlog')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Technical Blog</a
                >
                <a
                  @click="$router.push('/blog')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Personal Blog</a
                >
                <a
                  @click="$router.push('/presentations')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Presentations</a
                >
              </div>
            </PopoverPanel>
          </Popover>

          <!-- About Me Dropdown -->
          <Popover class="relative inline-block text-left">
            <PopoverButton
              aria-label="About Me dropdown menu"
              class="font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300"
              :class="{
                'text-slate-900 hover:text-emerald-500': brightness == 5,
                'text-slate-800 hover:text-emerald-500': brightness == 4,
                'text-slate-300 hover:text-orange-200': brightness == 3,
                'text-slate-200 hover:text-orange-500': brightness == 2,
                'text-slate-400 hover:text-orange-400': brightness == 1,
              }">
              About Me<ChevronDown />
            </PopoverButton>
            <PopoverPanel
              class="absolute z-10 mt-1 w-56 rounded"
              :class="{
                'bg-slate-100': brightness == 5,
                'bg-slate-200': brightness == 4,
                'bg-slate-500': brightness == 3,
                'bg-slate-700': brightness == 2,
                'bg-slate-800': brightness == 1,
              }">
              <div class="py-1" role="menu">
                <a
                  @click="$router.push('/about-me')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >About Me</a
                >
                <a
                  @click="$router.push('/resume')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Resume</a
                >
                <a
                  @click="$router.push('/contact')"
                  class="block px-4 py-2 cursor-pointer transition-colors duration-300"
                  :class="{
                    'text-slate-900 hover:text-emerald-500': brightness == 5,
                    'text-slate-800 hover:text-emerald-500': brightness == 4,
                    'text-slate-300 hover:text-orange-200': brightness == 3,
                    'text-slate-200 hover:text-orange-500': brightness == 2,
                    'text-slate-400 hover:text-orange-400': brightness == 1,
                  }"
                  >Contact</a
                >
              </div>
            </PopoverPanel>
          </Popover>
        </div>

        <div class="flex gap-3 content-center">
          <a
            href="https://github.com/josephclaytonhansen"
            target="_blank"
            rel="noopener noreferrer">
            <button
              :class="{
                'bg-slate-500 hover:bg-slate-600': brightness >= 4,
                'bg-slate-400 hover:bg-slate-500': brightness == 3,
                'bg-slate-600 hover:bg-slate-700': brightness == 2,
                'bg-slate-700 hover:bg-slate-800': brightness == 1,
              }"
              class="py-2 px-3 rounded text-white flex items-center gap-2 transition-colors duration-300"
              aria-label="Visit GitHub profile">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="16px"
                height="16px">
                <path :d="siGithub.path" />
              </svg>
              GitHub
            </button>
          </a>
          <a @click="$router.push('/contact')">
            <button
              :class="{
                'bg-emerald-600 hover:bg-emerald-700': brightness >= 4,
                'bg-slate-500 hover:bg-slate-600': brightness == 3,
                'bg-orange-600 hover:bg-orange-700': brightness == 2,
                'bg-orange-500 hover:bg-orange-600': brightness == 1,
              }"
              class="py-2 px-3 rounded text-white transition-colors duration-300">
              Contact
            </button>
          </a>
        </div>
      </div>
    </div>

    <div
      id="headerRightColumn"
      class="rounded relative lg:px-3 lg:pt-3 flex items-center"
      :class="{
        'bg-slate-200': brightness == 5,
        'bg-slate-300': brightness == 4,
        'bg-slate-600': brightness == 3,
        'bg-slate-800': brightness == 2,
        'bg-slate-900': brightness == 1,
      }">
      <div class="lg:hidden flex">
        <div class="flex gap-1 p-2">
          <Terminal
            :class="{
              'text-emerald-500': brightness >= 4,
              'text-orange-200': brightness == 3,
              'text-orange-500': brightness == 2,
              'text-orange-400': brightness == 1,
            }"
            stroke-width="3" />

          <p
            :class="{
              'text-emerald-500 hover:text-emerald-400': brightness >= 4,
              'text-orange-200 hover:text-orange-100': brightness == 3,
              'text-orange-500 hover:text-orange-400': brightness == 2,
              'text-orange-400 hover:text-orange-300': brightness == 1,
            }"
            class="font-monospace font-bold cursor-pointer transition-colors duration-300"
            @click="goHome"
            id="logoText">
            josephhansen.dev
          </p>
        </div>
      </div>

      <Menu
        class="block lg:hidden"
        :class="{
          'text-slate-900': brightness == 5,
          'text-slate-800': brightness == 4,
          'text-slate-300': brightness == 3,
          'text-slate-200': brightness == 2,
          'text-slate-400': brightness == 1,
        }"
        stroke-width="2"
        @click="toggleMobileMenu()" />

      <Popover>
        <PopoverButton
          aria-label="Toggle brightness dropdown menu"
          class="rounded mt-2 lg:mt-0 px-2 transition-all duration-300"
          :class="{
            'bg-slate-200': brightness == 5,
            'bg-slate-300': brightness == 4,
            'bg-slate-600': brightness == 3,
            'bg-slate-800': brightness == 2,
            'bg-slate-900': brightness == 1,
          }">
          <Sun
            v-if="brightness == 5"
            class="text-slate-900 hover:text-emerald-500 transition-colors duration-300" />
          <CloudSun
            v-else-if="brightness == 4"
            class="text-slate-800 hover:text-emerald-500 transition-colors duration-300" />
          <CloudDrizzle
            v-else-if="brightness == 3"
            class="text-slate-300 hover:text-orange-200 transition-colors duration-300" />
          <Moon
            v-else-if="brightness == 2"
            class="text-slate-200 hover:text-orange-500 transition-colors duration-300" />
          <MoonStar
            v-else
            class="text-slate-400 hover:text-orange-400 transition-colors duration-300" />
        </PopoverButton>
        <PopoverPanel class="absolute w-full right-4 mt-2 origin-top-right">
          <div class="flex flex-col gap-2 p-2">
            <div class="flex justify-between">
              <input
                type="range"
                min="1"
                max="5"
                v-model="brightness"
                @input="updateBrightness"
                class="slider w-20 mx-auto"
                id="myRange" />
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </div>
    <div class="w-1/12"></div>
  </div>

  <div
    id="mobileMenu"
    class="w-full fixed h-full p-4 top-0 z-50 overflow-hidden hidden"
    :class="{
      'bg-slate-200': brightness == 5,
      'bg-slate-300': brightness == 4,
      'bg-slate-600': brightness == 3,
      'bg-slate-800': brightness == 2,
      'bg-slate-900': brightness == 1,
    }">
    <div class="flex justify-between items-center">
      <div class="flex gap-1 p-2">
        <Terminal
          :class="{
            'text-emerald-500': brightness >= 4,
            'text-orange-200': brightness == 3,
            'text-orange-500': brightness == 2,
            'text-orange-400': brightness == 1,
          }"
          stroke-width="3" />

        <p
          :class="{
            'text-emerald-500 hover:text-emerald-400': brightness >= 4,
            'text-orange-200 hover:text-orange-100': brightness == 3,
            'text-orange-500 hover:text-orange-400': brightness == 2,
            'text-orange-400 hover:text-orange-300': brightness == 1,
          }"
          class="font-monospace font-bold cursor-pointer transition-colors duration-300"
          @click="goHome"
          id="logoText">
          josephhansen.dev
        </p>
      </div>
      <X
        :class="{
          'text-emerald-500 hover:text-emerald-400': brightness >= 4,
          'text-orange-200 hover:text-orange-100': brightness == 3,
          'text-orange-500 hover:text-orange-400': brightness == 2,
          'text-orange-400 hover:text-orange-300': brightness == 1,
        }"
        @click="toggleMobileMenu()"
        aria-label="Close mobile menu" />
    </div>
    <ul
      class="mt-4"
      :class="{
        'text-slate-900': brightness == 5,
        'text-slate-800': brightness == 4,
        'text-slate-300': brightness == 3,
        'text-slate-200': brightness == 2,
        'text-slate-400': brightness == 1,
      }">
      <!-- Web Section -->
      <li class="py-2 px-3 rounded opacity-75 font-semibold">Web</li>
      <ul class="ml-5">
        <a @click="navigate('/web-portfolio')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Web Portfolio
          </li>
        </a>
        <a @click="navigate('/web-services')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Web Services
          </li>
        </a>
      </ul>

      <!-- Unity Section -->
      <li class="py-2 px-3 rounded opacity-75 font-semibold">Unity</li>
      <ul class="ml-5">
        <a @click="navigate('/unity-editor-scripts')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Helpful Editor Scripts
          </li>
        </a>
        <a @click="navigate('/unity-projects')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Projects
          </li>
        </a>
        <a @click="navigate('/unity-shader-graph')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Shader Graph
          </li>
        </a>
      </ul>

      <!-- Programming Section -->
      <li class="py-2 px-3 rounded opacity-75 font-semibold">Programming</li>
      <ul class="ml-5">
        <li class="py-1 px-3 rounded opacity-75 text-sm">PHP</li>
        <ul class="ml-5">
          <a @click="navigate('/figref')">
            <li
              class="py-1 px-3 rounded text-sm transition-colors duration-300"
              :class="{
                'hover:text-emerald-500': brightness >= 4,
                'hover:text-orange-200': brightness == 3,
                'hover:text-orange-500': brightness == 2,
                'hover:text-orange-400': brightness == 1,
              }">
              FigRef
            </li>
          </a>
          <a @click="navigate('/wordpress-themes')">
            <li
              class="py-1 px-3 rounded text-sm transition-colors duration-300"
              :class="{
                'hover:text-emerald-500': brightness >= 4,
                'hover:text-orange-200': brightness == 3,
                'hover:text-orange-500': brightness == 2,
                'hover:text-orange-400': brightness == 1,
              }">
              Custom WordPress Themes
            </li>
          </a>
          <a @click="navigate('/wordpress-plugins')">
            <li
              class="py-1 px-3 rounded text-sm transition-colors duration-300"
              :class="{
                'hover:text-emerald-500': brightness >= 4,
                'hover:text-orange-200': brightness == 3,
                'hover:text-orange-500': brightness == 2,
                'hover:text-orange-400': brightness == 1,
              }">
              WordPress Plugins
            </li>
          </a>
        </ul>
        <li class="py-1 px-3 rounded opacity-75 text-sm">JavaScript</li>
        <ul class="ml-5">
          <a @click="navigate('/discourse-image-comparison')">
            <li
              class="py-1 px-3 rounded text-sm transition-colors duration-300"
              :class="{
                'hover:text-emerald-500': brightness >= 4,
                'hover:text-orange-200': brightness == 3,
                'hover:text-orange-500': brightness == 2,
                'hover:text-orange-400': brightness == 1,
              }">
              Discourse Image Comparison Slider
            </li>
          </a>
          <a @click="navigate('/garden-tracker')">
            <li
              class="py-1 px-3 rounded text-sm transition-colors duration-300"
              :class="{
                'hover:text-emerald-500': brightness >= 4,
                'hover:text-orange-200': brightness == 3,
                'hover:text-orange-500': brightness == 2,
                'hover:text-orange-400': brightness == 1,
              }">
              Garden Tracker
            </li>
          </a>
          <a @click="navigate('/javascript-snippets')">
            <li
              class="py-1 px-3 rounded text-sm transition-colors duration-300"
              :class="{
                'hover:text-emerald-500': brightness >= 4,
                'hover:text-orange-200': brightness == 3,
                'hover:text-orange-500': brightness == 2,
                'hover:text-orange-400': brightness == 1,
              }">
              Javascript Snippets
            </li>
          </a>
        </ul>
        <li class="py-1 px-3 rounded opacity-75 text-sm">Arduino</li>
        <ul class="ml-5">
          <a @click="navigate('/blender-arduino-controller')">
            <li
              class="py-1 px-3 rounded text-sm transition-colors duration-300"
              :class="{
                'hover:text-emerald-500': brightness >= 4,
                'hover:text-orange-200': brightness == 3,
                'hover:text-orange-500': brightness == 2,
                'hover:text-orange-400': brightness == 1,
              }">
              Blender Arduino Controller
            </li>
          </a>
          <a @click="navigate('/arduino-leds')">
            <li
              class="py-1 px-3 rounded text-sm transition-colors duration-300"
              :class="{
                'hover:text-emerald-500': brightness >= 4,
                'hover:text-orange-200': brightness == 3,
                'hover:text-orange-500': brightness == 2,
                'hover:text-orange-400': brightness == 1,
              }">
              LEDs
            </li>
          </a>
        </ul>
        <li class="py-1 px-3 rounded opacity-75 text-sm">Python</li>
        <ul class="ml-5">
          <a @click="navigate('/instagram-scraper')">
            <li
              class="py-1 px-3 rounded text-sm transition-colors duration-300"
              :class="{
                'hover:text-emerald-500': brightness >= 4,
                'hover:text-orange-200': brightness == 3,
                'hover:text-orange-500': brightness == 2,
                'hover:text-orange-400': brightness == 1,
              }">
              Instagram Scraper
            </li>
          </a>
        </ul>
      </ul>

      <!-- Blender Section -->
      <li class="py-2 px-3 rounded opacity-75 font-semibold">Blender</li>
      <ul class="ml-5">
        <a @click="navigate('/blender-art')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Art Portfolio
          </li>
        </a>
        <a @click="navigate('/fruitbat')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Custom Build (Fruitbat)
          </li>
        </a>
        <a @click="navigate('/blender-addons')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            My Add-Ons
          </li>
        </a>
        <a @click="navigate('/shading-rig')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Shading Rig + Cel Character Tools
          </li>
        </a>
      </ul>

      <!-- Communications Section -->
      <li class="py-2 px-3 rounded opacity-75 font-semibold">Communications</li>
      <ul class="ml-5">
        <a @click="navigate('/devlog')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Technical Blog
          </li>
        </a>
        <a @click="navigate('/blog')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Personal Blog
          </li>
        </a>
        <a @click="navigate('/presentations')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Presentations
          </li>
        </a>
      </ul>

      <!-- About Me Section -->
      <li class="py-2 px-3 rounded opacity-75 font-semibold">About Me</li>
      <ul class="ml-5">
        <a @click="navigate('/about-me')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            About Me
          </li>
        </a>
        <a @click="navigate('/resume')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Resume
          </li>
        </a>
        <a @click="navigate('/contact')">
          <li
            class="py-2 px-3 rounded transition-colors duration-300"
            :class="{
              'hover:text-emerald-500': brightness >= 4,
              'hover:text-orange-200': brightness == 3,
              'hover:text-orange-500': brightness == 2,
              'hover:text-orange-400': brightness == 1,
            }">
            Contact
          </li>
        </a>
      </ul>
    </ul>
  </div>
</template>

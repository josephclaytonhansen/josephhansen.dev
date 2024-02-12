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
            class="font-monospace font-bold cursor-pointer"
            @click="goHome"
            id="logoText">
            josephhansen.dev
          </p>
        </div>

        <div class="flex gap-5 p-2 relative">
          <a @click="$router.push('/portfolio')" class="cursor-pointer"
            ><h6
              class="font-semibold"
              :class="{
                'text-slate-900': brightness == 5,
                'text-slate-800': brightness == 4,
                'text-slate-300': brightness == 3,
                'text-slate-200': brightness == 2,
                'text-slate-400': brightness == 1,
              }">
              Web Portfolio
            </h6></a
          >

          <a @click="$router.push('/')"
            ><h6
              class="font-semibold cursor-pointer"
              :class="{
                'text-slate-900': brightness == 5,
                'text-slate-800': brightness == 4,
                'text-slate-300': brightness == 3,
                'text-slate-200': brightness == 2,
                'text-slate-400': brightness == 1,
              }">
              Web Services
            </h6></a
          >

          <Popover class="relative inline-block text-left">
            <PopoverButton
              aria-label="Creative projects dropdown menu"
              class="font-semibold flex hover:outline-none focus:outline-none"
              :class="{
                'text-slate-900': brightness == 5,
                'text-slate-800': brightness == 4,
                'text-slate-300': brightness == 3,
                'text-slate-200': brightness == 2,
                'text-slate-400': brightness == 1,
              }">
              Creative Projects<ChevronDown />
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
              <div
                class="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu">
                <a
                  href="https://hansenstudios.art/"
                  class="block px-4 py-2"
                  role="menuitem"
                  :class="{
                    'text-slate-900': brightness == 5,
                    'text-slate-800': brightness == 4,
                    'text-slate-300': brightness == 3,
                    'text-slate-200': brightness == 2,
                    'text-slate-400': brightness == 1,
                  }"
                  ><b>Art and Animation</b></a
                >
                <a
                  @click="window.location.href = '/blog'"
                  class="block px-4 py-2"
                  role="menuitem"
                  :class="{
                    'text-slate-900': brightness == 5,
                    'text-slate-800': brightness == 4,
                    'text-slate-300': brightness == 3,
                    'text-slate-200': brightness == 2,
                    'text-slate-400': brightness == 1,
                  }"
                  >Blog / Non-Fiction Writings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2"
                  role="menuitem"
                  :class="{
                    'text-slate-900': brightness == 5,
                    'text-slate-800': brightness == 4,
                    'text-slate-300': brightness == 3,
                    'text-slate-200': brightness == 2,
                    'text-slate-400': brightness == 1,
                  }"
                  >Custom Software</a
                >
                <a
                  href="#"
                  class="block px-4 py-2"
                  role="menuitem"
                  :class="{
                    'text-slate-900': brightness == 5,
                    'text-slate-800': brightness == 4,
                    'text-slate-300': brightness == 3,
                    'text-slate-200': brightness == 2,
                    'text-slate-400': brightness == 1,
                  }"
                  >Cooking and Recipes</a
                >
              </div>
            </PopoverPanel>
          </Popover>

          <a @click="$router.push('/about-me')">
            <h6
              class="font-semibold flex cursor-pointer"
              :class="{
                'text-slate-900': brightness == 5,
                'text-slate-800': brightness == 4,
                'text-slate-300': brightness == 3,
                'text-slate-200': brightness == 2,
                'text-slate-400': brightness == 1,
              }">
              About Me
            </h6></a
          >
        </div>

        <div class="flex gap-5 content-center">
          <a @click="$router.push('/contact')"
            ><button
              :class="{
                'bg-emerald-600': brightness >= 4,
                'bg-slate-500': brightness == 3,
                'bg-orange-600': brightness == 2,
                'bg-orange-500': brightness == 1,
              }"
              class="py-2 px-3 rounded text-white">
              Contact
            </button></a
          >
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
            class="font-monospace font-bold cursor-pointer"
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
          class="rounded mt-2 lg:mt-0 px-2"
          :class="{
            'bg-slate-200': brightness == 5,
            'bg-slate-300': brightness == 4,
            'bg-slate-600': brightness == 3,
            'bg-slate-800': brightness == 2,
            'bg-slate-900': brightness == 1,
          }">
          <Sun v-if="brightness == 5" class="text-slate-900" />
          <CloudSun v-else-if="brightness == 4" class="text-slate-800" />
          <CloudDrizzle v-else-if="brightness == 3" class="text-slate-300" />
          <Moon v-else-if="brightness == 2" class="text-slate-200" />
          <MoonStar v-else class="text-slate-400" />
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
          class="font-monospace font-bold cursor-pointer"
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
      <a @click="navigate('/contact')"
        ><li class="py-2 px-3 rounded">Contact</li></a
      >
      <a @click="navigate('/portfolio')"
        ><li class="py-2 px-3 rounded">Web Portfolio</li></a
      >
      <a @click="navigate('/')"
        ><li class="py-2 px-3 rounded">Web Services</li></a
      >
      <li class="py-2 px-3 rounded opacity-75">Creative Projects</li>
      <ul class="ml-5">
        <li class="py-2 px-3 rounded">Art and Animation</li>
        <a @click="navigate('/blog')"
          ><li class="py-2 px-3 rounded">Blog / Non-Fiction Writings</li></a
        >
        <li class="py-2 px-3 rounded">Custom Software</li>
        <li class="py-2 px-3 rounded">Cooking and Recipes</li>
      </ul>

      <a @click="navigate('/about-me')"
        ><li class="py-2 px-3 rounded">About Me</li></a
      >
    </ul>
  </div>
</template>

<style scoped>
  #logoText {
    transition: all 0.2s ease-in-out;
  }
</style>

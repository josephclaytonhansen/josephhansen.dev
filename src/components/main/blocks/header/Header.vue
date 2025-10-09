<script setup>
  import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue"

  import {
    CollapsibleContent,
    CollapsibleRoot,
    CollapsibleTrigger,
  } from "reka-ui"

  import { useRouter } from "vue-router"
  import {
    Menu,
    ChevronDown,
    ChevronUp,
    Sun,
    Moon,
    CloudDrizzle,
    Terminal,
    CloudSun,
    MoonStar,
    X,
  } from "lucide-vue-next"

  import { siGithub } from "simple-icons"
  import { ref, onMounted, computed } from "vue"

  const brightness = ref(5)

  const emit = defineEmits(["update:brightness"])

  const router = useRouter()

  // Navigation structure
  const navigationMenu = [
    {
      id: "web",
      label: "Web",
      items: [
        {
          label: "Web Portfolio",
          path: "/web-portfolio",
          activePath: "/web-portfolio",
        },
        {
          label: "Web Services",
          path: "/web-services",
          activePath: "/web-services",
        },
      ],
    },
    {
      id: "unity",
      label: "Unity",
      items: [
        { label: "Helpful Editor Scripts", path: "/unity-editor-scripts" },
        { label: "Projects", path: "/unity-projects" },
        { label: "Shader Graph", path: "/unity-shader-graph" },
      ],
    },
    {
      id: "programming",
      label: "Programming",
      subsections: [
        {
          id: "php",
          label: "PHP",
          items: [
            { label: "FigRef", path: "/figref" },
            { label: "Custom WordPress Themes", path: "/wordpress-themes" },
            { label: "WordPress Plugins", path: "/wordpress-plugins" },
          ],
        },
        {
          id: "javascript",
          label: "JavaScript",
          items: [
            {
              label: "Discourse Image Comparison Slider",
              path: "/discourse-image-comparison",
            },
            { label: "Garden Tracker", path: "/garden-tracker" },
            { label: "Javascript Snippets", path: "/javascript-snippets" },
          ],
        },
        {
          id: "arduino",
          label: "Arduino",
          items: [
            {
              label: "Blender Arduino Controller",
              path: "/blender-arduino-controller",
            },
            { label: "LEDs", path: "/arduino-leds" },
          ],
        },
        {
          id: "python",
          label: "Python",
          items: [{ label: "Instagram Scraper", path: "/instagram-scraper" }],
        },
      ],
    },
    {
      id: "blender",
      label: "Blender",
      items: [
        { label: "Art Portfolio", path: "/blender-art" },
        { label: "Custom Build (Fruitbat)", path: "/fruitbat" },
        { label: "My Add-Ons", path: "/blender-addons" },
        { label: "Shading Rig + Cel Character Tools", path: "/shading-rig" },
      ],
    },
    {
      id: "communications",
      label: "Communications",
      items: [
        { label: "Technical Blog", path: "/devlog" },
        { label: "Personal Blog", path: "/blog" },
        { label: "Presentations", path: "/presentations" },
      ],
    },
    {
      id: "aboutme",
      label: "About Me",
      items: [
        { label: "About Me", path: "/about-me" },
        { label: "Resume", path: "/resume" },
        { label: "Contact", path: "/contact" },
      ],
    },
  ]

  // Computed class strings based on brightness
  const headerBg = computed(() => {
    return {
      "bg-slate-200": brightness.value == 5,
      "bg-slate-300": brightness.value == 4,
      "bg-slate-600": brightness.value == 3,
      "bg-slate-800": brightness.value == 2,
      "bg-slate-900": brightness.value == 1,
    }
  })

  const dropdownBg = computed(() => {
    return {
      "bg-slate-100": brightness.value == 5,
      "bg-slate-200": brightness.value == 4,
      "bg-slate-500": brightness.value == 3,
      "bg-slate-700": brightness.value == 2,
      "bg-slate-800": brightness.value == 1,
    }
  })

  const logoColor = computed(() => {
    return {
      "text-emerald-500": brightness.value >= 4,
      "text-orange-200": brightness.value == 3,
      "text-orange-500": brightness.value == 2,
      "text-orange-400": brightness.value == 1,
    }
  })

  const logoTextHover = computed(() => {
    return {
      "text-emerald-500 hover:text-emerald-400": brightness.value >= 4,
      "text-orange-200 hover:text-orange-100": brightness.value == 3,
      "text-orange-500 hover:text-orange-400": brightness.value == 2,
      "text-orange-400 hover:text-orange-300": brightness.value == 1,
    }
  })

  const navLinkColor = computed(() => {
    return {
      "text-slate-900 hover:text-emerald-500": brightness.value == 5,
      "text-slate-800 hover:text-emerald-500": brightness.value == 4,
      "text-slate-300 hover:text-orange-200": brightness.value == 3,
      "text-slate-200 hover:text-orange-500": brightness.value == 2,
      "text-slate-400 hover:text-orange-400": brightness.value == 1,
    }
  })

  const mobileMenuText = computed(() => {
    return {
      "text-slate-900": brightness.value == 5,
      "text-slate-800": brightness.value == 4,
      "text-slate-300": brightness.value == 3,
      "text-slate-200": brightness.value == 2,
      "text-slate-400": brightness.value == 1,
    }
  })

  const sectionHeaderText = computed(() => {
    return {
      "text-slate-700": brightness.value == 5,
      "text-slate-600": brightness.value == 4,
      "text-slate-300": brightness.value == 3,
      "text-slate-200": brightness.value == 2,
      "text-slate-400": brightness.value == 1,
    }
  })

  const githubButtonBg = computed(() => {
    return {
      "bg-slate-500 hover:bg-slate-600": brightness.value >= 4,
      "bg-slate-400 hover:bg-slate-500": brightness.value == 3,
      "bg-slate-600 hover:bg-slate-700": brightness.value == 2,
      "bg-slate-700 hover:bg-slate-800": brightness.value == 1,
    }
  })

  const contactButtonBg = computed(() => {
    return {
      "bg-emerald-600 hover:bg-emerald-700": brightness.value >= 4,
      "bg-slate-500 hover:bg-slate-600": brightness.value == 3,
      "bg-orange-600 hover:bg-orange-700": brightness.value == 2,
      "bg-orange-500 hover:bg-orange-600": brightness.value == 1,
    }
  })

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

    // Set link colors based on brightness
    let linkColor = {
      1: "#cbd5e1", // slate-400
      2: "#e2e8f0", // slate-200
      3: "#d1d5db", // slate-300
      4: "#1e293b", // slate-800
      5: "#0f172a", // slate-900
    }[brightness.value]
    let linkHoverColor = {
      1: "#fb923c", // orange-400
      2: "#f97316", // orange-500
      3: "#fed7aa", // orange-200
      4: "#10b981", // emerald-500
      5: "#10b981", // emerald-500
    }[brightness.value]
    document.documentElement.style.setProperty("--link-color", linkColor)
    document.documentElement.style.setProperty(
      "--link-hover-color",
      linkHoverColor,
    )
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

      // Set link colors based on brightness
      let linkColor = {
        1: "#cbd5e1", // slate-400
        2: "#e2e8f0", // slate-200
        3: "#d1d5db", // slate-300
        4: "#1e293b", // slate-800
        5: "#0f172a", // slate-900
      }[brightness.value]
      let linkHoverColor = {
        1: "#fb923c", // orange-400
        2: "#f97316", // orange-500
        3: "#fed7aa", // orange-200
        4: "#10b981", // emerald-500
        5: "#10b981", // emerald-500
      }[brightness.value]
      document.documentElement.style.setProperty("--link-color", linkColor)
      document.documentElement.style.setProperty(
        "--link-hover-color",
        linkHoverColor,
      )
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
      :class="headerBg">
      <div class="flex justify-between gap-2 w-full content-center">
        <div class="flex gap-1 p-2">
          <Terminal :class="logoColor" stroke-width="3" />

          <p
            :class="logoTextHover"
            class="font-monospace font-bold cursor-pointer transition-colors duration-300"
            @click="goHome"
            id="logoText">
            josephhansen.dev
          </p>
        </div>

        <div class="flex gap-5 p-2 relative">
          <!-- Dynamic Navigation Dropdowns -->
          <Popover
            v-for="menu in navigationMenu"
            :key="menu.id"
            class="relative inline-block text-left">
            <PopoverButton
              :aria-label="`${menu.label} dropdown menu`"
              class="font-semibold flex hover:outline-none focus:outline-none transition-colors duration-300"
              :class="navLinkColor">
              {{ menu.label }}<ChevronDown />
            </PopoverButton>
            <PopoverPanel
              class="absolute z-10 mt-1 rounded"
              :class="[dropdownBg, menu.subsections ? 'w-64' : 'w-56']">
              <div class="py-1" role="menu">
                <!-- Regular items (no subsections) -->
                <template v-if="!menu.subsections">
                  <a
                    v-for="item in menu.items"
                    :key="item.path"
                    @click="$router.push(item.path)"
                    class="block px-4 py-2 cursor-pointer"
                    role="menuitem">
                    <b
                      v-if="
                        item.activePath &&
                        $route.path.startsWith(item.activePath)
                      "
                      >{{ item.label }}</b
                    >
                    <b
                      v-else-if="!item.activePath && $route.path === item.path"
                      >{{ item.label }}</b
                    >
                    <span v-else>{{ item.label }}</span>
                  </a>
                </template>

                <!-- Subsections (Programming menu) -->
                <template v-else>
                  <template
                    v-for="(subsection, index) in menu.subsections"
                    :key="subsection.id">
                    <div
                      class="px-4 py-1 text-sm font-semibold opacity-75"
                      :class="[sectionHeaderText, index > 0 ? 'mt-2' : '']">
                      {{ subsection.label }}
                    </div>
                    <a
                      v-for="item in subsection.items"
                      :key="item.path"
                      @click="$router.push(item.path)"
                      class="block px-6 py-1 cursor-pointer text-sm">
                      {{ item.label }}
                    </a>
                  </template>
                </template>
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
              :class="githubButtonBg"
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
              :class="contactButtonBg"
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
      :class="headerBg">
      <div class="lg:hidden flex">
        <div class="flex gap-1 p-2">
          <Terminal :class="logoColor" stroke-width="3" />

          <p
            :class="logoTextHover"
            class="font-monospace font-bold cursor-pointer transition-colors duration-300"
            @click="goHome"
            id="logoText">
            josephhansen.dev
          </p>
        </div>
      </div>

      <Menu
        class="block lg:hidden"
        :class="mobileMenuText"
        stroke-width="2"
        @click="toggleMobileMenu()" />

      <Popover>
        <PopoverButton
          aria-label="Toggle brightness dropdown menu"
          class="rounded mt-2 lg:mt-0 px-2"
          :class="headerBg">
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
    :class="headerBg">
    <div class="flex justify-between items-center">
      <div class="flex gap-1 p-2">
        <Terminal :class="logoColor" stroke-width="3" />

        <p
          :class="logoTextHover"
          class="font-monospace font-bold cursor-pointer transition-colors duration-300"
          @click="goHome"
          id="logoText">
          josephhansen.dev
        </p>
      </div>
      <X
        :class="logoTextHover"
        @click="toggleMobileMenu()"
        aria-label="Close mobile menu" />
    </div>
    <ul class="mt-4" :class="mobileMenuText">
      <!-- Dynamic Mobile Menu -->
      <template v-for="menu in navigationMenu" :key="menu.id">
        <!-- Menu with subsections (Programming) -->
        <template v-if="menu.subsections">
          <li class="py-2 px-3 rounded opacity-75 font-semibold">
            {{ menu.label }}
          </li>
          <ul class="ml-5">
            <CollapsibleRoot
              v-for="subsection in menu.subsections"
              :key="subsection.id">
              <CollapsibleTrigger
                class="py-1 px-3 rounded opacity-75 text-sm flex justify-between items-center w-full"
                v-slot="{ open }">
                <span>{{ subsection.label }}</span>
                <ChevronUp v-if="open" class="w-4 h-4" />
                <ChevronDown v-else class="w-4 h-4" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul class="ml-5">
                  <a
                    v-for="item in subsection.items"
                    :key="item.path"
                    @click="navigate(item.path)">
                    <li class="py-1 px-3 rounded text-sm">{{ item.label }}</li>
                  </a>
                </ul>
              </CollapsibleContent>
            </CollapsibleRoot>
          </ul>
        </template>

        <!-- Menu without subsections (with collapsible for Web, regular list for others) -->
        <template v-else>
          <!-- Web section with collapsible -->
          <CollapsibleRoot v-if="menu.id === 'web'">
            <CollapsibleTrigger
                class="py-1 px-3 rounded opacity-75 text-sm flex justify-between items-center w-full"
                v-slot="{ open }">
                <span>{{ subsection.label }}</span>
                <ChevronUp v-if="open" class="w-4 h-4" />
                <ChevronDown v-else class="w-4 h-4" />
              </CollapsibleTrigger>
            <CollapsibleContent>
              <ul class="ml-5">
                <a
                  v-for="item in menu.items"
                  :key="item.path"
                  @click="navigate(item.path)">
                  <li class="py-2 px-3 rounded">{{ item.label }}</li>
                </a>
              </ul>
            </CollapsibleContent>
          </CollapsibleRoot>

          <!-- Other sections -->
          <template v-else>
            <li class="py-2 px-3 rounded opacity-75 font-semibold">
              {{ menu.label }}
            </li>
            <ul class="ml-5">
              <a
                v-for="item in menu.items"
                :key="item.path"
                @click="navigate(item.path)">
                <li class="py-2 px-3 rounded">{{ item.label }}</li>
              </a>
            </ul>
          </template>
        </template>
      </template>
    </ul>
  </div>
</template>

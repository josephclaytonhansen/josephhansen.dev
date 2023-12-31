<script setup>
    import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
    import { GalleryThumbnails,  ChevronDown, ChevronUp, Library, Search, Sun, Moon, CloudDrizzle, Terminal, CloudSun, MoonStar } from 'lucide-vue-next'
    import { ref, onMounted } from 'vue'

    const brightness = ref(5)


    const emit = defineEmits(['update:brightness'])

    const updateBrightness = (event) => {
    brightness.value = event.target.value
    emit('update:brightness', brightness.value)
  }

    onMounted(() => {
        let localStorage = window.localStorage
        if (localStorage.getItem('brightness')) {
            brightness.value = Number(localStorage.getItem('brightness'))
        }

    })

    const goHome = () => {
        window.location.href = '/'
    }


</script>

<template>
    <div class="flex justify-center p-5 gap-5 content-center">
      <div class="w-1/12"></div>

      <div class="grow rounded flex justify-between p-3" :class="{'bg-slate-200': brightness==5, 'bg-slate-300': brightness==4, 'bg-slate-600':brightness==3,'bg-slate-800':brightness==2, 'bg-slate-900':brightness==1}">
        <div class = "flex justify-between gap-2 w-full content-center">
          <div class = "flex gap-1 p-2">

            <Terminal :class = "{'text-emerald-500': brightness>= 4, 'text-orange-200': brightness == 3, 'text-orange-500': brightness==2, 'text-orange-400': brightness==1}" stroke-width="3"/>

              <p :class = "{'text-emerald-500 hover:text-emerald-400': brightness>= 4, 'text-orange-200 hover:text-orange-100': brightness == 3, 'text-orange-500 hover:text-orange-400': brightness==2, 'text-orange-400 hover:text-orange-300': brightness==1}" class = "font-monospace font-bold cursor-pointer" @click="goHome" id = "logoText">josephhansen.dev</p>

          </div>

          <div class = "flex gap-5 p-2 relative">

            <h6 class = "font-semibold" :class="{'text-slate-900':brightness==5,'text-slate-800':brightness==4, 'text-slate-300':brightness==3,'text-slate-200':brightness==2,'text-slate-400':brightness==1}" >Web Portfolio</h6>

            <h6 class = "font-semibold" :class="{'text-slate-900':brightness==5,'text-slate-800':brightness==4, 'text-slate-300':brightness==3,'text-slate-200':brightness==2,'text-slate-400':brightness==1}" >Web Services</h6>


            <Popover class="relative inline-block text-left">
              <PopoverButton class="font-semibold flex hover:outline-none focus:outline-none" :class="{'text-slate-900':brightness==5,'text-slate-800':brightness==4, 'text-slate-300':brightness==3,'text-slate-200':brightness==2,'text-slate-400':brightness==1}">
                Creative Projects<ChevronDown/>
              </PopoverButton>
              <PopoverPanel class="absolute z-10 mt-1 w-56 rounded " :class="{'bg-slate-100': brightness==5, 'bg-slate-200': brightness==4, 'bg-slate-500':brightness==3,'bg-slate-700':brightness==2, 'bg-slate-800':brightness==1}">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" class="block px-4 py-2" role="menuitem" :class="{'text-slate-900':brightness==5,'text-slate-800':brightness==4, 'text-slate-300':brightness==3,'text-slate-200':brightness==2,'text-slate-400':brightness==1}"><b>Art and Animation</b></a>
                  <a href="#" class="block px-4 py-2" role="menuitem" :class="{'text-slate-900':brightness==5,'text-slate-800':brightness==4, 'text-slate-300':brightness==3,'text-slate-200':brightness==2,'text-slate-400':brightness==1}">Blog / Non-Fiction Writings</a>
                  <a href="#" class="block px-4 py-2" role="menuitem" :class="{'text-slate-900':brightness==5,'text-slate-800':brightness==4, 'text-slate-300':brightness==3,'text-slate-200':brightness==2,'text-slate-400':brightness==1}">Custom Software</a>
                  <a href="#" class="block px-4 py-2" role="menuitem" :class="{'text-slate-900':brightness==5,'text-slate-800':brightness==4, 'text-slate-300':brightness==3,'text-slate-200':brightness==2,'text-slate-400':brightness==1}">Cooking and Recipes</a>
                </div>
              </PopoverPanel>
            </Popover>

            <h6 class = "font-semibold flex" :class="{'text-slate-900':brightness==5,'text-slate-800':brightness==4, 'text-slate-300':brightness==3,'text-slate-200':brightness==2,'text-slate-400':brightness==1}" >About Me</h6>
          
          </div>

          <div class=  "flex gap-5 content-center">

            <button :class = "{'bg-emerald-600': brightness>= 4, 'bg-slate-500': brightness == 3, 'bg-orange-600': brightness==2, 'bg-orange-500': brightness==1}" class="py-2 px-3 rounded text-white">Contact</button>

            <Search class = "m-2 mr-2" :class = "{'text-slate-900':brightness==5,'text-slate-800':brightness==4, 'text-slate-300':brightness==3,'text-slate-200':brightness==2,'text-slate-400':brightness==1}" stroke-width="2"/></div>
        
          </div>
      </div>
      
      <div id="headerRightColumn" class="rounded relative px-3 pt-3" :class="{'bg-slate-200': brightness==5, 'bg-slate-300': brightness==4, 'bg-slate-600':brightness==3,'bg-slate-800':brightness==2, 'bg-slate-900':brightness==1}">
          
        <Popover>
            <PopoverButton class="rounded mt-2 px-2" :class="{'bg-slate-200': brightness==5, 'bg-slate-300': brightness==4, 'bg-slate-600':brightness==3,'bg-slate-800':brightness==2, 'bg-slate-900':brightness==1}">
              <Sun v-if="brightness==5" class = "text-slate-900"/>
              <CloudSun v-else-if="brightness==4" class = "text-slate-800"/>
              <CloudDrizzle v-else-if="brightness==3" class = "text-slate-300"/>
              <Moon v-else-if="brightness==2" class="text-slate-200"/>
              <MoonStar v-else class="text-slate-400"/>
            </PopoverButton>
            <PopoverPanel class="absolute w-full right-4 mt-2 origin-top-right">
              <div class="flex flex-col gap-2 p-2">
                <div class="flex justify-between">
                  <input type="range" min="1" max="5" v-model="brightness" @input="updateBrightness" class="slider w-20 mx-auto" id="myRange">
                </div>
              </div>
            </PopoverPanel>
          </Popover>
          
        </div>
        <div class="w-1/12"></div>
      </div>
  </template>

<style scoped>
  #logoText{
    transition: all 0.2s ease-in-out;
  }
</style>
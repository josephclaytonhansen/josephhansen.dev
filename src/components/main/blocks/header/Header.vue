<script setup>
    import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
    import { GalleryThumbnails,  ChevronDown, ChevronUp, Library, Search, Sun, Moon, CloudDrizzle } from 'lucide-vue-next'
    import { ref, onMounted } from 'vue'

    const brightness = ref(5)
    const emit = defineEmits(['update:brightness'])

    const updateBrightness = (event) => {
    brightness.value = event.target.value
    emit('update:brightness', brightness.value)
  }
</script>

<template>
    <div class="flex justify-center p-5 gap-5">
      <div class="w-1/12"></div>
      <div class="grow rounded flex justify-between p-5" :class="{'bg-slate-200': brightness==5, 'bg-slate-300': brightness==4, 'bg-slate-500':brightness==3,'bg-slate-800':brightness==2, 'bg-slate-900':brightness==1}">
        <Popover>
        </Popover>
      </div>
      <div id="headerRightColumn" class="rounded relative" :class="{'bg-slate-200': brightness==5, 'bg-slate-300': brightness==4, 'bg-slate-500':brightness==3,'bg-slate-800':brightness==2, 'bg-slate-900':brightness==1}">

          <Popover>
            <PopoverButton class="rounded p-2" :class="{'bg-slate-200': brightness==5, 'bg-slate-300': brightness==4, 'bg-slate-500':brightness==3,'bg-slate-800':brightness==2, 'bg-slate-900':brightness==1}">
              <Sun v-if="brightness>=4" class = "text-slate-900"/>
              <CloudDrizzle v-else-if="brightness==3" class = "text-slate-300"/>
              <Moon v-else-if="brightness<=2" class="text-slate-200"/>
            </PopoverButton>
            <PopoverPanel class="absolute w-full right-5 origin-top-right">
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


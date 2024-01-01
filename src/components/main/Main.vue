<template>
    <main :class="['h-dvh', 'w-dvw', 'p-7', brightnessClass]" >
      <Header @update:brightness="handleBrightnessUpdate"/>
    </main>
  </template>
  
  <script setup>
    import Header from './blocks/header/Header.vue'
    import { ref, computed } from 'vue'
    
    const brightness = ref(5)
    
    const handleBrightnessUpdate = (value) => {
        brightness.value = Number(value)
    }

    const brightnessClass = computed(() => {
        switch(brightness.value) {
        case 5: return 'bg-gradient-to-br from-sky-300 to-sky-500'
        case 4: return 'bg-gradient-to-br from-sky-400 to-sky-600'
        case 3: return 'bg-gradient-to-br from-sky-500 to-sky-700'
        case 2: return 'bg-gradient-to-br from-sky-700 to-slate-800'
        case 1: return 'bg-gradient-to-br from-slate-800 to-slate-900'
        default: return ''
        }
    })
</script>
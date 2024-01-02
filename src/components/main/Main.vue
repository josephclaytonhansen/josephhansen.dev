<script setup>
    import Header from './blocks/header/Header.vue'
    import Hero from './blocks/hero/Hero.vue'
    import { ref, computed, onMounted } from 'vue'
    
    const brightness = ref(3)
    
    const handleBrightnessUpdate = (value) => {
        brightness.value = Number(value)
        let localStorage = window.localStorage
        localStorage.setItem('brightness', brightness.value)
    }

    const brightnessClass = computed(() => {
        switch(brightness.value) {
        case 5: return 'bg-gradient-to-br from-sky-300 to-sky-500'
        case 4: return 'bg-gradient-to-br from-sky-400 to-sky-600'
        case 3: return 'bg-gradient-to-br from-slate-400 to-slate-600'
        case 2: return 'bg-gradient-to-br from-sky-800 to-slate-800'
        case 1: return 'bg-gradient-to-br from-slate-700 to-slate-900'
        default: return ''
        }
    })

    onMounted(() => {
        let localStorage = window.localStorage
        if (localStorage.getItem('brightness')) {
            brightness.value = Number(localStorage.getItem('brightness'))
        } else {
            localStorage.setItem('brightness', brightness.value)
        }
    })
</script>

<template>
    <main :class="['h-dvh', 'w-dvw', 'p-7', brightnessClass]" >
      <Header @update:brightness="handleBrightnessUpdate"/>
      <div class = "flex justify-center w-full px-10">
        <div class = "w-10/12 rounded p-3" :class="{'bg-slate-200': brightness==5, 'bg-slate-300': brightness==4, 'bg-slate-600':brightness==3,'bg-slate-800':brightness==2, 'bg-slate-900':brightness==1}">


            <Hero :brightness="brightness"/>

        </div>
    </div>
    </main>
  </template>
<script setup>


    import { ref, computed, onMounted } from 'vue'
    
    const brightness = ref(3)



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
    <main :class="['w-dvw', brightnessClass]" class="md:p-7 sm:p-5" style = "min-height:100vh;overflow-x:hidden;">

    </main>
</template>
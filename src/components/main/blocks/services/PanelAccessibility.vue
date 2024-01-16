<script setup>
    import { ref, computed, onMounted, watch } from 'vue'
    const props = defineProps({
        brightness: Number
    })
    import ctaForm from '../ctaForm/ctaForm.vue'
    import chroma from 'chroma-js'
    import {EyeOff, EarOff, Accessibility, Eye, Check, X} from 'lucide-vue-next'


    const iconClass = (brightness) => {
                if (brightness >= 4){
                    return 'text-emerald-500'
                } else if (brightness == 3){
                    return 'text-orange-200'
                } else if (brightness == 2){
                    return 'text-orange-500'
                } else if (brightness == 1){
                    return 'text-orange-400'
                }
            }

    const redGreenColorBlindMode = ref(false)
    const testSuccessButtonClass = computed(() => {
        if (redGreenColorBlindMode.value){
            return 'bg-emerald-500 hover:bg-emerald-600'
        } else {
            return 'bg-gray-500 hover:bg-gray-600'
        }
    })

    const testFailButtonClass = computed(() => {
        if (redGreenColorBlindMode.value){
            return 'bg-red-500 hover:bg-red-600'
        } else {
            return 'bg-gray-500 hover:bg-gray-600'
        }
    })


    const pClass = (brightness) => {
                if (brightness >= 4){
                    return 'text-slate-800'
                } else if (brightness == 3){
                    return 'text-slate-200'
                } else if (brightness == 2){
                    return 'text-slate-300'
                } else if (brightness == 1){
                    return 'text-slate-300'
                }
            
    }

    const alternateTableRowColors = (brightness) => {
        let rows = document.querySelectorAll('tr')


        let currentBackground
        if (brightness == 5){
            currentBackground = chroma('#e2e8f0')
        } else if (brightness == 4){
            currentBackground = chroma('#cbd5e1')
        } else if (brightness == 3){
            currentBackground = chroma('#475569')
        } else if (brightness == 2){
            currentBackground = chroma('#1e293b')
        } else if (brightness == 1){
            currentBackground = chroma('#0f172a')
        }
        for (let i = 1; i < rows.length; i++) {
            if (i % 2 == 0) {
                rows[i].style.backgroundColor = currentBackground.brighten(0.0)
            } else {
                rows[i].style.backgroundColor = currentBackground.brighten(0.2)
            }
        }
    }

    const toggleRedGreenColorBlindMode = () => {
        redGreenColorBlindMode.value = !redGreenColorBlindMode.value
        if (redGreenColorBlindMode.value){

        }
    }

    onMounted(() => {
        alternateTableRowColors(props.brightness)
    })

    watch(() => props.brightness, (newValue, oldValue) => {
        alternateTableRowColors(newValue)
    })

</script>

<template>
    <div class = "flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center flex-col">
        <div class = "prose md:w-10/12 sm:w-12/12 mt-8" >
            <h2 class = "text-5xl" :class = "pClass(brightness)">
                98% of websites don’t comply with the Web Content Accessibility Guidelines.
            </h2>
            <h3 class = "text-2xl" :class = "pClass(brightness)">
                Does yours?
            </h3>
            <p :class = "pClass(brightness)">
                I've made a special focus of my web development studies accessibility. I believe everyone should be able to not only use, but enjoy, the content on the Internet. Let me help you make your website accessible to everyone. 
            </p>
            <h4 :class = "pClass(brightness)">
                Here's a real world example from a site I've seen. Which button is the "Submit" button?
            </h4>
            <p :class="pClass(brightness)">
                These buttons only use icons, with no alt text- so for users using a screen reader, they have no idea what the buttons do.
            </p>
            <p :class="pClass(brightness)">
                It doesn't stop there, though- for users with color blindness, the green and red buttons are indistinguishable.</p>
            <div class = "flex w-full">
                <button :class="{'bg-emerald-600 text-slate-200': brightness>= 4, 'bg-slate-500 text-slate-200': brightness == 3, 'bg-orange-600 text-slate-800': brightness==2, 'bg-orange-500 text-slate-800': brightness==1}" class = "text-xl font-semibold rounded px-5 py-2 w-full flex align-middle" @click = "toggleRedGreenColorBlindMode">
                    <EyeOff v-if="redGreenColorBlindMode"/>
                    <Eye v-if="!redGreenColorBlindMode"/>
                    Toggle red/green color blind/screen reader mode
                </button>

            </div>
            <div class = "flex w-full pt-4 gap-2">
                <div class = "w-6/12">
                    <button class = "rounded px-5 py-2 w-full" :class="testSuccessButtonClass">
                        <Check v-if="redGreenColorBlindMode"/>
                    </button>
                </div>
                <div class = "w-6/12">
                    <button class = "rounded px-5 py-2 w-full" :class="testFailButtonClass">
                        <X v-if="redGreenColorBlindMode"/>
                    </button>
                </div>
            </div>

            <h4 class = "text-2xl" :class = "pClass(brightness)">
                Here's a better version.
            </h4>

           <div class = "w-full flex">
                <div class = "w-6/12">
                    <button class = "text-xl font-semibold rounded px-5 py-2 flex align-middle" :class="{'bg-emerald-600 text-slate-200': brightness>= 4, 'bg-slate-500 text-slate-200': brightness == 3, 'bg-orange-600 text-slate-800': brightness==2, 'bg-orange-500 text-slate-800': brightness==1}" aria-label="Submit">Submit
                        <Check/>
                    </button>
                </div>

                <div class = "w-6/12 pb-3">
                    <button class = "text-xl font-semibold rounded px-5 py-2 flex align-middle" :class="{'bg-emerald-600 text-slate-200': brightness>= 4, 'bg-slate-500 text-slate-200': brightness == 3, 'bg-orange-600 text-slate-800': brightness==2, 'bg-orange-500 text-slate-800': brightness==1}" aria-label="Cancel">Cancel
                        <X/>
                    </button>
                </div>

           </div>

           <p :class="pClass(brightness)">These buttons have screen reader labels and don't rely on color to indicate which is which.</p>

           <p :class="pClass(brightness)">Changes like these may seem small, but they make a <em>huge</em> difference for the usability of your site. Let me help you be in the 2%.</p>

        </div>


        <div class = "h-6"></div>

<ctaForm :brightness = "brightness"/>
    </div>

   
</template>
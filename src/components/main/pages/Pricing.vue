<script setup>
    import { ref, computed, onMounted, onBeforeUpdate, watch, onUnmounted } from 'vue'

    import {
        RadioGroup,
        RadioGroupLabel,
        RadioGroupDescription,
        RadioGroupOption,
    } from '@headlessui/vue'
    
    const plans = [
        {
        name: 'Startup',
        ram: '12GB',
        cpus: '6 CPUs',
        disk: '160 GB SSD disk',
        },
        {
        name: 'Business',
        ram: '16GB',
        cpus: '8 CPUs',
        disk: '512 GB SSD disk',
        },
        {
        name: 'Enterprise',
        ram: '32GB',
        cpus: '12 CPUs',
        disk: '1024 GB SSD disk',
        },
    ]
  


    const props = defineProps({
        brightness: Number
    })
    import ctaForm from '../blocks/ctaForm/ctaForm.vue'
    import chroma from 'chroma-js'

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

    onMounted(() => {
        alternateTableRowColors(props.brightness)
    })

    watch(() => props.brightness, (newValue, oldValue) => {
        alternateTableRowColors(newValue)
    })

</script>

<template>
    <div class="w-full px-4 py-16">
      <div class="mx-auto w-full max-w-md">
        <RadioGroup v-model="selected">
          <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
          <div class="space-y-2">
            <RadioGroupOption
              as="template"
              v-for="plan in plans"
              :key="plan.name"
              :value="plan"
              v-slot="{ active, checked }"
            >
              <div
                :class="[
                  active
                    ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                    : '',
                  checked ? 'bg-sky-900/75 text-white ' : 'bg-white ',
                ]"
                class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
              >
                <div class="flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-sm">
                      <RadioGroupLabel
                        as="p"
                        :class="checked ? 'text-white' : 'text-gray-900'"
                        class="font-medium"
                      >
                        {{ plan.name }}
                      </RadioGroupLabel>
                      <RadioGroupDescription
                        as="span"
                        :class="checked ? 'text-sky-100' : 'text-gray-500'"
                        class="inline"
                      >
                        <span> {{ plan.ram }}/{{ plan.cpus }}</span>
                        <span aria-hidden="true"> &middot; </span>
                        <span>{{ plan.disk }}</span>
                      </RadioGroupDescription>
                    </div>
                  </div>
                  <div v-show="checked" class="shrink-0 text-white">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#fff"
                        fill-opacity="0.2"
                      />
                      <path
                        d="M7 13l3 3 7-7"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
      </div>
    </div>
  </template>
  
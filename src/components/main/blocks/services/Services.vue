<script setup>
    const props = defineProps({
        brightness: Number
    })
    import { ref, computed, onMounted, onBeforeUpdate, watch, onUnmounted } from 'vue'
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
    import { ShieldCheck, GaugeCircle, ShowerHead, PencilRuler } from 'lucide-vue-next'
    import PanelDesign from './PanelDesign.vue'
    import PanelDevelopment from './PanelDevelopment.vue'
    import PanelSpeed from './PanelSpeed.vue'
    import PanelSecurity from './PanelSecurity.vue'


    const tabs = ref([
        {id: 0,
        title: 'Security Overhaul',
        icon: 'ShieldCheck'
    },
    {
        id: 1,
        title: 'Speed Optimization',
        icon: 'GaugeCircle'
    },
    {
        id: 2,
        title: 'Design Overhaul',
        icon: 'ShowerHead'
    },
    {
        id: 3,
        title: 'Web Development',
        icon: 'PencilRuler'
    }
    ])

    let hoveredTab = ref(0)

    const getTabClass = (brightness, selected, hoveredTab, tabId) => {
            if (selected) {
                if (brightness == 5) {
                    return hoveredTab === tabId ? 'bg-emerald-600' : 'bg-emerald-500';
                } else if (brightness == 4) {
                    return hoveredTab === tabId ? 'bg-emerald-600' : 'bg-emerald-500';
                } else if (brightness == 3 || brightness == 1) {
                    return hoveredTab === tabId ? 'bg-orange-500' : 'bg-orange-400';
                } else if (brightness == 2) {
                    return hoveredTab === tabId ? 'bg-orange-600' : 'bg-orange-600';
                } 
            } else if (hoveredTab === tabId) {
                if (brightness == 5) {
                    return 'bg-slate-300';
                } else if (brightness == 4) {
                    return 'bg-slate-400';
                } else if (brightness == 3) {
                    return 'bg-slate-700';
                } else if (brightness == 2) {
                    return 'bg-slate-900';
                } else if (brightness == 1) {
                    return 'bg-black';
                }
            } else {
                if (brightness == 5) {
                    return 'bg-slate-200';
                } else if (brightness == 4) {
                    return 'bg-slate-300';
                } else if (brightness == 3) {
                    return 'bg-slate-600';
                } else if (brightness == 2) {
                    return 'bg-slate-800';
                } else if (brightness == 1) {
                    return 'bg-slate-900';
                }
            }
        }

        const iconClass = (brightness, selected) => {
            if (selected){
                if (brightness >= 3){
                    return 'text-slate-200'
                } else {
                    return 'text-slate-800'
                
                }
            } else {
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
        }
    

</script>

<template>
    <TabGroup>
        <TabList class = "flex justify-center gap-5 py-5">
            <Tab v-slot="{ selected }" v-for = "tab in tabs" :key = "tab.id" class = "flex gap-2 p-2 rounded focus:outline-none active:outline-none outline-none" style = "transition: all 0.2s;">
                <div class="flex flex-col justify-center gap-1 align-middle items-center rounded focus:outline-none active:outline-none outline-none p-3" style = "transition: all 0.2s;"
                     :class="getTabClass(brightness, selected, hoveredTab, tab.id)"
                     @mouseover="hoveredTab = tab.id"
                     @mouseleave="hoveredTab = null">

                    <ShieldCheck size = "3rem" v-if="tab.id==0" style = "transition: all 0.2s;" :class="iconClass(brightness, selected)"/>

                    <GaugeCircle size = "3rem" v-if="tab.id==1" style = "transition: all 0.2s;" :class="iconClass(brightness, selected)"/>

                    <ShowerHead size = "3rem" v-if="tab.id==2" style = "transition: all 0.2s;" :class="iconClass(brightness, selected)"/>

                    <PencilRuler size = "3rem" v-if="tab.id==3" style = "transition: all 0.2s;" :class="iconClass(brightness, selected)"/>

                    <p class = "font-semibold cursor-pointer" style = "transition: all 0.2s;" :class="iconClass(brightness, selected)">{{ tab.title }}</p>

                </div>
            </Tab>
        </TabList>
        <TabPanels class = "flex justify-center gap-5">
            <TabPanel class = "flex justify-center gap-5">
                <PanelSecurity :brightness="brightness"/>
            </TabPanel>
            <TabPanel class = "flex justify-center gap-5">
                <PanelSpeed :brightness="brightness"/>
            </TabPanel>
            <TabPanel class = "flex justify-center gap-5">
                <PanelDesign :brightness="brightness"/>
            </TabPanel>
            <TabPanel class = "flex justify-center gap-5">
                <PanelDevelopment :brightness="brightness"/>
            </TabPanel>
        </TabPanels>
    </TabGroup>
</template>
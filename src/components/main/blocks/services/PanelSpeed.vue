<script setup>
    import { ref, computed, onMounted, watch } from 'vue'
    import { Turtle, Rabbit } from 'lucide-vue-next'
    import chroma from 'chroma-js'

    const props = defineProps({
        brightness: Number
    })

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

    const chartClass = (brightness) => {
                if (brightness >= 4){
                    return 'text-emerald-500 bg-emerald-950'
                } else if (brightness == 3){
                    return 'text-orange-200 bg-orange-950'
                } else if (brightness == 2){
                    return 'text-orange-500 bg-orange-950'
                } else if (brightness == 1){
                    return 'text-orange-400 bg-orange-950'
                }
            }

    const ringClass = (brightness) => {
                if (brightness >= 4){
                    return 'border-emerald-500'
                } else if (brightness == 3){
                    return 'border-orange-200'
                } else if (brightness == 2){
                    return 'border-orange-500'
                } else if (brightness == 1){
                    return 'border-orange-400'
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
    

    const strokeColor = computed(() => {
        switch(props.brightness) {
            case 5: return '#10B981'
            case 4: return '#10B981'
            case 3: return '#F59E0B'
            case 2: return '#F59E0B'
            case 1: return '#F59E0B'
            default: return ''
        }
    })

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
    <div class = "flex w-full gap-4 p-8 items-center justify-center" id = "panelSpeed">
        <div class = "flex flex-col items-center justify-center w-full">
        <div id = "perfChart" :class="chartClass(brightness)">
            <svg viewBox="0 0 36 36" class="chart">
                <path class="circle-bg"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="none"
                      stroke-width="0"
                      stroke-linecap="round"/>

                <path class="circle" :class="ringClass(brightness)"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      :stroke="strokeColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      :stroke-dasharray="circumference + ' ' + circumference"
                      :stroke-dashoffset="dashoffset"/>
            </svg>
            <div id = "chartInner" class="font-monospace text-6xl" :class="iconClass(brightness)">98</div>
        </div>
        <p class = "text-sm italic opacity-50 mt-3" :class="pClass(brightness)">Desktop performance score (using Google Page Speed) for the <a href = "" :class = "iconClass(brightness)">OKC South Stake Project</a></p>

        <div class = "prose w-10/12 mt-8" :class="pClass(brightness)">
        <h2 class = "text-2xl m-0" :class="pClass(brightness)">I can make your website</h2><h2 class ="text-5xl" :class="pClass(brightness)"> faster, smaller, and lighter.</h2>
        <p>Page speed and network use are hugely important to your users. If your numbers are bad, your users are gone.</p>
        <p>I can help get those numbers up where they should be- making websites faster is a passion of mine. For example, this website you're on is using all of a whopping <b>256 KB</b>. That's a third of the classic SNES game <em>The Legend of Zelda: A Link to The Past</em>, or 3% of the bandwidth it takes just to open Instagram.</p><p>You want fast? Let's make it happen.</p>
        <h3 :class="pClass(brightness)">How I help</h3>
        <table class="">
            <thead>
                <tr>
                    <th><div class = "flex" ><h4 :class="pClass(brightness)" class="text-lg m-0">Problem <Turtle size = "3rem" :class = "iconClass(brightness)" class="inline mb-1"></Turtle></h4></div></th>
                    <th><div class = "flex" ><h4 :class="pClass(brightness)" class="text-lg m-0">What I can do <Rabbit size = "3rem" :class = "iconClass(brightness)" class="inline mb-1"></Rabbit></h4></div></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Row 1, Column 1</td>
                    <td>Row 1, Column 2</td>
                </tr>
                <tr>
                    <td>Row 2, Column 1</td>
                    <td>Row 2, Column 2</td>
                </tr>
                <tr>
                    <td>Row 3, Column 1</td>
                    <td>Row 3, Column 2</td>
                </tr>
                <tr>
                    <td>Row 4, Column 1</td>
                    <td>Row 4, Column 2</td>
                </tr>
                <tr>
                    <td>Row 5, Column 1</td>
                    <td>Row 5, Column 2</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    // Rest of your component
    data() {
        return {
            radius: 16,
            circumference: 2 * Math.PI * 16,
            percentage: 97
        }
    },
    computed: {
        dashoffset() {
            let percent = this.percentage / 100;
            return this.circumference * (1 - percent);
        }
    }
}
</script>

<style scoped>
#perfChart{
    height: 200px;
    width: 200px;
    position:relative;
    border-radius:100%;
    
}

.chart {
    height: 100%;
    width: 100%;
}

.circle-bg,
.circle {
    stroke-width: 2;
    stroke-linecap: round;
}

#chartInner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


</style>
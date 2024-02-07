<script setup>
  import { computed, onMounted, watch } from "vue"
  import { Turtle, Rabbit } from "lucide-vue-next"
  import chroma from "chroma-js"
  import ctaForm from "../ctaForm/ctaForm.vue"

  const props = defineProps({
    brightness: Number,
  })

  const iconClass = (brightness) => {
    if (brightness >= 4) {
      return "text-emerald-500"
    } else if (brightness == 3) {
      return "text-orange-200"
    } else if (brightness == 2) {
      return "text-orange-500"
    } else if (brightness == 1) {
      return "text-orange-400"
    }
  }

  const chartClass = (brightness) => {
    if (brightness >= 4) {
      return "text-emerald-500 bg-emerald-950"
    } else if (brightness == 3) {
      return "text-orange-200 bg-orange-950"
    } else if (brightness == 2) {
      return "text-orange-500 bg-orange-950"
    } else if (brightness == 1) {
      return "text-orange-400 bg-orange-950"
    }
  }

  const ringClass = (brightness) => {
    if (brightness >= 4) {
      return "border-emerald-500"
    } else if (brightness == 3) {
      return "border-orange-200"
    } else if (brightness == 2) {
      return "border-orange-500"
    } else if (brightness == 1) {
      return "border-orange-400"
    }
  }

  const pClass = (brightness) => {
    if (brightness >= 4) {
      return "text-slate-800"
    } else if (brightness == 3) {
      return "text-slate-200"
    } else if (brightness == 2) {
      return "text-slate-300"
    } else if (brightness == 1) {
      return "text-slate-300"
    }
  }

  const strokeColor = computed(() => {
    switch (props.brightness) {
      case 5:
        return "#10B981"
      case 4:
        return "#10B981"
      case 3:
        return "#F59E0B"
      case 2:
        return "#F59E0B"
      case 1:
        return "#F59E0B"
      default:
        return ""
    }
  })

  const alternateTableRowColors = (brightness) => {
    let rows = document.querySelectorAll("tr")

    let currentBackground
    if (brightness == 5) {
      currentBackground = chroma("#e2e8f0")
    } else if (brightness == 4) {
      currentBackground = chroma("#cbd5e1")
    } else if (brightness == 3) {
      currentBackground = chroma("#475569")
    } else if (brightness == 2) {
      currentBackground = chroma("#1e293b")
    } else if (brightness == 1) {
      currentBackground = chroma("#0f172a")
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

  watch(
    () => props.brightness,
    (newValue, oldValue) => {
      alternateTableRowColors(newValue)
    },
  )
</script>

<template>
  <div
    class="flex w-full gap-4 md:p-8 sm:p-4 items-center justify-center"
    id="panelSpeed">
    <div class="flex flex-col items-center justify-center w-full">
      <div
        class="flex flex-row mb-12 flex-wrap sm:flex-wrap md:flex-nowrap"
        style="gap: 5rem">
        <div id="perfChart" :class="chartClass(brightness)">
          <svg viewBox="0 0 36 36" class="chart">
            <path
              class="circle-bg"
              d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="none"
              stroke-width="0"
              stroke-linecap="round" />

            <path
              class="circle"
              :class="ringClass(brightness)"
              d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              :stroke="strokeColor"
              stroke-width="2"
              stroke-linecap="round"
              :stroke-dasharray="circumference + ' ' + circumference"
              :stroke-dashoffset="dashoffset" />
          </svg>
          <div
            id="chartInner"
            class="font-monospace text-6xl"
            :class="iconClass(brightness)">
            96
          </div>
          <p
            class="text-sm italic opacity-50 mt-3"
            :class="pClass(brightness)"
            style="min-width: 250px">
            Google Page Speed desktop performance score for the Bazaar
            <a href="/portfolio/bazaar" :class="iconClass(brightness)">site</a>
          </p>
        </div>
        <div
          id="perfChart"
          :class="chartClass(brightness)"
          class="hidden sm:hidden md:block">
          <svg viewBox="0 0 36 36" class="chart">
            <path
              class="circle-bg"
              d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="none"
              stroke-width="0"
              stroke-linecap="round" />

            <path
              class="circle"
              :class="ringClass(brightness)"
              d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              :stroke="strokeColor"
              stroke-width="2"
              stroke-linecap="round"
              :stroke-dasharray="circumference + ' ' + circumference"
              :stroke-dashoffset="dashoffset2" />
          </svg>
          <div
            id="chartInner"
            class="font-monospace text-6xl"
            :class="iconClass(brightness)">
            99
          </div>
          <p
            class="text-sm italic opacity-50 mt-3"
            :class="pClass(brightness)"
            style="min-width: 250px">
            Google Page Speed desktop performance score for this site
          </p>
        </div>
      </div>

      <div
        class="prose md:w-10/12 sm:w-12/12 mt-8"
        style="max-width: 84ch !important"
        :class="pClass(brightness)">
        <h2 class="text-2xl m-0" :class="pClass(brightness)">
          I can make your website
        </h2>
        <h2 class="text-5xl" :class="pClass(brightness)">
          faster, smaller, and lighter.
        </h2>
        <p>
          Page speed and network use are hugely important to your users. If your
          speed is bad, your users are gone.
        </p>
        <p>
          I can help get those numbers up where they should be- making websites
          faster is a passion of mine. For example, this website you're on is
          using a whopping <b>315 KB</b>. That's half of the classic SNES game
          <em>The Legend of Zelda: A Link to The Past</em>, or 4% of the
          bandwidth it takes just to open Instagram.
        </p>
        <p>You want fast? Let's make it happen.</p>
        <h3 :class="pClass(brightness)">How I help</h3>
        <table id="speedTable">
          <colgroup>
            <col style="width: 30%" />
            <col style="width: 70%" />
          </colgroup>
          <thead>
            <tr>
              <th>
                <div class="flex">
                  <h4 :class="pClass(brightness)" class="text-lg m-0">
                    Problem
                    <Turtle
                      size="3rem"
                      :class="iconClass(brightness)"
                      class="inline mb-1"></Turtle>
                  </h4>
                </div>
              </th>
              <th>
                <div class="flex">
                  <h4 :class="pClass(brightness)" class="text-lg m-0">
                    What I can do
                    <Rabbit
                      size="3rem"
                      :class="iconClass(brightness)"
                      class="inline mb-1"></Rabbit>
                  </h4>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Huge, resource-heavy images</td>
              <td>
                Optimize your images. <b>A lot. </b>Using cutting-edge
                techniques and algorithms, I average between 60-200% size
                reduction on most projects.
              </td>
            </tr>
            <tr>
              <td>Unused code, plugins, and assets</td>
              <td>
                Clean up your website significantly without impacting any
                functionality. Every website has a ton of garbage- let me take
                your garbage out!
              </td>
            </tr>
            <tr>
              <td>Inefficient, resource-heavy platforms</td>
              <td>
                I can help you migrate to a better platform, such as Vue, and
                get considerably smaller pages. 10-100x or more, usually.
              </td>
            </tr>
            <tr>
              <td>Uncached resources</td>
              <td>
                Inefficient or non-existent caching can massively increase page
                load times, especially the Time to First Paint metric, which has
                a huge impact on your SEO. I can set up caching that will have
                an immediate impact on your search engine rankings and loading
                speeds.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="h-6"></div>

      <ctaForm :brightness="brightness" />
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
        percentage: 96,
        percentage2: 97.5,
      }
    },
    computed: {
      dashoffset() {
        let percent = this.percentage / 100
        return this.circumference * (1 - percent)
      },
      dashoffset2() {
        let percent = this.percentage2 / 100
        return this.circumference * (1 - percent)
      },
    },
  }
</script>

<style scoped>
  #perfChart {
    height: 200px;
    width: 200px;
    position: relative;
    border-radius: 100%;
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

  @media screen and (max-width: 1024px) {
    #speedTable {
      display: none;
    }
  }
</style>

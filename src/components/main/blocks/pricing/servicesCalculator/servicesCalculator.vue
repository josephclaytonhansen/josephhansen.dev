<script setup>
  import { ref, computed, onMounted } from "vue"

  const submitForm = async (e) => {
    e.preventDefault()
    const form = "pricing"
    let name = document.getElementsByName("name")[0].value
    let email = document.getElementsByName("email")[0].value
    let website = document.getElementsByName("website")[0].value
    let notes = document.getElementsByName("notes")[0].value
    let services = document.getElementsByName("services")[0].value
    let total = document.getElementsByName("total")[0].value

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "https://images.josephhansen.dev/api/forms/submit", true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(
      JSON.stringify({
        form,
        name,
        email,
        website,
        notes,
        services,
        total,
      }),
    )

    xhr.onloadend = function () {
      console.log(`Status: ${xhr.status}, Response: ${xhr.responseText}`)
      if (xhr.status == 200) {
        let formObj = document.getElementsByName(form)[0]
        let success = document.createElement("div")
        success.classList.add(
          "text-center",
          "flex",
          "justify-center",
          "items-center",
          "w-100",
        )
        success.innerHTML =
          "Thanks for your interest! Your submission has been processed."
        formObj.appendChild(success)

        let leftInputs = document.getElementById("leftInputs")
        let rightInputs = document.getElementById("rightInputs")

        leftInputs.style.display = "none"
        rightInputs.style.display = "none"

        let button = document.getElementById("submitButton")
        button.disabled = true
      } else {
        alert("Something went wrong. Please try again.")
      }
    }
  }

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

  const inputClass = (brightness) => {
    if (brightness >= 4) {
      return "text-emerald-500"
    } else if (brightness == 3) {
      return "text-slate-800"
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

  const pricing = ref({
    speed: {
      audit: {
        price: 0,
        title: "Detailed speed audit (100% free)",
        enabled: true,
      },
      optimize: {
        price: 300,
        title: "Optimize your website for speed",
        enabled: true,
      },
      caching: {
        price: 300,
        title: "Setup efficient caching and always online",
        enabled: true,
      },
      images: {
        price: 150,
        title: "Optimize images for speed and efficiency",
        enabled: true,
      },
    },
    security: {
      audit: {
        price: 100,
        title: "Detailed security audit and report",
        enabled: false,
      },
      protection: {
        price: 500,
        title: "Top-of-the-line bot protection and attack shielding",
        enabled: false,
      },
      ddosprotection: {
        price: 100,
        title: "DDoS protection",
        enabled: false,
      },
    },
    accessibility: {
      audit: {
        price: 200,
        title: "Accessibility audit and report",
        enabled: false,
      },
      levelA: {
        price: 300,
        title: "Level A accessibility, across your site",
        enabled: false,
      },
      levelAA: {
        price: 300,
        title: "Level AA accessibility, across your site",
        enabled: false,
      },
    },
    designOverhaul: {
      designOverhaul: {
        price: 1000,
        title: "Design overhaul",
        enabled: false,
      },
    },
  })

  const speedDiscount = computed(() => {
    if (
      pricing.value.speed.audit.enabled &&
      pricing.value.speed.optimize.enabled &&
      pricing.value.speed.caching.enabled &&
      pricing.value.speed.images.enabled
    ) {
      return 2 / 3
    } else {
      return 3 / 3
    }
  })

  const securityDiscount = computed(() => {
    if (
      pricing.value.security.audit.enabled &&
      pricing.value.security.ddosprotection.enabled &&
      pricing.value.security.protection.enabled
    ) {
      return 5 / 7
    } else {
      return 3 / 3
    }
  })

  const accessibilityDiscount = computed(() => {
    if (
      pricing.value.accessibility.audit.enabled &&
      pricing.value.accessibility.levelA.enabled &&
      pricing.value.accessibility.levelAA.enabled
    ) {
      return 3 / 4
    } else {
      return 3 / 3
    }
  })

  const designOverhaulDiscount = computed(() => {
    return 3 / 3
  })

  const speedPrice = computed(() => {
    return (
      Object.values(pricing.value.speed).reduce(
        (total, service) => total + (service.enabled ? service.price : 0),
        0,
      ) * speedDiscount.value
    )
  })

  const securityPrice = computed(() => {
    return (
      Object.values(pricing.value.security).reduce(
        (total, service) => total + (service.enabled ? service.price : 0),
        0,
      ) * securityDiscount.value
    )
  })

  const accessibilityPrice = computed(() => {
    return (
      Object.values(pricing.value.accessibility).reduce(
        (total, service) => total + (service.enabled ? service.price : 0),
        0,
      ) * accessibilityDiscount.value
    )
  })

  const designOverhaulPrice = computed(() => {
    return (
      Object.values(pricing.value.designOverhaul).reduce(
        (total, service) => total + (service.enabled ? service.price : 0),
        0,
      ) * designOverhaulDiscount.value
    )
  })

  const fullSpeedPrice = computed(() => {
    let price = 0
    for (const [key, value] of Object.entries(pricing.value.speed)) {
      if (value.enabled) {
        price += value.price
      }
    }
    return price
  })

  const fullSecurityPrice = computed(() => {
    let price = 0
    for (const [key, value] of Object.entries(pricing.value.security)) {
      if (value.enabled) {
        price += value.price
      }
    }
    return price
  })

  const fullAccessibilityPrice = computed(() => {
    let price = 0
    for (const [key, value] of Object.entries(pricing.value.accessibility)) {
      if (value.enabled) {
        price += value.price
      }
    }
    return price
  })

  const fullDesignOverhaulPrice = computed(() => {
    let price = 0
    for (const [key, value] of Object.entries(pricing.value.designOverhaul)) {
      if (value.enabled) {
        price += value.price
      }
    }
    return price
  })

  const toggleAllSpeed = () => {
    if (
      pricing.value.speed.audit.enabled &&
      pricing.value.speed.optimize.enabled &&
      pricing.value.speed.caching.enabled &&
      pricing.value.speed.images.enabled
    ) {
      pricing.value.speed.audit.enabled = false
      pricing.value.speed.optimize.enabled = false
      pricing.value.speed.caching.enabled = false
      pricing.value.speed.images.enabled = false
    } else {
      pricing.value.speed.audit.enabled = true
      pricing.value.speed.optimize.enabled = true
      pricing.value.speed.caching.enabled = true
      pricing.value.speed.images.enabled = true
    }
  }

  const toggleAllSecurity = () => {
    if (
      pricing.value.security.audit.enabled &&
      pricing.value.security.ddosprotection.enabled &&
      pricing.value.security.protection.enabled
    ) {
      pricing.value.security.audit.enabled = false
      pricing.value.security.ddosprotection.enabled = false
      pricing.value.security.protection.enabled = false
    } else {
      pricing.value.security.audit.enabled = true
      pricing.value.security.ddosprotection.enabled = true
      pricing.value.security.protection.enabled = true
    }
  }

  const toggleAllAccessibility = () => {
    if (
      pricing.value.accessibility.audit.enabled &&
      pricing.value.accessibility.levelA.enabled &&
      pricing.value.accessibility.levelAA.enabled
    ) {
      pricing.value.accessibility.audit.enabled = false
      pricing.value.accessibility.levelA.enabled = false
      pricing.value.accessibility.levelAA.enabled = false
    } else {
      pricing.value.accessibility.audit.enabled = true
      pricing.value.accessibility.levelA.enabled = true
      pricing.value.accessibility.levelAA.enabled = true
    }
  }

  const toggleAllDesignOverhaul = () => {
    if (pricing.value.designOverhaul.designOverhaul.enabled) {
      pricing.value.designOverhaul.designOverhaul.enabled = false
    } else {
      pricing.value.designOverhaul.designOverhaul.enabled = true
    }
  }

  const toggleAll = (block) => {
    if (block.title == "Speed") {
      toggleAllSpeed()
    } else if (block.title == "Security") {
      toggleAllSecurity()
    } else if (block.title == "Accessibility") {
      toggleAllAccessibility()
    } else if (block.title == "Design Overhaul") {
      toggleAllDesignOverhaul()
    }
  }

  const blockEnabled = (block) => {
    return Object.values(block.services).some((service) => service.enabled)
  }

  const blocks = ref([
    {
      title: "Speed",
      services: pricing.value.speed,
      enabled: true,
      discount: speedDiscount.value,
    },
    {
      title: "Security",
      services: pricing.value.security,
      enabled: false,
      discount: securityDiscount.value,
    },
    {
      title: "Accessibility",
      services: pricing.value.accessibility,
      enabled: false,
      discount: accessibilityDiscount.value,
    },
    {
      title: "Design Overhaul",
      services: pricing.value.designOverhaul,
      enabled: false,
      discount: designOverhaulDiscount.value,
    },
  ])

  const getBlockPrice = (block) => {
    if (block.title === "Speed") {
      return speedPrice.value
    } else if (block.title === "Security") {
      return securityPrice.value
    } else if (block.title === "Accessibility") {
      return accessibilityPrice.value
    } else if (block.title === "Design Overhaul") {
      return designOverhaulPrice.value
    }
  }

  const getBlockFullPrice = (block) => {
    if (block.title === "Speed") {
      return fullSpeedPrice.value
    } else if (block.title === "Security") {
      return fullSecurityPrice.value
    } else if (block.title === "Accessibility") {
      return fullAccessibilityPrice.value
    } else if (block.title === "Design Overhaul") {
      return fullDesignOverhaulPrice.value
    }
  }

  const total = computed(() => {
    return (
      getBlockPrice(blocks.value[0]) +
      getBlockPrice(blocks.value[1]) +
      getBlockPrice(blocks.value[2]) +
      getBlockPrice(blocks.value[3])
    )
  })

  const selectedServicesList = computed(() => {
    let list = []
    for (const [key, value] of Object.entries(pricing.value.speed)) {
      if (value.enabled) {
        list.push(value.title)
      }
    }
    for (const [key, value] of Object.entries(pricing.value.security)) {
      if (value.enabled) {
        list.push(value.title)
      }
    }
    for (const [key, value] of Object.entries(pricing.value.accessibility)) {
      if (value.enabled) {
        list.push(value.title)
      }
    }
    for (const [key, value] of Object.entries(pricing.value.designOverhaul)) {
      if (value.enabled) {
        list.push(value.title)
      }
    }
    return list
  })
</script>

<template>
  <div class="flex-col">
    <div class="prose py-5 flex-col w-full">
      <h2
        class="text-5xl text-center text-semibold"
        :class="pClass(props.brightness)">
        Services Pricing
      </h2>
      <p class="text-center" :class="pClass(props.brightness)">
        Faster, simpler, and cheaper than an agency. No need to spend hours on
        the phone haggling. Pick what you want, I make it happen. That's it!<br /><br />
        These services are for your existing website- if you're looking for a
        new site,
        <a href="/contact" class="font-bold" :class="iconClass(brightness)"
          >contact me
        </a>
        for a custom quote.
      </p>
    </div>

    <div
      v-for="(block, index) in blocks"
      :key="index"
      class="md:wd-8/12 sm:wd-11/12 rounded bg-slate-100 p-5 border-4 flex-col mb-4"
      :class="
        {
          'bg-slate-100': brightness == 5,
          'bg-slate-400': brightness == 4,
          'bg-slate-500': brightness == 3,
          'bg-slate-700': brightness == 2,
          'bg-slate-800': brightness == 1,
        },
        ringClass(brightness)
      ">
      <div class="flex">
        <div class="w-6/12">
          <div
            class="text-4xl text-left text-bold flex items-center gap-3"
            :class="pClass(props.brightness)">
            <input
              type="checkbox"
              :name="block.title"
              :checked="blockEnabled(block)"
              @click="toggleAll(block)"
              class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
              :class="iconClass(brightness)" />
            <h3>{{ block.title }}</h3>
          </div>
        </div>

        <div class="w-6/12">
          <h3
            class="text-4xl text-bold text-right"
            :class="iconClass(props.brightness)">
            <span
              class="text-slate-50 opacity-25 line-through pr-2"
              v-if="
                getBlockFullPrice(block) != Math.floor(getBlockPrice(block))
              "
              >${{ getBlockFullPrice(block) }}</span
            >${{ getBlockPrice(block) }}
          </h3>
        </div>
      </div>

      <hr class="my-4 w-full" :class="iconClass(props.brightness)" />

      <div class="flex-col gap-4">
        <div
          v-for="(service, serviceIndex) in block.services"
          :key="serviceIndex"
          class="flex w-full items-center justify-between pb-4">
          <div class="flex items-center">
            <input
              type="checkbox"
              :name="service.title"
              :checked="service.enabled"
              @click="service.enabled = !service.enabled"
              class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mr-4"
              :class="iconClass(brightness)" />
            <p class="" :class="pClass(props.brightness)">
              <b v-if="service.title == 'Detailed speed audit (100% free)'"
                ><em>{{ service.title }}</em></b
              >
              <span v-else>{{ service.title }}</span>
            </p>
          </div>
          <div class="">
            <h3
              class="text-bold text-right"
              :class="iconClass(props.brightness)">
              <span
                class="text-slate-50 opacity-25 line-through pr-2"
                v-if="
                  service.price != Math.floor(service.price * block.discount)
                "
                >${{ service.price }}</span
              >${{ service.price * block.discount }}
            </h3>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-4 w-full" :class="iconClass(props.brightness)" />

    <div class="flex-col">
      <div class="flex justify-between">
        <h3 class="text-4xl text-bold" :class="iconClass(props.brightness)">
          Total
        </h3>
        <h3 class="text-4xl text-bold" :class="iconClass(props.brightness)">
          <span
            class="text-slate-50 opacity-25 line-through pr-2"
            v-if="total != Math.floor(total)"
            >${{ total }}</span
          >${{ total }}
        </h3>
      </div>
    </div>
    <form class="gap-4 mt-4" name="pricing">
      <input type="hidden" name="services" :value="selectedServicesList" />
      <input type="hidden" name="total" :value="total" />
      <div class="flex gap-4" id="leftInputs">
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          class="rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4"
          :class="inputClass(brightness)" />
        <input
          type="text"
          name="name"
          placeholder="Name"
          class="rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4"
          :class="inputClass(brightness)" />
      </div>
      <div class="flex gap-4" id="rightInputs">
        <input
          type="text"
          name="website"
          required
          placeholder="Website"
          class="rounded p-5 w-full bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4"
          :class="inputClass(brightness)" />
        <textarea
          name="notes"
          placeholder="Notes"
          class="rounded p-5 w-full h-24 bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 size-5 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500 mb-4"
          :class="inputClass(brightness)" />
      </div>
      <button
        id="submitButton"
        type="submit"
        class="rounded px-5 py-2 text-white font-semibold mt-4 w-full"
        @click="submitForm"
        :class="{
          'bg-emerald-600': brightness >= 4,
          'bg-orange-700': brightness == 3,
          'bg-orange-600': brightness == 2,
          'bg-orange-500': brightness == 1,
        }">
        Submit
      </button>
    </form>
    <p class="text-center mt-4" :class="pClass(props.brightness)">
      I'll get back to you within 48 hours. This form is not a contract, please
      note that work can't begin until we've connected and signed a contract.<br /><br />These
      are one-time services; for ongoing maintenance, please
      <a href="/contact" class="font-bold" :class="iconClass(brightness)"
        >shoot me a message</a
      >
      and we can get that figured out.<br /><br />I look forward to working with
      you!
    </p>
  </div>
</template>

<style scoped>
  .prose {
    max-width: 100% !important;
    padding-left: 2rem;
    padding-right: 2rem;
  }
</style>

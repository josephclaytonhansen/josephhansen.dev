<script setup>
  import { ref } from "vue"

  const props = defineProps({
    brightness: Number,
  })

  const isSubmitting = ref(false)
  const submitSuccess = ref(false)
  const errorMessage = ref("")

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

  const inputClass = (brightness) => {
    if (brightness >= 4) {
      return "text-slate-900 bg-white border-emerald-300"
    } else if (brightness == 3) {
      return "text-slate-900 bg-slate-200 border-slate-600"
    } else if (brightness == 2) {
      return "text-slate-100 bg-slate-900 border-orange-500"
    } else if (brightness == 1) {
      return "text-slate-100 bg-black border-orange-400"
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()

    if (isSubmitting.value) return

    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    const subject = "CTA Form: New Project Inquiry"

    // Basic validation
    if (!name || !email || !message) {
      errorMessage.value = "Please fill in all required fields"
      return
    }

    isSubmitting.value = true
    errorMessage.value = ""

    try {
      const response = await fetch(
        "https://api.josephhansen.dev/api/mail/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            referrer: window.location.href,
            location: "CTA form",
          }),
        },
      )

      const data = await response.json()

      if (response.ok) {
        submitSuccess.value = true
        form.reset()
      } else {
        errorMessage.value =
          data.error || "Failed to send message. Please try again."
      }
    } catch (error) {
      console.error("Form submission error:", error)
      errorMessage.value =
        "Network error. Please check your connection and try again."
    } finally {
      isSubmitting.value = false
    }
  }
</script>

<template>
  <div
    class="rounded p-8 flex"
    :class="{
      'bg-slate-100': brightness == 5,
      'bg-slate-400': brightness == 4,
      'bg-slate-500': brightness == 3,
      'bg-slate-700': brightness == 2,
      'bg-slate-800': brightness == 1,
    }">
    <div class="prose text-center w-full">
      <h4 class="text-2xl" :class="pClass(brightness)">
        Piqued your interest?<br />
        Check out the (incredibly simple) service pricing:
      </h4>
      <a href="/pricing"
        ><button
          aria-label="View service pricing for an existing website"
          class="rounded px-5 py-2 text-white font-semibold mt-4"
          :class="{
            'bg-emerald-600 hover:bg-emerald-700': brightness >= 4,
            'bg-orange-700 hover:bg-orange-800': brightness == 3,
            'bg-orange-600 hover:bg-orange-700': brightness == 2,
            'bg-orange-500 hover:bg-orange-600': brightness == 1,
          }">
          I already have a site
        </button></a
      >

      <h4 class="text-2xl mt-8" :class="pClass(brightness)">
        Looking for a new site or a custom quote? Hit me up
      </h4>

      <div
        v-if="submitSuccess"
        class="p-4 rounded mt-4"
        :class="{
          'bg-emerald-200 text-emerald-900': brightness >= 4,
          'bg-slate-700 text-slate-100': brightness == 3,
          'bg-orange-900 text-orange-100': brightness <= 2,
        }">
        <p class="font-semibold">Thanks for your interest!</p>
        <p class="mt-1">
          Your submission has been processed. I'll be in touch soon!
        </p>
      </div>

      <div v-if="errorMessage" class="p-4 rounded mt-4 bg-red-200 text-red-900">
        {{ errorMessage }}
      </div>

      <form id="cta" @submit="submitForm" v-if="!submitSuccess" class="mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          required
          class="rounded p-2 w-full border"
          :class="inputClass(brightness)" />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          required
          class="rounded p-2 w-full mt-3 border"
          :class="inputClass(brightness)" />
        <textarea
          placeholder="Message *"
          name="message"
          required
          rows="4"
          class="rounded p-2 w-full mt-3 border"
          :class="inputClass(brightness)"></textarea>
        <button
          id="submitButton"
          type="submit"
          :disabled="isSubmitting"
          aria-label="Submit contact form"
          class="rounded px-5 py-2 text-white font-semibold w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{
            'bg-emerald-600 hover:bg-emerald-700': brightness >= 4,
            'bg-slate-400 hover:bg-slate-500': brightness == 3,
            'bg-orange-600 hover:bg-orange-700': brightness == 2,
            'bg-orange-500 hover:bg-orange-600': brightness == 1,
          }">
          {{ isSubmitting ? "Sending..." : "Contact Me" }}
        </button>
      </form>
    </div>
  </div>
</template>

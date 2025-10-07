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
      return "text-slate-900 bg-slate-50 border-slate-300"
    } else if (brightness == 3) {
      return "text-slate-900 bg-slate-100 border-slate-400"
    } else if (brightness == 2) {
      return "text-slate-100 bg-slate-800 border-slate-600"
    } else if (brightness == 1) {
      return "text-slate-100 bg-slate-900 border-slate-700"
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()

    if (isSubmitting.value) return

    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    const subject = form.subject?.value?.trim() || "Contact Form Submission"

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
            location: "contact page",
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
  <div class="flex-col max-w-2xl mx-auto px-4">
    <div class="py-5 flex-col w-full">
      <h2
        class="text-5xl text-center text-semibold"
        :class="pClass(props.brightness)">
        Contact Me
      </h2>
    </div>

    <div
      v-if="submitSuccess"
      class="text-center p-6 rounded mb-4"
      :class="{
        'bg-emerald-100 text-emerald-800': brightness >= 4,
        'bg-slate-600 text-slate-100': brightness == 3,
        'bg-orange-900 text-orange-100': brightness <= 2,
      }">
      <p class="text-lg font-semibold">Thanks for your message!</p>
      <p class="mt-2">
        Your submission has been received. I'll get back to you soon.
      </p>
    </div>

    <div
      v-if="errorMessage"
      class="text-center p-4 rounded mb-4 bg-red-100 text-red-800">
      {{ errorMessage }}
    </div>

    <form id="cta" @submit="submitForm" v-if="!submitSuccess">
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
      <input
        type="text"
        name="subject"
        placeholder="Subject (optional)"
        class="rounded p-2 w-full mt-3 border"
        :class="inputClass(brightness)" />
      <textarea
        placeholder="Message *"
        name="message"
        required
        rows="6"
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
</template>

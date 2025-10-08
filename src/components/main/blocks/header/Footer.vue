<script setup>
  import { ref } from "vue"

  defineProps({
    brightness: {
      type: Number,
      required: true,
    },
  })

  const year = ref(new Date().getFullYear())
</script>

<template>
  <footer class="w-full px-4 sm:px-6 lg:px-8">
    <div
      class="w-full md:w-10/12 sm:w-12/12 mx-auto rounded p-3"
      :class="{
        'bg-slate-200': brightness == 5,
        'bg-slate-300': brightness == 4,
        'bg-slate-600': brightness == 3,
        'bg-slate-800': brightness == 2,
        'bg-slate-900': brightness == 1,
      }">
      <div
        class="flex flex-col items-center justify-center w-full p-8"
        :class="{
          'text-slate-900': brightness >= 4,
          'text-slate-200': brightness <= 3,
        }">
        <p class="text-sm text-center">
          © {{ year }} Joseph Hansen. All rights reserved. All writing is my
          own words, no generative AI used. This content, unless otherwise
          noted, is licensed as
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            aria-label="Creative Commons License- CC BY-NC-SA 4.0"
            >CC BY-NC-SA 4.0</a
          >. Contact
          <a href="mailto:joseph@josephhansen.dev">joseph@josephhansen.dev</a>
          for inquiries.
        </p>
      </div>
    </div>
  </footer>
</template>

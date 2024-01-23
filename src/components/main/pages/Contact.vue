<script setup>

  const props = defineProps({
    brightness: Number,
  })

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

  const submitForm = async (e) => {
    e.preventDefault()
    const form = "contact"
    let name = document.getElementsByName("name")[0].value
    let email = document.getElementsByName("email")[0].value
    let message = document.getElementsByName("message")[0].value
    let referrer = window.location.href

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "https://images.josephhansen.dev/api/forms/submit", true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(
      JSON.stringify({
        form,
        name,
        email,
        message,
        referrer,
      }),
    )

    xhr.onloadend = function () {
      console.log(`Status: ${xhr.status}, Response: ${xhr.responseText}`)
      if (xhr.status == 200) {
        let formObj = document.getElementById("cta")
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

        let inputs = formObj.getElementsByTagName("input")

        for (let i = 0; i < inputs.length; i++) {
          inputs[i].style.display = "none"
        }

        let textarea = formObj.getElementsByTagName("textarea")[0]
        textarea.style.display = "none"

        let button = document.getElementById("submitButton")
        button.disabled = true
      } else {
        alert("Something went wrong. Please try again.")
      }
    }
  }

</script>

<template>
    <div class="flex-col">
    <div class="prose py-5 flex-col w-full">
      <h2
        class="text-5xl text-center text-semibold"
        :class="pClass(props.brightness)">
        Contact Me
      </h2>
    </div>

    <form id="cta">
        <input
          type="text"
          name="name"
          placeholder="Name"
          class="rounded p-2 w-full"
          :class="inputClass" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="rounded p-2 w-full mt-3"
          :class="inputClass" />
        <textarea
          placeholder="Message"
          name="message"
          class="rounded p-2 w-full mt-3"
          :class="inputClass"></textarea>
        <button
          id="submitButton"
          type="submit"
          aria-label="Submit a contact form"
          @click="submitForm"
          class="rounded px-5 py-2 text-white font-semibold w-full mt-2"
          :class="{
            'bg-emerald-600': brightness >= 4,
            'bg-slate-400': brightness == 3,
            'bg-orange-600': brightness == 2,
            'bg-orange-500': brightness == 1,
          }">
          Contact Me
        </button>
      </form>

    </div>
</template>
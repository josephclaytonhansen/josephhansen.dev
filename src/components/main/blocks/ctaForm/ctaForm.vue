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

  const submitForm = async (e) => {
    e.preventDefault()
    const form = "contact"
    let name = document.getElementsByName("name")[0].value
    let email = document.getElementsByName("email")[0].value
    let message = document.getElementsByName("message")[0].value

    let xhr = new XMLHttpRequest()
    xhr.open("POST", 'https://images.josephhansen.dev/api/forms/submit', true)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(
      JSON.stringify({
        form,
        name,
        email,
        message
      }),
    )

    xhr.onloadend = function () {
      console.log(`Status: ${xhr.status}, Response: ${xhr.responseText}`);
      if (xhr.status == 200) {

        let formObj = document.getElementById("cta")
        let success = document.createElement("div")
        success.classList.add("text-center", "flex", "justify-center", "items-center", "w-100")
        success.innerHTML = "Thanks for your interest! Your submission has been processed."
        formObj.appendChild(success)

        let inputs = formObj.getElementsByTagName("input")

        for (let i = 0; i < inputs.length; i++) {
          inputs[i].disabled = true
        }

        let button = document.getElementById("submitButton")
        button.disabled = true


      } else {
        alert("Something went wrong. Please try again.")
      }
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
    <div class="prose text-center">
      <h4 class="text-2xl" :class="pClass(brightness)">
        Piqued your interest?<br />
        Check out the (incredibly simple) service pricing:
      </h4>
      <a href="/pricing"
        ><button
          class="rounded px-5 py-2 text-white font-semibold mt-4"
          :class="{
            'bg-emerald-600': brightness >= 4,
            'bg-orange-700': brightness == 3,
            'bg-orange-600': brightness == 2,
            'bg-orange-500': brightness == 1,
          }">
          I already have a site
        </button></a
      >
      <h4 class="text-2xl mt-8" :class="pClass(brightness)">
        Looking for a new site or a custom quote? Hit me up
      </h4>
      <form id = "cta">
        <input
          type="text"
          placeholder="Name"
          class="rounded p-2 w-full"
          :class="inputClass" />
        <input
          type="email"
          placeholder="Email"
          class="rounded p-2 w-full mt-3"
          :class="inputClass" />
        <textarea
          placeholder="Message"
          class="rounded p-2 w-full mt-3"
          :class="inputClass"></textarea>
        <button
        id = "submitButton"
          type="submit"
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
  </div>
</template>

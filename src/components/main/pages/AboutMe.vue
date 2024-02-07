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

  const iconClass = (brightness) => {
    if (brightness >= 4) {
      return "text-emerald-500"
    } else if (brightness == 3) {
      return "text-orange-600"
    } else if (brightness == 2) {
      return "text-orange-500"
    } else if (brightness == 1) {
      return "text-orange-400"
    }
  }

  import Contact from "./Contact.vue"

  import { siLinkedin, siGithub, siInstagram, siBlender } from "simple-icons"

  const icons = [siLinkedin, siGithub, siBlender, siInstagram]

  const iconLinks = [
    "https://www.linkedin.com/in/josephclaytonhansen/",
    "https://www.github.com/josephclaytonhansen",
    "https://blenderartists.org/u/joseph/summary",
    "https://www.instagram.com/jhansen_art/",
  ]
</script>

<template>
  <div class="flex-col w-full">
    <div class="p-5 flex-col w-full">
      <div class="grid grid-cols-6">
        <div class="col-span-2 sm:col-span-2 md:col-span-1">
          <div class="square-image-container rounded">
            <img
              class="rounded pr-4"
              src="https://images.josephhansen.dev/uploads/fileDSC01942-3.j-1707265732742.webp"
              alt="Joseph Hansen" />
          </div>
          <div class="flex gap-2 mt-4 justify-center items-center">
            <div class="flex gap-2 mt-4 justify-center items-center">
              <div
                v-for="(icon, index) in icons"
                :key="index"
                class="flex-1"
                :class="iconClass(props.brightness)">
                <a :href="iconLinks[index]">
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="100%"
                    height="100%">
                    <path :d="icon.path" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-span-4 sm:col-span-4 md:col-span-5 prose pl-5"
          style="max-width: 100vw !important">
          <h1 class="text-5xl font-bold mb-0" :class="pClass(props.brightness)">
            Joseph Hansen
          </h1>

          <h3 class="text-lg" :class="pClass(props.brightness)">
            Professionally...
          </h3>
          <p :class="pClass(props.brightness)">
            I'm a full-stack web developer with a Strategic Communications
            degree (and a Visual Communications minor), training in design,
            extensive marketing experience, and a decade of web design and
            development experience. My specialities are WordPress and Vue, and
            I'm also proficient in Django, Ruby on Rails, React, and a massive
            slate of CMS platforms (including Drupal, Joomla, Caffeine, Shopify,
            and others.)
          </p>
          <p :class="pClass(props.brightness)">
            I've worked with every WordPress theme or builder under the sun-
            Divi, Flatsome, Avada, WP Bakery, Gutenburg, Elementor, and more.
            I'm experienced in JavaScript, HTML, CSS, PHP, Python, C++, Ruby,
            and other languages, and I'm passionate about problem-solving
            through code.
          </p>
          <p :class="pClass(props.brightness)">
            I've been working for marketing agencies for 5 years, and I have
            extensive freelance experience as well. I've worked with clients in
            a variety of industries, including healthcare, finance, real estate,
            and more. I've also worked with a variety of non-profits and
            educational institutions.
          </p>
          <p :class="pClass(props.brightness)">
            I love problem-solving and I'm passionate about having a good
            impact. I learn quickly, adapt rapidly, and fit into a team
            instantaneously.
          </p>
          <h3 class="text-lg" :class="pClass(props.brightness)">
            Personally...
          </h3>
          <p :class="pClass(props.brightness)">
            If that section above bored you, me too. Luckily, there's a lot more
            to me than what I do for work. I'd call myself an artist, and that
            covers a lot of things I'm passionate about and love to do. I'm:
          </p>
          <ul :class="pClass(props.brightness)">
            <li>a 3D artist and animator</li>
            <li>a digital and traditional painter</li>
            <li>
              an avid cook who loves discovering new recipes and cuisines (my
              favorite seasoning: tamarind paste)
            </li>
            <li>
              a classically trained pianist and organist (with an infinite love
              for Rachmaninov, Kabalevsky, and Prokokiev)
            </li>
            <li>
              a huge nerd and massive DC fan (favorite fictional characters:
              Nightwing and Batgirl)
            </li>
            <li>a woodworker and electronic tinkerer</li>
            <li>and so much more!</li>
          </ul>
          <p :class="pClass(props.brightness)">
            I'm also passionate about social justice, advocacy, and equality. I
            volunteer extensively (including as a crisis counselor for the
            Trevor Project), spent many years as the assistant director of a
            regional non-profit organization, and I'm always looking for ways to
            make the world a better place.
          </p>

          <h3 class="text-lg" :class="pClass(props.brightness)">
            That's me! So... what can I do for you?
          </h3>
          <Contact :brightness="brightness" style="margin-top: -7rem" />
          <img
            src="https://boardgamegeek.com/jswidget.php?username=josephhansen&numitems=10&header=1&text=none&images=medium&show=recentplays&imagesonly=1&imagepos=left&inline=1&showplaydate=1&domains%5B%5D=boardgame&imagewidget=1"
            border="0" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .square-image-container {
    position: relative;
    width: 100%;
    padding-top: 100%;
  }

  .square-image-container img,
  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-container {
    position: relative;
    width: 100%;
    padding-top: 58%;
  }
</style>

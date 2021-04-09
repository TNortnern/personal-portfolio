<template>
  <div class="w-2/5 pt-3">
    <h1 class="text-5xl mb-8">Dyslexia App</h1>
    <p style="height: 120px">
      Dyslexia App, It's an app to complement a goose game, to help people who
      don't suffer from dyslexia understand how life can be hard for people who
      suffer. This app It's built in standard Front-End skills, also was my
      first project in which I created a Progressive web app.
    </p>
    <h4 class="text-primary-blue text-2xl mt-8 mb-4">Technologies:</h4>
    <div v-if="skills" class="flex flex-wrap">
      <div
        v-for="skill in skills.slice(0, 4)"
        :key="skill.id"
        class="mr-2 bg-black p-1.5 rounded-sm"
      >
        <p>{{ skill.name }}</p>
      </div>
    </div>
    <h4 class="text-primary-blue text-2xl mt-8 mb-4">Role:</h4>
    <div v-if="skills" class="flex flex-wrap">
      <div
        v-for="skill in skills.slice(0, 4)"
        :key="skill.id"
        class="mr-2 bg-black p-1.5 rounded-sm"
      >
        <p>{{ skill.name }}</p>
      </div>
    </div>
    <div class="flex absolute xl:bottom-11 2xl:bottom-3">
      <nuxt-link
        to="#"
        class="relative flex justify-center items-center px-6 py-3.5 group mr-5"
      >
        <p class="relative z-10">Go to Site</p>
        <div
          class="absolute bg-primary-blue inset-x-0 bottom-0 h-1/12 group-hover:h-full duration-150"
        ></div>
      </nuxt-link>
      <nuxt-link
        to="#"
        class="relative flex justify-center items-center px-6 py-3.5 group"
      >
        <p class="relative z-10">View on Github</p>
        <div
          class="absolute bg-primary-blue inset-x-0 bottom-0 h-1/12 group-hover:h-full duration-150"
        ></div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

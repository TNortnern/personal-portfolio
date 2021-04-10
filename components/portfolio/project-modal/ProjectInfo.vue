<template>
  <div class="w-full xl:w-2/5 pt-3">
    <h1 class="xl:text-5xl mb-8 text-2xl text-center">Dyslexia App</h1>
    <project-slider class="xl:hidden block" :project="project" />
    <p class="xl:h-modal-paragraph mt-5 xl:mt-0">
      Dyslexia App, It's an app to complement a goose game, to help people who
      don't suffer from dyslexia understand how life can be hard for people who
      suffer. This app It's built in standard Front-End skills, also was my
      first project in which I created a Progressive web app.
    </p>
    <h4 class="text-primary-blue text-2xl mt-8 mb-4">Technologies:</h4>
    <div v-if="skills" class="project-modal-listing-list">
      <div
        v-for="skill in skills.slice(0, 4)"
        :key="skill.id"
        class="project-modal-listing"
      >
        <p>{{ skill.name }}</p>
      </div>
    </div>
    <h4 class="text-primary-blue text-2xl mt-8 mb-4">Role:</h4>
    <div v-if="skills" class="project-modal-listing-list">
      <div
        v-for="skill in skills.slice(0, 4)"
        :key="skill.id"
        class="project-modal-listing"
      >
        <p>{{ skill.name }}</p>
      </div>
    </div>
    <div class="flex justify-center xl:block">
      <div
        class="flex justify-center xl:justify-start md:absolute md:bottom-4 xl:bottom-11 2xl:bottom-3 mt-5 md:mt-0"
      >
        <nuxt-link to="#" class="project-modal-link__text mr-5">
          <p class="relative z-10">Go to Site</p>
          <div class="project-modal-link__bg group-hover:h-full"></div>
        </nuxt-link>
        <nuxt-link to="#" class="project-modal-link__text">
          <p class="relative z-10">View on Github</p>
          <div class="project-modal-link__bg group-hover:h-full"></div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null,
    },
    skills: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.project-modal-link__text {
  @apply relative flex justify-center items-center px-3 py-2 md:px-6 xl:py-3.5 group text-xs sm:text-base;
}
.project-modal-listing {
  @apply mr-2 bg-black p-1.5 rounded-sm text-center mb-2 text-sm sm:text-base min-w-mobile-project-modal-listing;
}
.project-modal-link__bg {
  @apply absolute bg-primary-blue inset-x-0 bottom-0 h-1/12  duration-150;
}
.project-modal-listing-list {
  @apply flex flex-wrap justify-center xl:justify-start;
}
</style>

<template>
  <div class="w-full xl:w-2/5 pt-3">
    <h1 class="xl:text-5xl mb-8 text-2xl text-center">{{ project.title }}</h1>
    <project-slider class="xl:hidden block" :project="project" />
    <div class="xl:h-modal-paragraph mt-5 xl:mt-0">
      {{ project.description }}
      <!-- <p
        v-if="project.isHeroku && project.hosted_url"
        class="text-yellow-200 mt-2"
      >
        Note: Project is hosted on heroku so it may be sleep for 15 seconds
      </p> -->
    </div>
    <h4 class="text-primary-blue text-2xl mt-8 mb-4">Technologies:</h4>
    <div v-if="project.technologies" class="project-modal-listing-list">
      <div
        v-for="skill in project.technologies.slice(0, 4)"
        :key="skill.id"
        class="project-modal-listing"
      >
        <p>{{ skill.name }}</p>
      </div>
    </div>
    <h4 class="text-primary-blue text-2xl mt-8 mb-4">Role:</h4>
    <div v-if="project.roles" class="project-modal-listing-list">
      <div
        v-for="role in project.roles.slice(0, 6)"
        :key="role.id"
        class="project-modal-listing"
      >
        <p>{{ role.name }}</p>
      </div>
    </div>
    <div class="flex justify-center xl:block">
      <div
        class="flex justify-center xl:justify-start md:absolute md:bottom-4 xl:bottom-11 2xl:bottom-3 mt-5 md:mt-0 flex-wrap"
      >
        <a
          v-if="project.hosted_url"
          :href="project.hosted_url"
          target="__blank"
          class="project-modal-link__text mr-5"
        >
          <div class="relative z-10">Go to Site</div>

          <div class="project-modal-link__bg group-hover:h-full"></div>
        </a>
        <button
          v-else
          class="project-modal-link__text mr-5"
          @click="toggle(), toggleContactMenu()"
        >
          <p class="relative z-10">Request a Demo</p>
          <div class="project-modal-link__bg group-hover:h-full"></div>
        </button>
        <a
          v-if="project.code_url"
          :href="project.code_url"
          class="project-modal-link__text"
        >
          <p class="relative z-10">View on Github</p>
          <div class="project-modal-link__bg group-hover:h-full"></div>
        </a>
        <!-- <button v-else class="project-modal-link__text">
          <p class="relative z-10">Private Repository</p>
          <div class="project-modal-link__bg group-hover:h-full"></div>
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  contactMenuOpen,
  toggleContactMenu,
} from '~/components/portfolio/ContactMenu'

export default {
  setup() {
    return {
      toggleContactMenu,
      contactMenuOpen,
    }
  },
  props: {
    project: {
      type: Object,
      default: null,
    },
    skills: {
      type: Array,
      default: () => [],
    },
    toggle: {
      type: Function,
      default: () => {},
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

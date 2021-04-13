<template>
  <div class="bg-gray-100">
    <SectionContainer id="projects">
      <!-- <button class="btn" @click="logProjects">Log projects</button> -->
      <SectionTitle>
        My <span class="text-primary-blue">Projects</span>
      </SectionTitle>
      <div
        class="grid grid-cols-1 md:grid-cols-2 md:gap-x-2 gap-y-3 justify-items-center"
      >
        <div
          v-for="item in projects"
          :key="item.id"
          class="relative bg-white shadow-xl cursor-default group"
        >
          <div v-if="item" class="relative w-full h-full">
            <img
              class="w-full h-full"
              :src="getMediaItem(item.media[0])"
              :alt="`${item.title} project`"
            />
            <div
              class="absolute inset-0 flex items-center justify-center w-full h-full duration-300 ease-in-out bg-white opacity-0 group-hover:opacity-100"
            >
              <div class="flex flex-col items-center font-bold">
                <h1 class="mb-3 text-xl lg:text-3xl text-theme-blue">
                  {{ item.title }}
                </h1>
                <ul
                  v-if="item.technologies"
                  class="flex flex-wrap mb-3 text-lg text-primary-blue justify-center"
                >
                  <li
                    v-for="(technology, x) in item.technologies"
                    :key="technology.id"
                  >
                    {{ technology.name
                    }}<template v-if="x !== item.technologies.length - 1"
                      >/</template
                    >
                  </li>
                  <!-- <li v-if="item.technologies.length > 4">
                      {{ item.technologies.length - 4 }} more
                    </li> -->
                </ul>
                <button
                  class="text-lg text-white bg-theme-blue btn hover:opacity-75"
                  @click="$store.commit('portfolio/setCurrent', item)"
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  </div>
</template>

<script>
import { computed, useContext } from '@nuxtjs/composition-api'
import { getMediaItem } from '~/helpers'
export default {
  setup() {
    const { store } = useContext()
    const projects = computed(() => store.state.portfolio.projects)

    return {
      projects,
      getMediaItem,
      logProjects: () => {
        console.log(`projects`, projects.value)
      },
    }
  },
}
</script>

<style>
.info-card {
  /* left: -18rem; */
  @apply absolute bg-light-primary-blue rounded-md shadow-xl pb-4;
  /* top: 5rem; */
  width: 37.25rem !important;
}
</style>

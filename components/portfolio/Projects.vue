<template>
  <SectionContainer id="projects">
    <SectionTitle name="Projects" />
    <div class="grid grid-cols-2 gap-8 justify-items-center">
      <div
        v-for="(item, i) in projects"
        :key="i"
        class="relative cursor-pointer group"
      >
        <div class="relative w-full h-full">
          <img class="w-full h-full" :src="item.images[0]" alt="test" />
          <div
            class="absolute inset-0 flex items-center justify-center w-full h-full duration-300 ease-in-out bg-white opacity-0 group-hover:opacity-100"
          >
            <div class="flex flex-col items-center font-bold">
              <h1 class="mb-3 text-3xl text-theme-blue">{{ item.name }}</h1>
              <ul class="flex mb-3 text-lg text-primary-blue">
                <li>Strapi/</li>
                <li>Vue/</li>
                <li>Tailwind</li>
              </ul>
              <button
                class="text-lg bg-theme-blue btn hover:opacity-75"
                @click="$store.commit('portfolio/setModal', true)"
              >
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex justify-center text-custom-gray-100">
      <div class="relative w-project-image">
        <div
          class="relative z-20 px-3 py-2 w-project-info-card info-card right-64 top-20"
        >
          <div class="flex justify-end pb-1.5">
            <div class="flex flex-col items-end">
              <h3 class="-mb-1 text-xl font-bold">Get Agency Reviews</h3>
              <span class="text-sm">Vue / Laravel / Nuxt / MySQL / SCSS</span>
            </div>
          </div>
          <p>
            I'm a recent CS Grad that is passionate about Web Development. I
            enjoy frontend development most, from building UI's to email
            development.
          </p>
        </div>
        <img
          class="relative w-full left-64"
          src="/testproject.png"
          alt="test"
        />
      </div>
    </div> -->
  </SectionContainer>
</template>

<script>
export default {
  data: () => ({
    projects: [],
  }),
  async mounted() {
    const projects = await this.$axios.post(
      'http://api-portfolio3.herokuapp.com/graphql',
      {
        query: `{
  projects{
    id
    name
    images
  }
}`,
      }
    )
    this.projects = projects.data.data.projects
    console.log('projects', this.projects)
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

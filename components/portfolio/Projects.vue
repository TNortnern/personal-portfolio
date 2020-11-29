<template>
  <div class="bg-gray-100">
    <SectionContainer id="projects">
      <SectionTitle name="Projects" />
      <div class="grid grid-cols-2 gap-x-20 gap-y-8 justify-items-center">
        <div
          v-for="(item, i) in projects"
          :key="i"
          class="relative bg-white shadow-xl cursor-pointer group"
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

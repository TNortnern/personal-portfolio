<template>
  <SectionContainer>
    <SectionTitle name="Skills" />
    <div
      v-if="skills"
      class="flex flex-wrap justify-center mx-auto lg:justify-start"
    >
      <div
        v-for="skill in skills"
        :key="skill.id"
        class="flex flex-col items-center w-1/3 mb-5 mr-0 md:space-x-5 md:flex-row md:w-1/6 lg:mr-4"
      >
        <img
          class="w-16"
          :src="skill.image.formats.thumbnail.url"
          :alt="skill.image.name"
        />
        <p>{{ skill.name }}</p>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'
export default {
  setup(_, { root }) {
    const { $store } = root
    const skills = computed(() => $store.state.technologies.all)
    return {
      skills,
    }
  },
}
</script>

<style></style>

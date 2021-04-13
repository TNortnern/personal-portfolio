<template>
  <div>
    <SectionContainer id="skills">
      <SectionTitle>
        My <span class="text-primary-blue">Skills</span>
      </SectionTitle>
      <div v-if="skills" class="flex flex-wrap justify-center">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="flex flex-col justify-between sm:justify-start h-24 sm:h-auto items-center w-1/3 mb-5 sm:mr-4 xl:flex-row md:w-1/6"
        >
          <img
            v-if="skill.image"
            class="w-16 sm:mr-4"
            :src="
              (skill.image &&
                skill.image.formats &&
                skill.image.formats.thumbnail &&
                skill.image.formats.thumbnail.url) ||
              skill.image.url
            "
            :alt="(skill && skill.image && skill.image.name) || ''"
          />
          <p class="whitespace-pre">{{ skill.name }}</p>
        </div>
      </div>
    </SectionContainer>
  </div>
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

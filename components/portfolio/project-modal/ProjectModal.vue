<template>
  <div>
    <Modal :open="project" :toggle="toggle">
      <div v-if="project" class="text-white">
        <div class="flex xl:justify-between flex-wrap px-8 py-6">
          <project-info :project="project" :skills="skills" />
          <project-slider class="hidden xl:block" :project="project" />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { computed, getCurrentInstance } from '@nuxtjs/composition-api'
export default {
  setup() {
    const { $store } = getCurrentInstance()
    const project = computed(() => $store.state.portfolio.current)
    const toggle = () => {
      if (project.value) {
        $store.commit('portfolio/setCurrent', null)
      }
    }
    const skills = computed(() => $store.state.technologies.all)

    return {
      skills,
      project,
      toggle,
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.next',
          prevEl: '.previous',
        },
      },
    }
  },
}
</script>

<style></style>

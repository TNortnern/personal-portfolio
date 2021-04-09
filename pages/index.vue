<template>
  <div>
    <Modal :open="project" :toggle="toggle">
      <div v-if="project" class="text-white">
        <div class="flex justify-between px-8 py-6">
          <project-info :project="project" :skills="skills" />
          <project-slider :project="project" />
        </div>
      </div>
    </Modal>
    <AppLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </AppLayout>
  </div>
</template>

<script>
import { computed, getCurrentInstance } from '@nuxtjs/composition-api'

export default {
  async asyncData({ params, error, $axios, store }) {
    try {
      const techs = await $axios.get('/technologies')
      const introText = await $axios.get('/hero-intro')
      const timelines = await $axios.get('/timelines')
      store.commit('technologies/setTechs', techs.data)
      store.commit('portfolio/set', {
        item: 'introText',
        content: introText.data.content,
      })
      store.commit('portfolio/set', {
        item: 'timelines',
        content: timelines.data,
      })
    } catch (err) {
      // console.log('err', err.response.data)
    }
  },

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

<style>
.swiper img {
  @apply xl:h-xl-modal-image xxl:h-2xl-modal-image;
}
</style>

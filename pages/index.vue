<template>
  <div>
    <Modal :open="project" @toggle="toggle">
      <div v-if="project" class="text-white">
        <div class="flex justify-between px-8 py-6">
          <div class="w-2/5 pt-3">
            <h1 class="text-5xl mb-8">Dyslexia App</h1>
            <p style="height: 120px">
              Dyslexia App, It's an app to complement a goose game, to help
              people who don't suffer from dyslexia understand how life can be
              hard for people who suffer. This app It's built in standard
              Front-End skills, also was my first project in which I created a
              Progressive web app.
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
          <!-- <h1 class="text-3xl">{{ project }}</h1> -->
          <div style="width: 56%" class="w-1/2 relative mt-2">
            <div>
              <swiper
                ref="swiper"
                class="swiper relative z-50"
                :options="swiperOption"
              >
                <swiper-slide
                  v-for="(item, i) in project.images"
                  :key="item + i"
                >
                  <img class="w-full" :src="item" alt="" />
                </swiper-slide>
              </swiper>
            </div>
            <div class="mt-20 xl:mt-10 flex justify-end">
              <button
                class="text-primary-blue w-20 h-20 cursor-pointer duration-150 hover:opacity-75 previous"
              >
                <chevron class="w-20 h-20" />
              </button>
              <button
                class="text-primary-blue cursor-pointer duration-150 hover:opacity-75 transform rotate-180 next"
              >
                <chevron class="w-20 h-20" />
              </button>
            </div>
          </div>
        </div>
        <!-- <div class="w-full">
          <agile ref="slider" :slides-to-show="1">
            <div
              v-for="(item, i) in project.images"
              :key="item + i"
              class="slide"
            >
              <img class="w-full" style="width: 500px" :src="item" alt="" />
            </div>
          </agile>
        </div> -->
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
import Chevron from '~/components/misc/Chevron.vue'

export default {
  components: { Chevron },
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
    // try {
    //   const { data } = await $axios.get(
    //     'https://privatedebtdeals.herokuapp.com/deal-remakes'
    //   )
    //   return { data }
    // } catch (err) {
    //   error({
    //     statusCode: 500,
    //     message: `Something went wrong... error: ${err}`,
    //   })
    // }
  },
  mounted() {
    // console.log(`this.$refs.swiper`, this.$refs.swiper.$swiper)
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

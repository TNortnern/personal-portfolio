<template>
  <div class="relative mt-2 w-full xl:w-slider-dekstop-width">
    <div>
      <swiper
        ref="swiper"
        auto-update
        class="swiper relative z-50"
        :options="swiperOption"
      >
        <swiper-slide
          v-for="media in project.media"
          :key="media.id"
          v-lazy-load
        >
          <img
            class="w-full"
            :src="getMediaItem(media)"
            :alt="`${project.title} project`"
          />
        </swiper-slide>
      </swiper>
    </div>
    <project-slider-controls
      :next="next"
      :prev="prev"
      class="hidden xl:flex controls"
    />
  </div>
</template>

<script>
import { ref, onMounted } from '@nuxtjs/composition-api'
import { getMediaItem } from '~/helpers'

export default {
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
  setup() {
    const swiper = ref(null)
    const $swiper = ref(null)
    onMounted(() => {
      $swiper.value = swiper.value.$swiper
    })
    const next = () => {
      $swiper.value.slideNext()
    }
    const prev = () => {
      $swiper.value.slidePrev()
    }
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
      swiper,
      next,
      getMediaItem,
      prev,
    }
  },
}
</script>

<style>
.swiper img {
  @apply xl:h-xl-modal-image xxl:h-2xl-modal-image h-36 md:h-48 lg:h-64;
}
</style>

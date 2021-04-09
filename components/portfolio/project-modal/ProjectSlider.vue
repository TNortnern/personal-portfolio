<template>
  <div class="relative mt-2 w-full xl:w-slider-dekstop-width">
    <div>
      <swiper
        ref="swiper"
        auto-update
        class="swiper relative z-50"
        :options="swiperOption"
      >
        <swiper-slide v-for="(item, i) in project.images" :key="item + i">
          <img class="w-full" :src="item" alt="" />
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
      prev,
    }
  },
}
</script>

<style>
.swiper img {
  @apply xl:h-xl-modal-image xxl:h-2xl-modal-image h-36;
}
</style>

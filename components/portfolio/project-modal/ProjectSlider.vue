<template>
  <div style="width: 56%" class="w-1/2 relative mt-2">
    <div>
      <swiper ref="swiper" class="swiper relative z-50" :options="swiperOption">
        <swiper-slide v-for="(item, i) in project.images" :key="item + i">
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
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
  setup() {
    return {
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

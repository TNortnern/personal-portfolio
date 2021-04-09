<template>
  <div class="mt-20 xl:mt-10 flex justify-end">
    <project-slider-control class="previous" @click="prev" />
    <project-slider-control class="transform rotate-180 next" @click="next" />
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Function,
      default: () => {},
    },
    next: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style></style>

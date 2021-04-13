<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 w-screen h-screen bg-black bg-opacity-75"
    ></div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>

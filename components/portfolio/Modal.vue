<template>
  <div>
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-20 w-screen h-screen bg-black bg-opacity-75"
      ></div>
    </transition>
    <transition name="scale">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-30 flex items-center justify-center h-screen"
      >
        <div
          class="w-4/5 md:w-3/4 xl:w-10/12 overflow-y-auto shadow-2xl bg-light-primary-blue h-3/4 xxl:h-2/3 relative rounded-lg"
        >
          <!-- <div
            class="text-xl bg-green-300 py-4 px-4"
            @click="$emit('toggle', open)"
          >
            cick to close
          </div> -->
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, watch } from '@nuxtjs/composition-api'
export default {
  props: {
    open: {
      type: [Boolean, Object, Array, String],
      default: false,
    },
  },
  setup(_, app) {
    const store = app.root.$store
    const isOpen = computed(() => store.state.portfolio.current)
    watch(isOpen, (val) => {
      if (val) {
        // document.querySelector('body').style.overflowY = 'hidden'
        // document.body.style.overflowY = 'scroll'
        // document.body.style.position = 'fixed'
      } else {
        // document.querySelector('body').style.overflowY = 'auto'
        // document.body.style.overflow = 'auto'
        // document.body.style.position = 'relative'
      }
    })
    return { isOpen }
  },
}
</script>

<style></style>

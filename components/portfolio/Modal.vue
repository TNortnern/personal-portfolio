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
          class="w-3/5 overflow-y-auto shadow-2xl bg-light-primary-blue h-2/3"
          @click="$store.commit('portfolio/setModal', null)"
        >
          app
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, watch } from '@nuxtjs/composition-api'
export default {
  setup(_, app) {
    const store = app.root.$store
    const isOpen = computed(() => store.state.portfolio.modal)
    watch(isOpen, (val) => {
      if (val) {
        document.querySelector('body').style.overflowY = 'hidden'
      } else {
        document.querySelector('body').style.overflowY = 'auto'
      }
    })
    return { isOpen }
  },
}
</script>

<style></style>

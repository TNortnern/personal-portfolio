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
          v-click-outside="toggle"
          class="w-4/5 md:w-3/4 lg:w-2/3 xl:w-10/12 overflow-y-auto lg:overflow-y-visible shadow-2xl bg-light-primary-blue lg:h-3/4 h-3/4 xl:h-10/12 xxl:h-2/3 relative rounded-lg"
        >
          <button
            class="absolute right-6 -translate-y-14 transform z-50 text-5xl text-red-500 hover:text-red-400 duration-150 hover:bg-gray-100 hover:bg-opacity-25 rounded-full p-0.5"
            @click="toggle"
          >
            <svg
              class="w-11 h-11"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
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
import { computed, getCurrentInstance, watch } from '@nuxtjs/composition-api'

export default {
  props: {
    open: {
      type: [Boolean, Object, Array, String],
      default: false,
    },
    toggle: {
      type: Function,
      default: () => {},
    },
  },
  setup(_, app) {
    const instance = getCurrentInstance()
    const store = instance.$store
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

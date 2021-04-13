<template>
  <div>
    <Overlay class="lg:hidden" :is-open="mobileMenuOpen" />
    <transition name="mobile-drawer">
      <scrollactive
        v-if="mobileMenuOpen"
        always-track
        active-class="text-primary-blue"
        :offset="85"
        class="lg:hidden border-box shadow-2xl fixed top-0 right-0 flex flex-col p-8 border-black space-y-8 bg-light-primary-blue w-1/2 sm:w-1/3 min-w-96 h-full transform transition duration-300 z-50"
      >
        <button
          class="ml-auto rounded-xl cursor-pointer hover:text-red-500 focus:text-red-500"
          @click.prevent="toggleMenu"
        >
          <svg
            class="w-7 h-7 text-white"
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
        <div
          v-for="navLink in $store.state.navigation.routes"
          :key="navLink.name"
          class="flex flex-col items-center"
        >
          <a class="scrollactive-item text-white" :href="navLink.to">
            {{ navLink.name }}
          </a>
        </div>
      </scrollactive>
    </transition>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
export const mobileMenuOpen = ref(false)
export const toggleMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)
export default {
  setup() {
    return {
      mobileMenuOpen,
      toggleMenu,
    }
  },
}
</script>

<style>
.mobile-drawer-enter-active,
.mobile-drawer-leave-active {
  transition: all 0.35s;
  /* position: absolute; */
}

.mobile-drawer-enter,
.mobile-drawer-leave-to {
  transform: translateX(1000px) scale(0.5);
}

.mobile-drawer-leave,
.mobile-drawer-enter-to {
  transform: translateX(0) scale(1);
}
</style>

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
        <button
          class="px-1.5 py-1 border rounded-md border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white duration-100 ease-out focus:outline-none"
          @click="toggleMenu(), toggleContactMenu()"
        >
          contact me
        </button>
      </scrollactive>
    </transition>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import {
  contactMenuOpen,
  toggleContactMenu,
} from '~/components/portfolio/ContactMenu'
export const mobileMenuOpen = ref(false)
export const toggleMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value)
export default {
  setup() {
    return {
      mobileMenuOpen,
      toggleMenu,
      contactMenuOpen,
      toggleContactMenu,
    }
  },
}
</script>

<style></style>

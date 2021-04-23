<template>
  <div class="items-center justify-between hidden lg:flex">
    <nuxt-link to="/" class="flex text-2xl">
      <span class="font-bold">Trayvon</span>
      <span class="font-light">Northern</span>
    </nuxt-link>
    <ul class="flex items-center space-x-20">
      <li v-for="route in $store.state.navigation.routes" :key="route.name">
        <a
          :href="route.to"
          :target="route.external ? '__blank' : ''"
          class="hover:text-primary-blue scrollactive-item"
          >{{ route.name }}</a
        >
      </li>
      <li>
        <button
          class="px-1.5 py-1 border rounded-md border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white duration-100 ease-out focus:outline-none"
          @click="toggleContactMenu"
        >
          contact me
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  contactMenuOpen,
  toggleContactMenu,
} from '~/components/portfolio/ContactMenu'
export default {
  setup: () => ({
    contactMenuOpen,
    toggleContactMenu,
  }),
}
</script>

<style></style>

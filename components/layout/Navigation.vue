<template>
  <nav>
    <div class="flex items-center justify-between">
      <h2 class="flex text-2xl">
        <span class="font-bold text-primary-white">Trayvon</span>
        <span class="font-light text-primary-white">Northern</span>
      </h2>
      <ul class="flex items-center space-x-20">
        <li v-for="route in $store.state.navigation.routes" :key="route.name">
          <nuxt-link
            v-if="!route.external"
            :to="route.to"
            class="text-primary-white hover:text-primary-blue"
            >{{ route.name }}</nuxt-link
          >
          <a
            v-else
            :href="route.to"
            target="__blank"
            class="text-primary-white hover:text-primary-blue"
            >{{ route.name }}</a
          >
        </li>
        <li>
          <button
            to="#"
            class="px-1.5 py-1 border rounded-md border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-primary-white duration-100 ease-out focus:outline-none"
          >
            contact me
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>

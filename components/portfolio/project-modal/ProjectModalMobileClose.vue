<template>
  <button
    class="absolute right-5 top-4 text-red-500 hover:text-red-400 duration-150 focus:bg-gray-100 hover:bg-gray-100 hover:bg-opacity-25 rounded-full p-0.5 lg:hidden"
    @click="toggle"
  >
    <svg
      class="w-7 h-7"
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
</template>

<script>
export default {
  props: {
    toggle: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style></style>

<template>
  <li class="flex pb-2">
    <div class="w-28 sm:w-56">{{ name }}:</div>
    <div class="sm:ml-12">{{ content }}</div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>

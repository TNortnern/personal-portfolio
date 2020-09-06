<template>
  <li class="pb-2 flex">
    <div class="w-56">{{ name }}:</div>
    <div class="ml-12">{{ content }}</div>
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

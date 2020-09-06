<template>
  <h2 class="pb-12 font-bold text-60px">{{ name }}</h2>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>

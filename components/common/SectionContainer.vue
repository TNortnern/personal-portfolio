<template>
  <div class="container w-full p-4 mx-auto">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    customStyle: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>

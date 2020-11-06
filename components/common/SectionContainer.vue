<template>
  <div :class="'container w-full p-4 mx-auto ' + classes">
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
    classes: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>

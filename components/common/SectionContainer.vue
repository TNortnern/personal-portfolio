<template>
  <div
    :class="
      'container w-full p-5 xl:py-5 xl:px-12 xxl:px-7 mx-auto' + computedClasses
    "
  >
    <slot />
  </div>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'
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
    defaultPadding: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const computedClasses = computed(() => {
      const padding = props.defaultPadding ? 'py-20' : ''
      return ` ${props.classes} ${padding}`
    })
    return {
      computedClasses,
    }
  },
}
</script>

<style></style>

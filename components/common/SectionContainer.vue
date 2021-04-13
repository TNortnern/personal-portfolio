<template>
  <div
    :id="id"
    style="max-width: 100em"
    :class="'mx-auto px-4 sm:px-6 lg:px-16' + computedClasses"
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
    id: {
      type: String,
      default: '',
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

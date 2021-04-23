<template>
  <div>
    <a
      v-if="href"
      :href="href"
      target="__blank"
      class="inline-flex pb-2 duration-200 hover:text-primary-blue"
    >
      <div class="w-28 sm:w-56">{{ name }}:</div>
      <div class="sm:ml-12">{{ content }}</div>
    </a>
    <li
      v-else
      :class="
        onClick ? 'cursor-pointer duration-200 hover:text-primary-blue' : ''
      "
      class="flex pb-2"
      @click="onClick ? onClick() : () => {}"
    >
      <div class="w-28 sm:w-56">{{ name }}:</div>
      <div class="sm:ml-12">{{ content }}</div>
    </li>
  </div>
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
    href: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: null,
    },
  },
}
</script>

<style></style>

<template>
  <li class="mb-2">
    <div class="flex items-center mb-1">
      <div class="w-6 h-6 ml-1 rounded-full bg-very-light-gray"></div>
      <div class="flex-1 font-light ml-19px">
        {{ item.date || 2017 }}
      </div>
    </div>
    <div class="ml-12 font-light">
      <span class="block" style="width: 245px"
        >Ozark Technical Community College, Springfield, MO - Computer
        Science</span
      >
    </div>
    <button class="block ml-12 font-light hover:text-primary-blue">
      see more
    </button>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => [],
    },
  },
}
</script>

<style></style>

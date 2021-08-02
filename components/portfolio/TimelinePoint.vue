<template>
  <div>
    <div v-if="!Math.abs(index % 2) == 1" class="flex">
      <div class="w-full"></div>
      <!-- Left side -->
      <div class="relative flex items-start justify-center w-16 px-4">
        <!-- Circle -->
        <div class="w-8 h-8 rounded-full bg-cool-gray-400"></div>
        <!-- Line -->
        <div class="absolute w-1 h-full mt-2 bg-cool-gray-400"></div>
      </div>
      <div class="w-full">
        <div class="w-full">{{ item.date }}</div>
        <div class="my-2 text-lg font-semibold">
          <template v-if="!item.html">
            {{ item.content }}
          </template>
          <template v-else>
            <div v-html="item.html"></div>
          </template>
        </div>
        <!-- <button class="hover:text-primary-blue" :class="marginClass">
          see more
        </button> -->
      </div>
    </div>
    <div v-else class="flex w-full">
      <div class="w-full text-right">
        <div class="w-full">{{ item.date }}</div>
        <div class="my-2 text-lg font-semibold">
          <template v-if="!item.html">
            {{ item.content }}
          </template>
          <template v-else>
            <div v-html="item.html"></div>
          </template>
        </div>
        <!-- <button :class="marginClass" class="hover:text-primary-blue">
          see more
        </button> -->
      </div>
      <div class="relative flex items-start justify-center w-16 px-4">
        <div class="w-8 h-8 rounded-full bg-cool-gray-400"></div>
        <div class="absolute w-1 h-full mt-2 bg-cool-gray-400"></div>
      </div>
      <div class="w-full"></div>
      <!-- Right side -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false,
    },
    marginClass: {
      type: String,
      default: 'mb-1',
    },
    item: {
      type: Object,
      default: () => [],
    },
    index: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style></style>

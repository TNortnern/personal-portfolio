<template>
  <div>
    <div v-if="!left" class="flex">
      <div class="w-full"></div>
      <!-- Left side -->
      <div class="w-16 px-4 relative flex items-start justify-center">
        <!-- Circle -->
        <div class="h-8 w-8 rounded-full bg-cool-gray-400"></div>
        <!-- Line -->
        <div class="w-1 bg-cool-gray-400 absolute h-full mt-2"></div>
      </div>
      <div class="w-full">
        <div class="font-light w-full">{{ item.date }}</div>
        <div class="font-semibold text-lg my-2">
          <template v-if="!item.html">
            {{ item.content }}
          </template>
          <template v-else>
            <div v-html="item.html"></div>
          </template>
        </div>
        <button class="font-light hover:text-primary-blue" :class="marginClass">
          see more
        </button>
      </div>
    </div>
    <div v-else class="w-full flex">
      <div class="w-full text-right">
        <div class="font-light w-full">{{ item.date }}</div>
        <div class="font-semibold text-lg my-2">
          <template v-if="!item.html">
            {{ item.content }}
          </template>
          <template v-else>
            <div v-html="item.html"></div>
          </template>
        </div>
        <button :class="marginClass" class="font-light hover:text-primary-blue">
          see more
        </button>
      </div>
      <div class="w-16 px-4 relative flex items-start justify-center">
        <div class="h-8 w-8 rounded-full bg-cool-gray-400"></div>
        <div class="w-1 bg-cool-gray-400 absolute h-full mt-2"></div>
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
  },
}
</script>

<style></style>

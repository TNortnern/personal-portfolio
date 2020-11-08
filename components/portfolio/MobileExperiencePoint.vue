<template>
  <li class="text-center sm:text-left">
    <p class="text-lg font-bold text-primary-blue">{{ item.date }}</p>
    <div class="my-3 text-2xl">
      <h2>{{ content }}</h2>
    </div>
  </li>
</template>

<script>
import { onMounted, ref } from '@nuxtjs/composition-api'
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
  setup(props) {
    const content = ref('')
    onMounted(() => {
      function strip(html) {
        const tmp = document.implementation.createHTMLDocument('New').body
        tmp.innerHTML = html
        return tmp.textContent || tmp.textContent || ''
      }
      if (props.item.html) {
        content.value = strip(props.item.html)
        console.log('props.item.html', strip(props.item.html))
      } else {
        content.value = props.item.content
      }
    })
    return {
      content,
    }
  },
}
</script>

<style></style>

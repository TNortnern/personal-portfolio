<template>
  <div>
    <SectionContainer :default-padding="false" classes="absolute inset-0 z-20">
      <scrollactive
        id="nav"
        class="w-full py-5"
        always-track
        active-class="text-primary-blue"
        :offset="85"
      >
        <div>
          <div class="text-white">
            <DesktopNavigation />
          </div>
        </div>
      </scrollactive>
    </SectionContainer>
    <SectionContainer :default-padding="false">
      <scrollactive
        id="fixed-nav"
        class="fixed top-0 inset-x-0 bg-light-primary-blue duration-500 ease-in-out shadow-lg py-6 px-20 z-30 w-full"
        :class="toggleNavClass()"
        always-track
        active-class="text-primary-blue"
        :offset="90"
      >
        <div>
          <div class="text-white">
            <DesktopNavigation />
          </div>
        </div>
      </scrollactive>
    </SectionContainer>
  </div>
</template>

<script>
import { onMounted, ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const active = ref(false)
    const toggleNavClass = () => {
      // toggles the animated slide
      if (active.value) {
        return 'transform translate-y-0'
      } else {
        return 'transform -translate-y-64'
      }
    }
    onMounted(() => {
      window.document.onscroll = () => {
        const navBar = document.getElementById('fixed-nav')
        // have we scrolled past this element?
        if (window.scrollY > navBar.offsetTop + navBar.offsetHeight) {
          active.value = true
        } else {
          active.value = false
        }
      }
    })

    return {
      // open,
      toggleNavClass,
      active,
      // toggle: () => (open.value = !open.value),
    }
  },
}
</script>

<style></style>

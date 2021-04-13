<template>
  <div class="h-screen text-white bg-theme-blue">
    <client-only>
      <vue-particles
        color="#46a29f"
        :particle-opacity="1"
        :particles-number="110"
        shape-type="circle"
        :particle-size="4"
        lines-color="#dedede"
        :lines-width="1"
        :line-linked="true"
        :line-opacity="0.4"
        :lines-distance="150"
        :move-speed="3"
        :hover-effect="true"
        hover-mode="grab"
        :click-effect="true"
        click-mode="push"
        style="height: 100%"
      />
    </client-only>
    <SectionContainer :default-padding="false">
      <Navigation />
      <div
        class="flex flex-wrap items-center justify-center absolute inset-0 h-screen mx-auto lg:max-w-6xl"
      >
        <div>
          <div class="text-2xl sm:text-5xl">
            <h1 class="text-center">
              Hello I'm
              <span class="text-primary-blue">Trayvon Northern</span>
            </h1>
            <h1 class="text-center">
              The <span class="text-primary-blue">Full Stack</span> Web
              Developer
            </h1>
          </div>
          <div class="mt-5 text-center">
            <nuxt-link to="#" class="mr-2 btn">Portfolio</nuxt-link>
            <a
              target="__blank"
              :href="$store.state.portfolio.content.resumeUrl"
              class="btn mr-2"
              >Resume</a
            >
            <a
              target="__blank"
              href="https://www.fiverr.com/traynorthern?up_rollout=true"
              class="btn mt-2 lg:mt-0"
              >Testimonials</a
            >
          </div>
        </div>
      </div>
    </SectionContainer>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style scoped>
.btn {
  @apply duration-150 ease-in-out text-xl;
}
.btn:hover {
  @apply bg-primary-blue border-primary-blue;
}
</style>

<template>
  <div class="h-screen text-white bg-theme-blue">
    <SectionContainer :default-padding="false">
      <Navigation />
      <div
        class="flex flex-wrap items-center justify-center h-screen mx-auto lg:max-w-6xl"
      >
        <div>
          <div class="text-3xl sm:text-5xl">
            <h1 class="text-center">
              Hello I'm <span class="text-primary-blue">Trayvon Northern</span>
            </h1>
            <h1>
              The <span class="text-primary-blue">Full Stack</span> Web
              Developer
            </h1>
          </div>
          <div class="mt-3 text-center">
            <button class="mr-2 btn">Portfolio</button>
            <button class="btn">Resume</button>
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

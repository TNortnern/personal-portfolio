<template>
  <div class="flex flex-wrap justify-center lg:block lg:w-2/5 font-montserrat">
    <p class="pb-1 -mb-3 md:-mb-6 text-55px font-montserrat">Hello,</p>
    <p
      class="pb-1 font-bold text-center lg:whitespace-no-wrap text-60px font-montserrat"
    >
      <span class="block -mb-4 md:inline md:mb-0">I'm</span>
      Trayvon Northern
    </p>
    <p class="w-3/4 pb-8 lg:text-lg lg:w-full">
      {{ $store.state.portfolio.content.introText }}
    </p>
    <div
      class="flex justify-center w-full pb-8 space-x-2 lg:justify-start lg:w-auto"
    >
      <button class="btn-primary">Portfolio</button>
      <button class="btn-white">Contact me</button>
    </div>
    <div class="flex">
      <img class="text-orange-300" src="/linkedin.svg" alt="linkedin icon" />
      <span class="mr-2">icon</span>
      <span class="mr-2">icon</span>
      <span>icon</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

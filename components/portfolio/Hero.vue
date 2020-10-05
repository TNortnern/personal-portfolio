<template>
  <SectionContainer>
    <div class="flex justify-center mx-auto lg:max-w-6xl">
      <div class="flex justify-center flex-wrap lg:block lg:w-2/5">
        <p class="pb-1 -mb-3 md:-mb-6 text-55px">Hello,</p>
        <p class="pb-1 text-center font-bold lg:whitespace-no-wrap text-60px">
          <span class="block md:inline -mb-4 md:mb-0">I'm</span>
          Trayvon Northern
        </p>
        <p class="pb-8 lg:text-lg w-3/4">
          I'm a recent CS Grad that is passionate about Web Development. I enjoy
          frontend development most, from building UI's to email development.
        </p>
        <div
          class="flex w-full justify-center lg:justify-start lg:w-auto pb-8 space-x-2"
        >
          <button class="btn-primary">Portfolio</button>
          <button class="btn-white">Contact me</button>
        </div>
        <div class="flex">
          <img
            class="text-orange-300"
            src="/linkedin.svg"
            alt="linkedin icon"
          />
          <span class="mr-2">icon</span>
          <span class="mr-2">icon</span>
          <span>icon</span>
        </div>
      </div>
      <div>
        <Laptop class="hidden w-4/5 ml-56 lg:block" />
      </div>
    </div>
  </SectionContainer>
</template>

<script>
export default {}
</script>

<style></style>

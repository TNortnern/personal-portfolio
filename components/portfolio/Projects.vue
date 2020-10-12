<template>
  <SectionContainer id="projects">
    <SectionTitle name="Projects" />
    <div class="flex justify-center text-custom-gray-100">
      <div class="relative w-project-image">
        <div
          class="relative z-20 px-3 py-2 w-project-info-card info-card right-64 top-20"
        >
          <div class="flex justify-end pb-1.5">
            <div class="flex flex-col items-end">
              <h3 class="-mb-1 text-xl font-bold">Get Agency Reviews</h3>
              <span class="text-sm">Vue / Laravel / Nuxt / MySQL / SCSS</span>
            </div>
          </div>
          <p>
            I'm a recent CS Grad that is passionate about Web Development. I
            enjoy frontend development most, from building UI's to email
            development.
          </p>
        </div>
        <img
          class="relative w-full left-64"
          src="/testproject.png"
          alt="test"
        />
      </div>
    </div>
  </SectionContainer>
</template>

<script>
export default {}
</script>

<style>
.info-card {
  /* left: -18rem; */
  @apply absolute bg-light-primary-blue rounded-md shadow-xl pb-4;
  /* top: 5rem; */
  width: 37.25rem !important;
}
</style>

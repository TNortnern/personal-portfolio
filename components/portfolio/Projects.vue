<template>
  <SectionContainer>
    <SectionTitle name="Projects" />
    <div class="flex justify-center">
      <div class="w-2/5 relative">
        <div class="info-card px-3 py-2">
          <div class="flex justify-end">
            <div>
              <h3>Get Agency Reviews</h3>
              <span class="text-sm">Vue / Laravel / Nuxt / MySQL / SCSS</span>
            </div>
          </div>
        </div>
        <img class="w-full" src="/testproject.png" alt="test" />
      </div>
    </div>
  </SectionContainer>
</template>

<script>
export default {}
</script>

<style>
.info-card {
  left: -20rem;
  @apply absolute bg-light-primary-blue w-5/6 h-28 rounded-md inset-y-0 shadow-lg;
}
</style>

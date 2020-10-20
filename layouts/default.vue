<template>
  <main lang="en-us" class="">
    <Modal />
    <Nuxt />
  </main>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap');
html {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  @apply bg-theme-blue;
  @apply text-primary-white;
}
p {
  font-family: 'Krub', 'sans-serif';
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s;
}
.scale-enter, .scale-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(0);
}
</style>

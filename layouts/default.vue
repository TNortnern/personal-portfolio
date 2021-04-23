<template>
  <main lang="en-us" class="">
    <Nuxt />
  </main>
</template>

<script>
export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300&display=swap');
html {
  font-family: 'Quicksand', sans-serif;
}
p {
  font-family: 'Krub', 'sans-serif';
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
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

button:focus {
  @apply outline-none;
}
.btn {
  @apply px-5 py-2 duration-100 ease-out border rounded-md outline-none;
}

.btn:focus {
  @apply outline-none;
}

.btn-primary {
  @apply btn border-primary-blue text-primary-blue;
}
.btn-primary:hover {
  @apply text-white bg-primary-blue;
}
.btn-white {
  @apply btn border-primary-white text-primary-white;
}
.btn-white:hover {
  @apply text-black bg-primary-white;
}

@media only screen and (min-width: 1600px) {
  .container {
    max-width: 1280px;
  }
}
.mobile-drawer-enter-active,
.mobile-drawer-leave-active {
  transition: all 0.35s;
  /* position: absolute; */
}

.mobile-drawer-enter,
.mobile-drawer-leave-to {
  transform: translateX(1000px) scale(0.5);
}

.mobile-drawer-leave,
.mobile-drawer-enter-to {
  transform: translateX(0) scale(1);
}
.contact-drawer-enter-active,
.contact-drawer-leave-active {
  transition: all 0.35s;
  /* position: absolute; */
}

.contact-drawer-enter,
.contact-drawer-leave-to {
  transform: translateX(-1000px) scale(0.5);
}

.contact-drawer-leave,
.contact-drawer-enter-to {
  transform: translateX(0) scale(1);
}
</style>

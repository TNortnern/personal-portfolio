<template>
  <div class="bg-gray-100 pt-8">
    <SectionContainer class="bg-light-primary-blue">
      <footer class="text-white py-8">
        <!-- <div class="flex justify-center relative">
          <button
            class="bg-primary-blue rounded-full absolute p-1.5 duration-200 transform go-up"
            style="top: -6.5rem"
          >
            <arrow class="text-light-primary-blue w-16 h-16" />
          </button>
        </div> -->
        <div class="text-center">
          <a
            href="https://github.com/tnortnern"
            target="__blank"
            class="hover:text-primary-blue duration-200 inline-block"
          >
            <p>Designed and developed by Trayvon Northern</p>
            <!-- <p>(417) 370 9347</p>
            <p>traynorthern@yahoo.com</p> -->
            <p class="text-primary-blue">
              Copyright {{ new Date().getFullYear() }}&copy;
            </p>
          </a>
        </div>
      </footer>
    </SectionContainer>
  </div>
</template>

<script>
export default {}
</script>

<style>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.go-up:hover i {
  animation: bounce 0.8s infinite;
}
</style>

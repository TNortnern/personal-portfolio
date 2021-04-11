<template>
  <div class="bg-gray-100">
    <SectionContainer>
      <SectionTitle>
        About <span class="text-primary-blue">Me</span>
      </SectionTitle>
      <div class="flex flex-wrap justify-center pl-4 lg:justify-between">
        <div class="w-full lg:w-2/5">
          <h3 class="pb-4 text-3xl font-bold">Who am I?</h3>
          <p class="pb-4">
            I'm a recent CS Grad that is passionate about Web Development. I
            enjoy frontend development most, from building UI's to email
            development.
          </p>
          <p class="pb-4">
            I always stride to get better and learn more everyday. Lorem ipsum
            dolor sit amet consectetur adipiscing elit, inceptos blandit vivamus
            interdum neque laoreet, cubilia velit ac vel imperdiet senectus ut,
            nullam tortor litora pulvinar dis.
          </p>
          <ul class="flex flex-col pb-4">
            <AboutHighlight name="Email" content="traynorthern@yahoo.com" />
            <AboutHighlight
              name="Github"
              content="tnortnern"
              href="https://github.com/tnortnern"
            />
            <AboutHighlight
              name="Fiverr"
              content="traynorthern"
              href="https://www.fiverr.com/traynorthern?up_rollout=true"
            />
            <!-- <AboutHighlight name="LinkedIn" content="https://trayvonnorthern.tech" /> -->
          </ul>
          <a
            :href="$store.state.portfolio.content.resumeUrl"
            class="btn-primary"
            >Resume</a
          >
        </div>
        <div class="w-full lg:w-14/25">
          <h3 class="pb-4 mt-8 text-3xl font-bold lg:text-center lg:mt-0">
            Trajectory
          </h3>
          <Timeline />
        </div>
      </div>
    </SectionContainer>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

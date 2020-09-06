<template>
  <SectionContainer>
    <SectionTitle name="About me" />
    <div class="flex justify-between pl-4">
      <div class="w-2/5">
        <h3 class="pb-4 text-3xl">Who am I?</h3>
        <p class="pb-4">
          I'm a recent CS Grad that is passionate about Web Development. I enjoy
          frontend development most, from building UI's to email development.
        </p>
        <p class="pb-4">
          I always stride to get better and learn more everyday. Lorem ipsum
          dolor sit amet consectetur adipiscing elit, inceptos blandit vivamus
          interdum neque laoreet, cubilia velit ac vel imperdiet senectus ut,
          nullam tortor litora pulvinar dis.
        </p>
        <ul class="flex flex-col pb-4">
          <AboutHighlight name="Email" content="traynorthern@yahoo.com" />
          <AboutHighlight name="Github" content="tnortnern" />
          <!-- <AboutHighlight name="LinkedIn" content="https://trayvonnorthern.tech" /> -->
        </ul>
        <button class="btn-primary">Resume</button>
      </div>
      <div style="width: 30%">
        <h3 class="pb-4 text-3xl">Trajectory</h3>
        <!-- component -->
        <div class="relative w-1/2 m-8">
          <div
            class="absolute top-0 h-full border-r-2 border-very-light-gray"
            style="left: 15px"
          ></div>
          <ul class="p-0 m-0 list-none">
            <TimelinePoint />
            <TimelinePoint :item="{ content: 'Freelance - Web Developer' }" />
            <TimelinePoint />
            <TimelinePoint />
            <TimelinePoint />
          </ul>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script>
export default {}
</script>

<style></style>

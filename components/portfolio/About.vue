<template>
  <div class="bg-gray-100">
    <SectionContainer id="about">
      <SectionTitle>
        About <span class="text-primary-blue">Me</span>
      </SectionTitle>
      <div class="flex flex-wrap justify-center pl-4 lg:justify-between">
        <div class="w-full lg:w-2/5">
          <h3 class="pb-4 text-3xl font-bold">Who am I?</h3>
          <p class="pb-4">
            A fast growing full time web developer passionate about Web
            Development. I have a large array of skillsets from building complex
            UI/UX, creating advanced API's, and HTML email development.
          </p>
          <p class="pb-4">
            I always stride to get better and learn more everyday but I love the
            current technologies I work with. Something that helps me get better
            and learn is teaching/consulting, I currently do it as a freelancer.
            It's always a great feeling to be confident in what you do and able
            to help others thrive.
          </p>
          <ul class="flex flex-col pb-4">
            <AboutHighlight
              :on-click="toggleContactMenu"
              name="Email"
              content="traynorthern@yahoo.com"
            />
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
import { toggleContactMenu } from '~/components/portfolio/ContactMenu'
export default {
  setup: () => ({
    toggleContactMenu,
  }),
}
</script>

<style></style>

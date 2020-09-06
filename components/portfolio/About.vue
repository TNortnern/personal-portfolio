<template>
  <SectionContainer>
    <SectionTitle name="About me" />
    <div class="flex justify-between max-w-6xl pl-4">
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
        <ul class="pb-4 flex flex-col">
          <AboutHighlight name="Email" content="traynorthern@yahoo.com" />
          <AboutHighlight name="Github" content="tnortnern" />
          <!-- <AboutHighlight name="LinkedIn" content="https://trayvonnorthern.tech" /> -->
        </ul>
        <button class="btn-primary">Resume</button>
      </div>
      <div class="w-2/5">
        <h3 class="pb-4 text-3xl">Trajectory</h3>
        <!-- component -->
        <div class="relative w-1/2 m-8">
          <div
            class="border-r-2 border-very-light-gray absolute h-full top-0"
            style="left: 15px"
          ></div>
          <ul class="list-none m-0 p-0">
            <li class="mb-2">
              <div class="flex items-center mb-1">
                <div class="bg-very-light-gray rounded-full h-6 w-6 ml-1"></div>
                <div class="flex-1 ml-4 font-light">2017-2019</div>
              </div>
              <div class="ml-12 min-w-max-content">
                <span class="block font-bold"
                  >Ozark Technical Community College</span
                >
                <span class="block font-bold">
                  Springfield, MO - Computer Science</span
                >
              </div>
            </li>
            <li class="mb-2">
              <div class="flex items-center mb-1">
                <div class="bg-very-light-gray rounded-full h-8 w-8"></div>
                <div class="flex-1 ml-4 font-medium">
                  Nov 2017 - Multiple Releases
                </div>
              </div>
              <div class="ml-12">v0.1.0 - v0.2.2</div>
            </li>
            <li class="mb-2">
              <div class="flex items-center mb-1">
                <div class="bg-very-light-gray rounded-full h-8 w-8"></div>
                <div class="flex-1 ml-4 font-medium">
                  Feb 2018 - Other stuff happened
                </div>
              </div>
              <div class="ml-12">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                perspiciatis facilis deserunt excepturi sunt pariatur
                consequuntur eveniet molestias ea quia? Magni veniam illo optio
                tempora modi exercitationem qui adipisci ex.
              </div>
            </li>
            <li class="mb-2">
              <div class="flex items-center mb-1">
                <div class="bg-very-light-gray rounded-full h-8 w-8"></div>
                <div class="flex-1 ml-4 font-medium">
                  July 2018 - More stuff happened
                </div>
              </div>
              <div class="ml-12">
                Consequuntur odit explicabo officiis veniam incidunt non velit
                ex consectetur magnam minima vero hic impedit cumque, blanditiis
                autem distinctio facere dolor atque facilis, eos, labore sunt
                iusto. Beatae, quas, dolorem?
              </div>
            </li>
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

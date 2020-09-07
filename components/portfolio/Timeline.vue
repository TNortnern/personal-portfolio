<template>
  <div class="antialiased h-full w-full">
    <div class="p-12">
      <TimelinePoint
        :item="{
          date: 'August 2017 - December 2019',
          content: 'Ozark Technical Community College - Computer Science',
        }"
      />
      <TimelinePoint
        :item="{
          date: 'July 2019 - December 2019',
        }"
        :left="true"
      >
        <span class="block">Marlin Network -</span>
        <span class="block">Web Developer Intern</span>
      </TimelinePoint>
      <TimelinePoint
        :item="{
          date: 'December 2019',
          content: 'SGF Hack 4 Good - 1st Place',
        }"
      />
      <TimelinePoint
        :item="{
          date: 'February 2020 - Present',
          content: 'Freelance Web Developer',
        }"
        :left="true"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

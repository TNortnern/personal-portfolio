<template>
  <div class="w-full h-full antialiased">
    <div class="hidden lg:block lg:p-12">
      <TimelinePoint
        v-for="(
          { id, from, to, end, current, html, content, left }, index
        ) in $store.state.portfolio.content.timelines"
        :key="id"
        :item="{
          date: handleDate({ from, to, end, current }),
          content: content || null,
          html: html || null,
        }"
        :index="index"
        :left="left || false"
      >
      </TimelinePoint>
    </div>
    <div class="block lg:hidden">
      <ul>
        <MobileExperiencePoint
          v-for="{ id, from, to, end, current, html, content } in $store.state
            .portfolio.content.timelines"
          :key="id"
          :item="{
            date: handleDate({ from, to, end, current }),
            content: content || null,
            html: html || null,
          }"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const months = () => [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const handleDate = ({ from, to, current }) => {
      const start = convertDate(from)
      const end = to ? convertDate(to) : null
      if (end && !current) {
        return `${start} - ${end}`
      }
      if (current) {
        return `${start} - Present`
      }
      return start
    }
    const convertDate = (date) => {
      const d = new Date(date)
      const month = months()[d.getMonth()]
      const year = d.getFullYear()
      return `${month} ${year}`
    }
    return { handleDate, convertDate }
  },
}
</script>

<style></style>

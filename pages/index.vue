<template>
  <div>
    <project-modal />
    <AppLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </AppLayout>
  </div>
</template>

<script>
export default {
  async asyncData({ params, error, $axios, store }) {
    try {
      const techs = await $axios.get('/technologies')
      const introText = await $axios.get('/hero-intro')
      const timelines = await $axios.get('/timelines')
      store.commit('technologies/setTechs', techs.data)
      store.commit('portfolio/set', {
        item: 'introText',
        content: introText.data.content,
      })
      store.commit('portfolio/set', {
        item: 'timelines',
        content: timelines.data,
      })
    } catch (err) {
      // console.log('err', err.response.data)
    }
  },
}
</script>

<style></style>

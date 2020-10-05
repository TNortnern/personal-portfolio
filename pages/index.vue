<template>
  <AppLayout>
    <Hero />
    <About />
    <Skills />
    <Projects />
  </AppLayout>
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
    // try {
    //   const { data } = await $axios.get(
    //     'https://privatedebtdeals.herokuapp.com/deal-remakes'
    //   )
    //   return { data }
    // } catch (err) {
    //   error({
    //     statusCode: 500,
    //     message: `Something went wrong... error: ${err}`,
    //   })
    // }
  },
}
</script>

<style></style>

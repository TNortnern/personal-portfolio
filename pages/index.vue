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
      store.commit('technologies/setTechs', techs.data)
    } catch (err) {
      console.log('err', err)
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

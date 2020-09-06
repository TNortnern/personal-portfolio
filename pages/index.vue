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

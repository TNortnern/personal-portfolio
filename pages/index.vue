<template>
  <AppLayout> My App </AppLayout>
</template>

<script>
export default {
  async asyncData({ params, error, $axios, store }) {
    try {
      const { data } = await $axios.get(
        'https://privatedebtdeals.herokuapp.com/deal-remakes'
      )
      return { data }
    } catch (err) {
      error({
        statusCode: 500,
        message: `Something went wrong... error: ${err}`,
      })
    }
  },
}
</script>

<style>
html {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>

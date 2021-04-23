<template>
  <div>
    <MobileNavDrawer />
    <ContactMenu />
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
// import {
//   contactMenuOpen,
//   toggleContactMenu,
// } from '~/components/portfolio/ContactMenu'
export default {
  // setup: () => ({
  //   contactMenuOpen,
  //   toggleContactMenu,
  // }),
  async asyncData({ $axios, store }) {
    try {
      const techs = await $axios.get('/technologies?_sort=importance:desc')
      const introText = await $axios.get('/hero-intro')
      const timelines = await $axios.get('/timelines')
      const projects = await $axios.get('/projects?_sort=importance:desc')
      const resumeUrl = await $axios.get('/resume-url')
      // const meDescription = await $axios.get('/me-description')
      // console.log(`projects2`, projects.data)
      // console.log(`resumeUrl`, resumeUrl.data)
      // console.log(`meDescription`, meDescription)
      store.commit('technologies/setTechs', techs.data)
      store.commit('portfolio/setProjects', projects.data)
      store.commit('portfolio/set', {
        item: 'introText',
        content: introText.data.content,
      })
      store.commit('portfolio/set', {
        item: 'resumeUrl',
        content: resumeUrl.data.url,
      })
      store.commit('portfolio/set', {
        item: 'timelines',
        content: timelines.data,
      })
    } catch (err) {
      // console.log('err', err.response.data)
      // console.log(`err`, err)
    }
  },
  head: {
    title: 'Personal Portfolio',
  },
}
</script>

<style></style>

const state = () => ({
  content: {
    introText:
      "I'm a recent CS Grad that is passionate about Web Development. I enjoy frontend development most, from building UI's to email development.",
    timelines: [],
  },
})

const mutations = {
  set(state, { item, content }) {
    state.content[item] = content
  },
}

export default {
  state,
  mutations,
}

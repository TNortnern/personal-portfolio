const state = () => ({
  content: {
    introText:
      "I'm a recent CS Grad that is passionate about Web Development. I enjoy frontend development most, from building UI's to email development.",
    timelines: [],
  },
  modal: null,
  current: null,
  projects: [],
})

const mutations = {
  set(state, { item, content }) {
    state.content[item] = content
  },
  setProjects(state, projects) {
    state.projects = projects
  },
  setModal(state, value) {
    state.modal = value
  },
  setCurrent(state, value) {
    state.current = value
  },
}

export default {
  state,
  mutations,
}

const state = () => ({
  all: [],
})

const mutations = {
  setTechs(state, value) {
    state.all = value
  },
}

export default {
  state,
  mutations,
}

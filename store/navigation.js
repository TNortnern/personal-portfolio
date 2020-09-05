const state = () => ({
  routes: [
    { name: 'resume', to: 'https://google.com', external: true },
    { name: 'my projects', to: '#projects' },
    { name: 'about me', to: '#about' },
  ],
})

export default {
  state,
}

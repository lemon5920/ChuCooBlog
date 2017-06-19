export const state = () => ({
  currentPage: ''
})

export const mutations = {
  changePage (state, pageName) {
    state.currentPage = pageName
  }
}

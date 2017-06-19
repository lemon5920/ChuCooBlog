import Vuex from 'vuex'

import mutations from './mutations'

const firstStore = () => {
  return new Vuex.Store({
    state: {
      currentPage: ''
    },
    mutations
  })
}

export default firstStore

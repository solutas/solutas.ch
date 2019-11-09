const ENDPOINT = 'https://solutas.ch/wp-json'

const MENU = `${ENDPOINT}/wp/v2/menu`

export const state = () => ({
  main: []
})

export const mutations = {
  set(state, main) {
    state.main = main
  }
}

export const getters =  {
    menu: (state) => (id) => {
      return state.menu.main;
    }
}

export const actions = {
  async get({ commit }) {
    await this.$axios.get(MENU).then(res => {
      if (res.status === 200) {
        commit('set', res.data)
      }
    })    
  },
  async nuxtServerInit({ dispatch }) {
    await dispatch('set')
  }  
}

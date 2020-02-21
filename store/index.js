const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('menu/get')
  }
}
export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'en'
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}


export default {
  actions
}

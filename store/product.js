export const state = () => ({
  products: [],
})

export const getters = {
  getProducts: (state) => {
    return state.products
  },
}

export const mutations = {
  SET_PRODUCTS: (state, payload) => {
    state.products = payload
  },
}

export const actions = {
  async fetchProducts({ commit }) {
    const products = await this.$axios.$get('/cms/products')
    commit('SET_PRODUCTS', products)
    return products
  },
}

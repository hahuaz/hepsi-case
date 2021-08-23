export const state = () => ({
  productIDs: [],
  populatedProducts: [],
})

export const getters = {
  getPopulatedProducts: (state) => state.populatedProducts,
}

export const mutations = {
  ADD_TO_CART: (state, payload) => {
    state.productIDs.push({ id: payload, quantity: 1 })
  },

  INC_QUANTITY(state, id) {
    const product = state.productIDs.find((product) => product.id === id)
    product.quantity++
  },
  DEC_QUANTITY(state, id) {
    const product = state.productIDs.find((product) => product.id === id)
    product.quantity--
  },
  SET_POPULATED_PRODUCTS(state, payload) {
    state.populatedProducts = payload
  },
}

export const actions = {
  async populateCart({ commit, state }) {
    console.log('in populate')
    if (state.productIDs.length <= 0) return
    console.log('population started')
    const populatedProducts = await Promise.all(
      state.productIDs.map(async (e) => {
        const product = await this.$axios.$get(`/cms/products/${e.id}`)
        return { ...product, quantity: e.quantity }
      })
    )

    commit('SET_POPULATED_PRODUCTS', populatedProducts)
  },
}

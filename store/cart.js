export const state = () => ({
  productIDs: [],
  populatedProducts: [],
})

export const getters = {
  getPopulatedProducts: (state) => state.populatedProducts,
}

export const mutations = {
  ADD_TO_CART: (state, id) => {
    if (state.productIDs.includes(id)) return
    state.productIDs.push(id)
  },

  REMOVE_FROM_CART: (state, id) => {
    state.productIDs.splice(
      state.productIDs.findIndex((e) => e === id),
      1
    )
    state.populatedProducts.splice(
      state.populatedProducts.findIndex((e) => e.id === id),
      1
    )
  },

  INC_QUANTITY(state, id) {
    const product = state.populatedProducts.find((product) => product.id === id)
    product.quantity++
  },
  DEC_QUANTITY(state, id) {
    const product = state.populatedProducts.find((product) => product.id === id)
    product.quantity--
  },

  SET_QUANTITY(state, { id, quantity }) {
    const product = state.populatedProducts.find((product) => product.id === id)
    product.quantity = quantity
  },
  SET_POPULATED_PRODUCTS(state, payload) {
    state.populatedProducts = payload
  },
}

export const actions = {
  async populateCart({ commit, state }) {
    try {
      if (state.productIDs.length <= 0) return
      const populatedProducts = await Promise.all(
        state.productIDs.map(async (id) => {
          const product = await this.$axios.$get(`/cms/products/${id}`)
          return { ...product, quantity: 1 }
        })
      )

      commit('SET_POPULATED_PRODUCTS', populatedProducts)
    } catch (error) {
      console.error(error)
      throw new Error("Couldn't populate cart")
    }
  },
}

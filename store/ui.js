export const state = () => ({
  isCartDrawerOpen: false,
})

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
  TOGGLE_CART_DRAWER: (state) => {
    state.isCartDrawerOpen = !state.isCartDrawerOpen
  },
}

// export const actions = {
//   updateActionValue({ commit }) {
//     commit('updateValue', payload)
//   }
// }

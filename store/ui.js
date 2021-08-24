export const state = () => ({
  isCartDriverOpen: false,
})

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
  TOGGLE_CART_DRIVER: (state) => {
    state.isCartDriverOpen = !state.isCartDriverOpen
  },
}

// export const actions = {
//   updateActionValue({ commit }) {
//     commit('updateValue', payload)
//   }
// }

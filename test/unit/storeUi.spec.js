import { describe, expect } from '@jest/globals'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import { state, mutations } from '../../store/ui.js'

describe('store/ui', () => {
  test('should toggle isCartDrawerOpen value when TOGGLE_CART_DRAWER commited', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({ state, mutations })
    expect(store.state.isCartDrawerOpen).toBe(false)
    store.commit('TOGGLE_CART_DRAWER')
    expect(store.state.isCartDrawerOpen).toBe(true)
  })
})

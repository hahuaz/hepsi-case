import { describe, expect, jest } from '@jest/globals'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import defaultLayoutVue from '~/layouts/default.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('defaultLayout.vue', () => {
  let wrapper, mutations, store

  beforeEach(() => {
    mutations = {
      'ui/TOGGLE_CART_DRAWER': jest.fn(),
    }

    store = new Vuex.Store({
      mutations,
    })
    wrapper = mount(defaultLayoutVue, {
      store,
      localVue,
      computed: {
        cartDrawer() {
          return false
        },
      },
      stubs: {
        Nuxt: true,
        'font-awesome-icon': true,
        cart: true,
      },
    })
  })
  test('TOGGLE_CART_DRAWER mutation should be triggered when open cart button clicked', async () => {
    await wrapper.find('button.open-cart').trigger('click')

    expect(mutations['ui/TOGGLE_CART_DRAWER']).toHaveBeenCalled()
  })
})

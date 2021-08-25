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
      modules: {
        namespace: true,
        ui: {
          mutations,
          state: {
            isCartDrawerOpen: false,
          },
        },
      },
    })

    wrapper = mount(defaultLayoutVue, {
      store,
      localVue,
      stubs: {
        Nuxt: true,
        'font-awesome-icon': true,
        cart: true,
      },
    })
  })
  test('should commit TOGGLE_CART_DRAWER mutation when open cart button clicked', async () => {
    await wrapper.find('button.open-cart').trigger('click')

    expect(mutations['ui/TOGGLE_CART_DRAWER']).toHaveBeenCalled()
  })
  test('should prevent scrolling when cart button clicked', async () => {
    wrapper = await mount(defaultLayoutVue, {
      store: new Vuex.Store({
        modules: {
          ui: {
            mutations: {
              'ui/TOGGLE_CART_DRAWER': (state) => {
                state.isCartDrawerOpen = !state.isCartDrawerOpen
              },
            },
            state: {
              isCartDrawerOpen: false,
            },
          },
        },
      }),
      localVue,
      stubs: {
        Nuxt: true,
        'font-awesome-icon': true,
        cart: true,
      },
    })

    await wrapper.find('button.open-cart').trigger('click')

    const requiredClasess = ['tw-max-h-screen', 'tw-overflow-hidden']
    const appClasses = wrapper.find('div.test-app').classes()
    const result = requiredClasess.every((e) => appClasses.includes(e))

    expect(result).toBe(true)
  })
})

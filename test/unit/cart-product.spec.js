import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import cartProductVue from '~/components/cart/product.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('cartProduct.vue', () => {
  let wrapper, store, mutations

  beforeEach(() => {
    mutations = {
      'cart/REMOVE_FROM_CART': jest.fn(),
    }

    store = new Vuex.Store({
      mutations,
    })

    wrapper = mount(cartProductVue, {
      propsData: {
        product: {
          image: [
            {
              _id: '6118cd2d14b642000bc9de42',
              name: 'sweatshirt1-3.jpg',
              alternativeText: '',
              caption: '',
              hash: 'sweatshirt1_3_f4797ee767',
              ext: '.jpg',
              mime: 'image/jpeg',
              size: 24.83,
              width: 484,
              height: 663,
              url: 'https://storage.googleapis.com/storefront-boutique/sweatshirt1_3_f4797ee767/sweatshirt1_3_f4797ee767.jpg',
              formats: {
                thumbnail: {
                  name: 'thumbnail_sweatshirt1-3.jpg',
                  hash: 'thumbnail_sweatshirt1_3_f4797ee767',
                  ext: '.jpg',
                  mime: 'image/jpeg',
                  width: 114,
                  height: 156,
                  size: 3.12,
                  path: null,
                  url: 'https://storage.googleapis.com/storefront-boutique/thumbnail_sweatshirt1_3_f4797ee767/thumbnail_sweatshirt1_3_f4797ee767.jpg',
                },
              },
              provider: 'google-cloud-storage',
              related: ['6118cd3414b642000bc9de44'],
              createdAt: '2021-08-15T08:15:41.211Z',
              updatedAt: '2021-08-15T08:15:48.275Z',
              __v: 0,
              id: '6118cd2d14b642000bc9de42',
            },
          ],
          _id: '6118cd3414b642000bc9de44',
          price: { regular: 120, special: 100 },
          title: 'Sweatshirt Black',
          published_at: '2021-08-15T08:15:51.922Z',
          createdAt: '2021-08-15T08:15:48.065Z',
          updatedAt: '2021-08-23T20:16:59.016Z',
          __v: 0,
          category: '6118ce0114b642000bc9de5b',
          stock: 3,
          id: '6118cd3414b642000bc9de44',
        },
      },
      store,
      localVue,
    })
  })

  test('should contain product title', () => {
    expect(wrapper.find('p.product__title').exists()).toBe(true)
  })

  test('should display given product title', () => {
    const product = {
      image: [
        {
          _id: '6118cd2d14b642000bc9de42',
          name: 'sweatshirt1-3.jpg',
          alternativeText: '',
          caption: '',
          hash: 'sweatshirt1_3_f4797ee767',
          ext: '.jpg',
          mime: 'image/jpeg',
          size: 24.83,
          width: 484,
          height: 663,
          url: 'https://storage.googleapis.com/storefront-boutique/sweatshirt1_3_f4797ee767/sweatshirt1_3_f4797ee767.jpg',
          formats: {
            thumbnail: {
              name: 'thumbnail_sweatshirt1-3.jpg',
              hash: 'thumbnail_sweatshirt1_3_f4797ee767',
              ext: '.jpg',
              mime: 'image/jpeg',
              width: 114,
              height: 156,
              size: 3.12,
              path: null,
              url: 'https://storage.googleapis.com/storefront-boutique/thumbnail_sweatshirt1_3_f4797ee767/thumbnail_sweatshirt1_3_f4797ee767.jpg',
            },
          },
          provider: 'google-cloud-storage',
          related: ['6118cd3414b642000bc9de44'],
          createdAt: '2021-08-15T08:15:41.211Z',
          updatedAt: '2021-08-15T08:15:48.275Z',
          __v: 0,
          id: '6118cd2d14b642000bc9de42',
        },
      ],
      _id: '6118cd3414b642000bc9de44',
      price: { regular: 120, special: 100 },
      title: 'Sweatshirt Black',
      published_at: '2021-08-15T08:15:51.922Z',
      createdAt: '2021-08-15T08:15:48.065Z',
      updatedAt: '2021-08-23T20:16:59.016Z',
      __v: 0,
      category: '6118ce0114b642000bc9de5b',
      stock: 3,
      id: '6118cd3414b642000bc9de44',
    }

    product.title = 'Brown Bird'

    wrapper = mount(cartProductVue, {
      propsData: {
        product,
      },
      store,
      localVue,
    })

    expect(wrapper.find('p.product__title').text()).toBe(product.title)
  })

  test('should commit REMOVE_FROM_CART mutation when remove button clicked', async () => {
    await wrapper.find('button.remove-button').trigger('click')

    expect(mutations['cart/REMOVE_FROM_CART']).toHaveBeenCalled()
  })
})

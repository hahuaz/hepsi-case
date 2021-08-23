<template>
  <div class="">
    <nuxt-link to="/cart">cart</nuxt-link>
    <div class="tw-max-w-screen-xl tw-mx-auto">
      <div class="tw-container tw-mx-auto tw-p-4"></div>
      <transition-group
        name="fade"
        tag="div"
        class="products tw-flex tw-flex-wrap tw-justify-center tw-px-6"
        appear
      >
        <product
          v-for="product in getProducts"
          :key="product.id"
          :product="product"
        ></product>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  async fetch({ store }) {
    await store.dispatch('product/fetchProducts')
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => product.stock !== 0)
    },
    ...mapGetters('product', ['getProducts']),
  },
}
</script>

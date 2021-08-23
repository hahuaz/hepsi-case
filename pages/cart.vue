<template>
  <div>
    <nuxt-link to="/">home</nuxt-link>
    <p>MY CART ({{ products.length }})</p>
    <cart-product
      v-for="product in products"
      :key="product.id"
      :product="product"
    >
    </cart-product>
    <p>Total: {{ calcTotal }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    products() {
      return this.$store.getters['cart/getPopulatedProducts']
    },
    calcTotal() {
      return this.products.reduce(
        (prev, curr) => prev + curr.quantity * curr.price.special,
        0
      )
    },
  },
  async mounted() {
    await this.$store.dispatch('cart/populateCart')
  },
}
</script>

<style lang="scss" scoped></style>

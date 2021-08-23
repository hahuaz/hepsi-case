<template>
  <div>
    <p>MY CART ({LENGTH OF CART})</p>
    <cart-product
      v-for="product in products"
      :key="product.id"
      :product="product"
    >
    </cart-product>
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
  },
  async mounted() {
    await this.$store.dispatch('cart/populateCart')
  },
}
</script>

<style lang="scss" scoped></style>

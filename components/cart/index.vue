<template>
  <div class="tw-bg-white tw-h-full">
    <span>Products: {{ products.length }}</span>
    <span>\ Total: {{ calcTotal }}</span>
    <transition-group name="fade" appear tag="div">
      <cart-product
        v-for="product in products"
        :key="product.id"
        :product="product"
      >
      </cart-product>
    </transition-group>
    <div class="tw-text-center">
      <button
        class="
          place-order
          tw-text-white tw-bg-primary tw-py-2 tw-px-4 tw-rounded-md tw-my-4
        "
        @click="onPlaceOrder"
      >
        PLACE ORDER
      </button>
    </div>
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
  methods: {
    onPlaceOrder() {
      console.log('order placed succesfully')
    },
  },
}
</script>

<style lang="scss" scoped></style>

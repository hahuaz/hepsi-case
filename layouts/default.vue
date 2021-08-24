<template>
  <div class="tw-relative tw-max-h-screen tw-overflow-hidden">
    <header
      class="
        tw-mt-6 tw-w-full tw-bg-gray-100 tw-py-4 tw-px-12 tw-flex tw-justify-end
      "
    >
      <button
        class="tw-text-white tw-bg-primary tw-py-2 tw-px-4 tw-rounded-md"
        @click="toggleCart"
      >
        <font-awesome-icon :icon="['fas', 'shopping-cart']"></font-awesome-icon>
        Open Cart
      </button>
    </header>

    <transition name="slide">
      <div
        v-if="cartDriver"
        class="
          tw-absolute
          tw-inset-0
          tw-z-50
          tw-bg-gray-500
          tw-bg-opacity-50
          tw-max-h-screen
          tw-overflow-scroll
        "
      >
        <div
          v-on-clickaway="toggleCart"
          class="cart tw-w-4/12 tw-absolute tw-top-0 tw-right-0"
        >
          <cart></cart>
        </div>
      </div>
    </transition>
    <Nuxt />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    cartDriver() {
      return this.$store.state.ui.isCartDriverOpen
    },
  },
  watch: {
    // isCartVisible(){
    //   if()
    // }
  },
  methods: {
    ...mapMutations('ui', [
      'TOGGLE_CART_DRIVER', // also supports payload `this.nameOfMutation(amount)`
    ]),
    toggleCart() {
      this.TOGGLE_CART_DRIVER()
    },
  },
}
</script>

<style lang="scss" scoped></style>

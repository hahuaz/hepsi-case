<template>
  <div>
    <div
      class="
        product__container
        tw-w-72
        tw-bg-white
        tw-text-center
        tw-space-y-2
        tw-p-4
        tw-border
        tw-border-gray-200
      "
    >
      <div class="product__image tw-w-48 tw-h-60 tw-mx-auto">
        <img
          class="tw-w-full tw-h-full tw-object-cover tw-object-center"
          :src="product.image[0].url"
          alt="image for product"
        />
      </div>
      <div class="product__content tw-space-y-2">
        <div class="tw-h-10 tw-flex tw-items-center tw-justify-center">
          <p class="product__title tw-text-gray-500 tw-text-sm">
            {{ product.title }}
          </p>
        </div>
        <div class="tw-flex tw-items-center">
          <span
            class="
              product__price
              tw-font-semibold tw-text-gray-600 tw-flex-grow tw-text-xl
            "
          >
            <span
              v-if="product.price.regular"
              class="
                tw-line-through tw-text-red-600 tw-text-xs tw-font-thin tw-mr-1
              "
              >{{ product.price.regular }}&#8378;</span
            >
            {{ product.price.special }}&#8378;
          </span>
          <button
            class="
              product__add
              tw-py-2
              tw-px-4
              tw-bg-primary
              tw-font-semibold
              tw-text-white
              tw-rounded
              tw-flex-shrink
              tw-text-sm
            "
            @click="onAddToCart(product.id)"
          >
            ADD CART
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {}
  },
  computed: {
    currencyEntity() {
      return this.$store.state.ui.currencyEntity
    },
  },
  methods: {
    onAddToCart(id) {
      this.$store.commit('cart/ADD_TO_CART', id)
    },
  },
}
</script>

<style lang="scss" scoped></style>

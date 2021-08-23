<template>
  <div>
    <div
      class="
        product__container
        tw-max-w-xs
        tw-bg-white
        tw-text-center
        tw-space-y-4
        tw-p-4
        tw-border
        tw-border-gray-200
      "
    >
      <div class="product__image tw-w-48 tw-h-60 tw-mx-auto">
        <img
          class="tw-w-full tw-h-full tw-object-cover tw-object-center"
          :src="product.image"
          alt="image for product"
        />
      </div>
      <div class="product__content tw-space-y-4">
        <p class="product__title tw-text-gray-500">{{ product.title }}</p>
        <div class="tw-flex tw-items-center">
          <span
            class="
              product__price
              tw-font-semibold tw-text-gray-600 tw-flex-grow
            "
          >
            {{ product.price }} &#8378;
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
          >
            ADD BASKET
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
}
</script>

<style lang="scss" scoped></style>

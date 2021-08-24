<template>
  <div
    class="tw-border-t tw-border-b tw-border-gray-200 tw-max-w-screen-sm tw-p-4"
  >
    <div class="product__container tw-flex tw-space-x-6">
      <div class="product__image tw-w-40 tw-h-48 tw-flex-shrink-0">
        <img
          class="tw-w-full tw-h-full tw-object-cover tw-object-center"
          :src="product.image[0].url"
          alt="image for product"
        />
      </div>
      <div class="product__content tw-flex tw-flex-col tw-justify-between">
        <div>
          <p class="product__title tw-text-xl">{{ product.title }}</p>
          <p class="product__stock tw-text-sm tw-mt-2">
            <span class="tw-text-gray-500"> In Stock:</span> {{ product.stock }}
          </p>
        </div>

        <p class="product__price tw-font-semibold tw-text-gray-600 tw-text-xl">
          <span
            v-if="product.price.regular"
            class="
              tw-line-through tw-text-red-600 tw-text-xs tw-font-thin tw-mr-1
            "
            >{{ product.price.regular }}&#8378;</span
          >
          {{ product.price.special }}&#8378;
        </p>
      </div>
    </div>
    <div class="action tw-flex tw-items-center tw-py-1">
      <div
        class="tw-w-40 tw-flex tw-justify-center tw-space-x-4 tw-items-center"
      >
        <button
          class="
            action__decrease
            tw-border tw-border-gray-300 tw-rounded-full tw-w-6
          "
          :disabled="product.quantity === 1"
          @click="onDecrease(product.id)"
        >
          -
        </button>
        <input
          :value="product.quantity"
          class="tw-w-12 tw-border tw-border-gray-300 tw-rounded tw-text-center"
          type="number"
          min="1"
          oninput="validity.valid||(value='');"
          @change="onQuantityInput(product.id, $event)"
        />
        <!-- TODO check if have enough stock on increase and disable button -->
        <button
          class="
            action__increase
            tw-border tw-border-gray-300 tw-rounded-full tw-w-6
          "
          :disabled="product.quantity === product.stock"
          @click="onIncrease(product.id)"
        >
          +
        </button>
        <!-- TODO check if value 1 and disable button -->
      </div>
      <button
        class="tw-mx-auto tw-py-2 tw-px-4 tw-rounded-md"
        @click="onRemove(product.id)"
      >
        Remove
      </button>
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
  methods: {
    onIncrease(id) {
      this.$store.commit('cart/INC_QUANTITY', id)
    },
    onDecrease(id) {
      this.$store.commit('cart/DEC_QUANTITY', id)
    },
    onQuantityInput(id, e) {
      let quantity = Number(e.target.value)

      if (quantity > this.product.stock) {
        quantity = this.product.stock
        e.target.value = this.product.stock
      }

      this.$store.commit('cart/SET_QUANTITY', { id, quantity })
    },
    onRemove(id) {
      this.$store.commit('cart/REMOVE_FROM_CART', id)
    },
  },
}
</script>

<style scoped>
button:disabled {
  @apply tw-text-gray-400 tw-cursor-default;
}

button:hover:not(:disabled) {
  @apply tw-bg-gray-200;
}
</style>

<style lang="scss" scoped></style>

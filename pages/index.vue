<template>
  <div class="">
    <div class="tw-max-w-screen-xl tw-mx-auto">
      <div class="tw-container tw-mx-auto tw-p-4"></div>
      <div class="products tw-flex tw-flex-wrap tw-justify-center tw-px-6">
        <product
          v-for="(product, i) in filteredProducts"
          :key="i"
          :product="product"
        ></product>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          title: 'Lorem Ipsun Doler Siteats Amete Caste ',
          price: 130,
          image:
            'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          stock: 15,
        },
        {
          title: 'Lorem Ipsun Doler Siteats Amete Caste ',
          price: 130,
          image:
            'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80',
          stock: 0,
        },
        {
          title: 'Lorem Ipsun Doler Siteats Amete Caste ',
          price: 120,
          image:
            'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80',
          stock: 2,
        },
        {
          title: 'Lorem Ipsun Doler Siteats Amete Caste ',
          price: 120,
          image:
            'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80',
          stock: 2,
        },
        {
          title: 'Lorem Ipsun Doler Siteats Amete Caste ',
          price: 120,
          image:
            'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80',
          stock: 2,
        },
        {
          title: 'Lorem Ipsun Doler Siteats Amete Caste ',
          price: 120,
          image:
            'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80',
          stock: 2,
        },
        {
          title: 'Lorem Ipsun Doler Siteats Amete Caste ',
          price: 120,
          image:
            'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80',
          stock: 2,
        },
        {
          title: 'Lorem Ipsun Doler Siteats Amete Caste ',
          price: 120,
          image:
            'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80',
          stock: 2,
        },
      ],
    }
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => product.stock !== 0)
    },
  },
}
</script>

<template>
  <ul>
    <li v-for="product in products" v-bind:key="product.id">
     {{ product.title}} - {{ product.price}}
     <br>
     <button
     :disabled="!product.inventory"
     @click="addProductToCart(product)">
     Add to cart
     </button>
    </li>
  </ul>
</template>
<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Products',

    computed: mapState({
      products: state => state.products.all
    }),
    methods: mapActions('cart',[
      'addProductToCart'
    ]),
    created(){
      this.$store.dispatch('products/getAllProducts')
    }
  }
</script>
<style>
</style>

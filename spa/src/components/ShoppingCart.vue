<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="product in products" v-bind:key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total }} </p>
    <p><button :disabled="!product.length" @click="checkout(products)"></button></p>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'ShoppingCart',

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

<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList/>
    <hr>
  </div>
</template>

<script>
  import ProductList from './Products'

  export default {
    name: 'Shopping',
    components: { ProductList }
  }
</script>
<style>
</style>

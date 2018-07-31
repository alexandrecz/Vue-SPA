/**
 * Mocking client-server processing
 */

 const _products = [
   {"id": 1, "title": "ipad Mini", "price": 500.01, "inventory": 2},
   {"id": 2, "title": "iphone SE", "price": 250.01, "inventory": 12},
   {"id": 3, "title": "T-Shirt", "price": 19.99, "inventory": 5}
 ]

 export default {
   getProducts(cb){
     setTimeout(() =>cb(_products),100)
   },

   buyProducts(products, cb, errorCb) {
     setTimeout(() => {
       //simulate random checkout failure
       (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
       ? cb()
       :errorCb()
     }, 100)
   }
 }

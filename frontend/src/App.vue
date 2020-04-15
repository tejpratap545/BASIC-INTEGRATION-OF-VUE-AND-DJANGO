<template>
  <v-app>
    <products />

  <addproduct/>
  </v-app>
</template>

<script>
import products from "./components/products";
import addproduct from './components/addproduct'
 
export default {
  name: "App",

  components: {
    products,addproduct
 
 
  },

  data: () => ({
    //
  })
};
</script>

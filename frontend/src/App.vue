<template>
  <v-app> <login/>
    <products />

  <addproduct/>
 
  </v-app>
</template>

<script>
import products from "./components/products";
import addproduct from './components/addproduct';
import login from './components/login';
export default {
  name: "App",

  components: {
    products,addproduct,login
 
 
  },

  data: () => ({
    //
  })
};
</script>

<template>
  <v-app>
    <div>products</div>
    <ul>
      <li v-for="products in allProducts" :key="products.id">
        <p>
          {{ products.id }} {{ products.title }}
          {{ products.price | currency }}
          <button @click="deleteProduct(products.id)">click for delete</button>
        </p>
      </li>
    </ul>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getProducts", "deleteProduct"])
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.getProducts();
  },
  filters: {
    currency: function(value) {
      return " ₹" + parseFloat(value).toFixed(2);
    }
  }
};
</script>

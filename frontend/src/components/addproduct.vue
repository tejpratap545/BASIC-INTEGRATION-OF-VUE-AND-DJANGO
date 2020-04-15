<template>
  <v-app>
    <div class="addProuct">
      <form @submit.prevent="onSubmit">
        <input v-model="title" type="text" placeholder="add product " />
        <input v-model="price" type="text" placeholder="Add price " />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </v-app>
</template>
<script>
import { mapActions } from "vuex";
 

export default {
  data() {
    return {
      title: "",
      price: ""
    };
  },
  methods: {
    ...mapActions(["addProducts"]),
    onSubmit() {
      this.addProducts(
       { title: this.title, price: this.price }
      );
      this.title = "";
      this.price = "";
    }
  }
};
</script>

<style></style>

import axios from "axios";
 
const state = {
  products: []
};

const getters = {
  allProducts: state => state.products
};

const actions = {
  async getProducts({ commit }) {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/productsdetail/"
    );
    console.log("hello", response.data);
    commit("setProducts", response.data);
  },
  async addProducts({ commit }, product) {
    console.log("product is ", product);
   
    const responce = await axios.post(
      "http://127.0.0.1:8000/api/productsdetail/",
      product,
     
    );
    commit("addProducts", responce);
  },
  async deleteProduct({ commit }, id) {
      console.log(id)
    await axios.delete("http://127.0.0.1:8000/api/productsdetail/"+id);
    commit("deleteProduct", id);
  }
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
  addProducts: (state, product) => {
    return state.products.unshift(product);
  },
  deleteProduct: (state, id) =>
    (state.products = state.products.filter(product => product.id !== id))
};

export default {
  state,
  getters,
  actions,
  mutations
};

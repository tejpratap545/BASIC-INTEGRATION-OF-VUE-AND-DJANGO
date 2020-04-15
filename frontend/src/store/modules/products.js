import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
import Cookies from "js-cookie";
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
    const csrftoken = Cookies.get("csrftoken");
    const headers = {
      X_CSRFTOKEN: csrftoken
    };
    const responce = await axios.post(
      "http://127.0.0.1:8000/api/productsdetail/",
      product,
      { headers: headers }
    );
    commit("addProducts", responce);
  },
  async deleteProduct({ commit }, id) {
    await axios.delete("http://127.0.0.1:8000/api/productsdetail/${id}");
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

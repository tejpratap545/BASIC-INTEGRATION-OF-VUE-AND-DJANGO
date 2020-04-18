import axios from "axios";

const state = {
  jwt: localStorage.getItem("t"),
  endpoints: {
    obtainJWT: "http://127.0.0.1:8000/api/auth/obtain_token/",
    refreshJWT: "http://127.0.0.1:8000/api/auth/refresh_token/"
  }
};
const mutations = {
  updateToken(state, newToken) {
    localStorage.setItem("t", newToken);
    state.jwt = newToken;
  },
  removeToken(state) {
    localStorage.removeItem("t");
    state.jwt = null;
  }
};
const actions = {
  obtainToken(payload) {
    axios
      .post("http://127.0.0.1:8000/api/auth/obtain_token/", payload)
      .then(response => {
        this.commit("updateToken", response.data.token);
      })
      .catch(err => {
        console.log(err);
      });
  },
  refreshToken() {
    const payload = {
      token: this.state.jwt
    };

    axios
      .post(this.state.endpoints.refreshJWT, payload)
      .then(response => {
        this.commit("updateToken", response.data.token);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default {
  state,

  actions,
  mutations
};

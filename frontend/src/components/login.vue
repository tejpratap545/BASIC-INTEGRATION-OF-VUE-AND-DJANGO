<template>
  <v-app>
      <form  @submit.prevent="login" action="">
       <label for="username"> Username</label>   <input v-model="username" type="text"> <br>
       <label for="password">Password </label> <input v-model="password" type="text"> <br>
       <button   type="submit" > submit </button>
      </form>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import axios from "axios"
import qs from 'qs'
export default {
data() {
    return {
        username:"tejpratap",
        password:"1234",
        

    }
},
methods: {
    ...mapActions(['obtainToken']),
    login(){
         axios.post("http://127.0.0.1:8000/api/auth/obtain_token/",qs.stringify({'username':'tejpratap','passsword':'1234'}),{ headers:{'Content-Type': 'application/json; charset=utf-8'}})
         .then((response)=>{
             console.log(response.data.token)
         })
         .catch((err)=>
         {
             console.log(err)
         })
    },

},
}
</script>

<style>

</style>
<template>
  <div class="hello">
    <h1>Register</h1>
    <input type="username" name="username" v-model="username" placeholder="username">
    <br>
    <input type="password" name="password" v-model="password" placeholder="password">
    <br>
    <input type="email" name="email" v-model="email" placeholder="email">
    <br>
    <input type="city" name="city" v-model="city" placeholder="city">
    <br>
    <input type="firstName" name="firstName" v-model="fristName" placeholder="firstName">
    <br>
    <input type="lastName" name="lastName" v-model="lastName" placeholder="lastName">
    <br>
    <button @click="customer">Register</button>
  </div>
</template>

<script>
import CustomerRegister from '@/services/RegisterService.js'
export default {
  
  data () {
    return {
      username: '',
      password: '',
      email: '',
      city: '',
      firstName: '',
      lastName: '',
    }
  },
  methods: {
    customer(){
     CustomerRegister.customer({
        username: this.username,
        password: this.password,
        email: this.email,
        city: this.city,
        firstName: this.firstName,
        lastName: this.lastName
        

      })
      console.log('register button was clicked', this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

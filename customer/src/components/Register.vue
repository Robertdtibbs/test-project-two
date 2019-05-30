<template>
  <div class="hello">
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email">
    <br>
    <input type="password" name="password" v-model="password" placeholder="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import CustomerRegister from '@/services/RegisterService.js'
export default {
  
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register(){
     CustomerRegister.register({
        email: this.email,
        password: this.password
      })
      console.log('register button was clicked', this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

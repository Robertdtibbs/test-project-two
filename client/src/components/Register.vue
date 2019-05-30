<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" v-model="email" placeholder="email">
    <br>
    <input type="password" name="password" v-model="password" placeholder="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

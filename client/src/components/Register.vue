<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class ="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form
            name="mevn-music-form"
            autocomplete="off">
              <v-text-field
                    v-model="email"
                    label="Email"
                    required>
              </v-text-field>
              <v-text-field
               v-model="password"
               type="password"
               :counter="32"
               autocomplete="new-password"
               label="Password">
              </v-text-field>
          </form>
            <br/>
            <div class="error" v-html="error"></div>
            <br/>
            <v-btn dark class="cyan" @click="register">Register</v-btn>
          </div>
      </div>
  </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token) // Ini panggil setToken di store.js
        this.$store.dispatch('setUser', response.data.user) // Ini panggil setToken di store.js
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

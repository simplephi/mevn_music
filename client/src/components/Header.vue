<template>
  <v-toolbar fixed class="blue" dark>
    <v-toolbar-title class="mr-4">
      <span
      class="home"
       @click="pindahKe({name: 'root'})">
      MEVN MUSIC
    </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!--v-btn flat dark>Browse</v-btn-->
      <!-- FUngsi to itu untuk panggil name pada array routes di router-->
      <!-- <router-link to="register"></router-link-->

      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="pindahKe({name: 'login'})">
        Login
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark @click="pindahKe({name: 'register'})">
        Sign Up
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    pindahKe (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
  cursor: pointer;
}
.home:hover {
  color: #E9E;
}
</style>

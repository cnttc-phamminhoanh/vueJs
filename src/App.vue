<template>
  <div id="app">
    <!-- <TopMenu :msg="message"/> -->
    <!-- <User  @messageChanged="message=$event" /> -->

    <TopMenu />
    <router-view/>
  </div>
</template>

<script>

import TopMenu from './components/TopMenu.vue';
// import User from './components/user/User.vue';

export default {
  name: 'App',
  components: {
    TopMenu,
    // User,
  },
  // data() {
  //   return {
  //     message: '',
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

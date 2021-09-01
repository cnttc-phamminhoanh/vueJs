<template>
  <div id="app">
    <!-- <TopMenu :msg="message"/> -->
    <!-- <User  @messageChanged="message=$event" /> -->

    <TopMenu />
    <!-- <LayoutCard /> -->
    <router-view/>
  </div>
</template>

<script>

import TopMenu from './components/TopMenu.vue';
// import LayoutCard from './components/LayoutCard.vue';

// import User from './components/user/User.vue';

export default {
  name: 'App',
  components: {
    TopMenu,
    // LayoutCard,
    // User,
  },
  // data() {
  //   return {
  //     message: '',
  //   }
  // }
  data() {
    return {
      
    }
  },  
  // computed: {
  //   filterName: function() {
  //     return this.employees.filter((emp) => { 
  //       return emp.name.toLowerCase().indexOf(this.textSearch.toLowerCase()) > -1 ;
  //     });
  //   },     
  // },
  // beforeMount() {
  //   this.$root.$on("searchChanged", (search) => {
  //     this.textSearch = search;
  //   });
  // },
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

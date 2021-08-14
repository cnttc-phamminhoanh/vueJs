<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="button">
      <button v-on:click="isShow=!isShow">
        <span v-if="isShow">Hide</span>
        <span v-else>Show</span>
      </button>
    </div>
    <HelloWorld v-if="isShow" :msg="welcome" :employees="employees" :propertyEmployee="Object.keys(employees[0])"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      isShow: false,
      welcome: 'Welcome to Employees Table',
      employees: [
        {
          id: 3120417016,
          name: 'Phạm Minh Oanh',
          address:'K130/2 Ông Ích Đường, Đà Nẵng'
        },
        {
          id: 2320370573,
          name: 'Hoàng Thị Ái Hoài',
          address:'K69/16 Lý Thái Tổ, Đà Nẵng'
        },
        {
          id: 2063631942,
          name: 'Phạm Tuấn Dũng',
          address:'Thị Trấn Hương An, Quảng Nam'
        },
        {
          id: 2063634586,
          name: 'Trần Duy Chương',
          address:'15 Đỗ Quang, Đà Nẵng'
        },
        {
          id: 2063637894,
          name: 'Lê Nho Thắng ',
          address:'k15/12 Phú Lộc 4, Đà Nẵng'
        }
      ],
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button button{
  margin: 10px auto;
  width: 80px;
  padding: 5px 5px;
  border: solid 2px #54b883;
  border-radius: 5px;
}
</style>

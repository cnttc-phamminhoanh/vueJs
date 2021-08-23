<template>
  <div class="table">
    <h1>{{ msg }}</h1>
    <div class="employee-table">
        <b-table striped hover :items="employees"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    msg: String,
    employees: Array,
  },
  // data() {
  //   return {
  //     message: '',
  //   }
  // },
  // methods: {
  //   changeMessage(event) {
  //     this.message = event.target.value;
  //     this.$emit('messageChanged', this.message)
  //   }
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .employee-table {
    width: 80%; 
    margin: 40px auto; 
  }
</style>
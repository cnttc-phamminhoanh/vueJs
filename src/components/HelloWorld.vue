<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="employee-table">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">numerical order</th>
            <th scope="col" v-for="(item, index) in propertyEmployee" :key="index"> {{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(employee, index) in employees" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    employees: Array,
    propertyEmployee: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .employee-table {
    width: 80%; 
    margin: 40px auto; 
  }
</style>

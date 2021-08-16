<template>
    <div class="home">
        <h3>This Is Home Page</h3>
        
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

import HelloWorld from './HelloWorld.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    name: 'Home',
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
<style scope>
    .button button{
        margin: 10px auto;
        width: 80px;
        padding: 5px 5px;
        border: solid 2px #54b883;
        border-radius: 5px;
    }
</style>
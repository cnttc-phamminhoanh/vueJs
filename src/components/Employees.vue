<template>
    <div class="employees">
       
        
        <div class="button">
            <button v-on:click="isShow=!isShow">
                <span v-if="isShow">Hide</span>
                <span v-else>Show</span>
            </button>
        </div>

        <Table v-if="isShow" :msg="welcome" :employees="employees" />
    </div>
</template>
<script>

import Table from './Table.vue'

export default {
    name: 'Employees',
    components: {
        Table
    },
    data() {
        return {
            // message: 'This is a great message',
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
                name: 'Ricky Start',
                address:'Thị Trấn Hương An, Quảng Nam'
                },
                {
                id: 2063634586,
                name: 'Yuno Big Boy',
                address:'15 Đỗ Quang, Đà Nẵng'
                },
                {
                id: 2063637894,
                name: 'MCK',
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
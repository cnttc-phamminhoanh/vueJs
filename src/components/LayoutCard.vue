<template>
    <div class="layoutCard">
        <b-container class="bv-example-row">
            <b-row v-for="(n, i) in Math.ceil(employees.length/3)" :key="i">
                <b-col v-for="(item, index) in employees.slice((n-1)*perRow, n*perRow)" :key="index">
                    <b-card
                        :title="item.name"
                        img-src="https://picsum.photos/200/100/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 17rem;"
                        class="mb-2">
                        <b-card-text>
                            {{ item.address }}
                        </b-card-text>

                        <b-button href="#" @click="showDetail(item)" variant="success">Go somewhere</b-button>
                            
                    </b-card>
                </b-col>
            </b-row>
            <PopupDetail />
        </b-container>      
    </div>
</template>

<script>

import PopupDetail from './PopupDetail.vue';

export default {
    name: 'LayoutCard',
    components: {
        PopupDetail,
    },
    props: {
        employees: Array,
        perRow: Number,
    },
    methods: {
        showDetail: function(data) {
            this.$root.$emit("clickPopUp",data);
        }
    },
}
</script>

<style scope>
    .layoutCard {
        margin: 60px auto;
        width: 80%;
    }
    .col article h4 {
        font-size: 20px;
    }
    .col article {
        border-color: #198754;
        font-size: 15px;
    }
    .col article .card-body a {
        background-color: #198754;
        font-size: 15px;
    }
</style>
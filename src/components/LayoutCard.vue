<template>

    <div class="layoutCard">
        <b-container class="bv-example-row">

            <template v-if="textSearch==''">
                <b-row v-for="(n, i) in Math.ceil(employees.length/3)" :key="i">
                    <b-col v-for="(item, index) in employees.slice((n-1)*perRow, n*perRow)" :key="index">
                        <b-card
                            :title="item.name"
                            img-src="https://picsum.photos/300/200/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2">
                            <b-card-text>
                                {{ item.address }}
                            </b-card-text>

                            <b-button href="#" variant="success">Go somewhere</b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </template>

            <template v-else>
                <b-row v-for="(n, i) in Math.ceil(filterName.length/3)" :key="i">
                    <b-col v-for="(item, index) in filterName.slice((n-1)*perRow, n*perRow)" :key="index">
                        <b-card
                            :title="item.name"
                            img-src="https://picsum.photos/300/200/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2">
                            <b-card-text>
                                {{ item.address }}
                            </b-card-text>

                            <b-button href="#" variant="success">Go somewhere</b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </template>

        </b-container>
    </div>
</template>

<script>
export default {
    name: 'LayoutCard',
    data() {
        return {
            textSearch: '',
            employees: [
                {
                    id: 3120417016,
                    name: 'Phạm Minh Oanh',
                    address:'K130/2 Ông Ích Đường, Đà Nẵng'
                },
                {
                    id: 3120417016,
                    name: 'Phạm Minh Oanh',
                    address:'K130/2 Ông Ích Đường, Đà Nẵng'
                },
                {
                    id: 3120417016,
                    name: 'Phạm Minh Tuấn',
                    address:'K130/2 Ông Ích Đường, Đà Nẵng'
                },
                {
                    id: 3120417016,
                    name: 'Phạm Minh Chính',
                    address:'K130/2 Ông Ích Đường, Đà Nẵng'
                },
                {
                    id: 3120417016,
                    name: 'Sử Minh Thành',
                    address:'K130/2 Ông Ích Đường, Đà Nẵng'
                },
                {
                    id: 3120417016,
                    name: 'Nguyễn Nhật Anh',
                    address:'K130/2 Ông Ích Đường, Đà Nẵng'
                },
            ],
            perRow: 3,
        }
    },
    beforeMount() {
        this.$root.$on("searchChanged", (search) => {
            this.textSearch = search;
        })
    },
    computed: {
        filterName: function() {
            return this.employees.filter((emp) => { 
                return emp.name.toLowerCase().match(this.textSearch.toLowerCase());
            });
        },
    },
}

</script>

<style scope>
    .layoutCard {
        margin: 60px auto;
        width: 60%;
    }
</style>
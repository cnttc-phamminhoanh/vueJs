<template>
    <div class="overflow-auto">
        <b-table striped hover
            id="my-table"
            :items="items"
            :per-page="perPage"
            :current-page="currentPage"
            small
        ></b-table>

        <div class="numberPage">
            <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
            ></b-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Table',
    data () {
        return {
            currentPage: 1,
            perPage: 4,
        }
    },
    props: {
        items: Array,
    },
    computed: {
      rows() {
        return this.items.length;
      }
    },
}
</script>
<style scope>
    .numberPage {
        margin: 50px auto 0 auto;
        width: 232px
    }
</style>
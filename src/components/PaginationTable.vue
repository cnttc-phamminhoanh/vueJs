<template>
    <div class="paginationTable">
        <div class="overflow-auto">
            
            <p class="mt-3">{{ sonHotTable }}</p>

            <b-table
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
    </div>
</template>
<script>
export default {
    name: 'PaginationTable',
    props: {
        sonHotTable: String,
        perPage: Number,
        currentPage: Number,
        items: Array,

    },
    data() {
      return {
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
    
}
</script>
<style scoped>
    .paginationTable { 
      
    }
    .numberPage {
        margin: 50px auto 0 auto;
        width: 232px
    }
</style>
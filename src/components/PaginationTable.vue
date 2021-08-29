<template>
    <div class="paginationTable">
        
        <Table :items="items" />
                  
    </div>
</template>
<script>

import Table from './Table.vue';

export default {
    name: 'PaginationTable',
    components: {
        Table,
    },
    props: {
        items: Array,

    },
}
</script>
<style scoped>
    .paginationTable { 
        margin: 60px auto;
    }
</style>
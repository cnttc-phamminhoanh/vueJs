<template>
    <div class="popupDetail">
        <b-modal ref="my-modal" hide-footer title="Detail Information">
            <div class="d-block text-center">
                <h3>{{ dataDetail.name }}</h3>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal"> {{ dataDetail.id}} </b-button>
            <b-button class="mt-3" variant="outline-warning" block @click="toggleModal"> {{ dataDetail.address}} </b-button>
        </b-modal>
    </div>

</template>
<script>
export default {
    name: 'PopupDetail',
    data() {
        return {
            dataDetail: {},
        }  
    },
    methods: {
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        toggleModal() {
            this.$refs['my-modal'].toggle('#toggle-btn')
        }
    },
    beforeMount() {
        this.$root.$on("clickPopUp", (data) => {
            this.dataDetail = data;
            this.$refs['my-modal'].show()
            // console.log(data);
        })
    },
}
</script>
<style scope>
    
</style>
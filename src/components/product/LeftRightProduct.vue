<template>
    <div class="leftrightproduct">
        <div class="mt-4">
            
            <b-card border-variant="success" v-bind:img-src="products[0].img" img-alt="Card image" img-left class="mb-3">
                <b-card-text>
                    {{ products[0].content }}
                </b-card-text>
            </b-card>

            <b-card border-variant="success" v-bind:img-src="products[1].img" img-alt="Card image" img-right>
                <b-card-text>
                   {{ products[1].content }}
                </b-card-text>
            </b-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'LeftRightProduct',
    props: {
        products: Array,
    }
}
</script>
<style scoped>
    
</style>
<template>
    <div class="products">
        <LeftRightProduct :products="products" /> 
    </div>
</template>
<script>
import LeftRightProduct from './LeftRightProduct.vue';
export default {
    name: 'Products',
    components: {
        LeftRightProduct,
    },
    data() {
        return {
            products: [
                {
                    img: 'https://placekitten.com/300/300',
                    content: 'Choose an appropriate box. Make sure your cat has plenty of room to move around and can get in and out of the litter box easily.',
                },
                {
                    img: 'https://placekitten.com/300/300',
                    content: 'Give him the pick of the litter. Experiment by offering a choice of litters in side-by-side boxes to see which type your cat prefers.',
                },
            ]
        }
    }
}
</script>
<style scoped>
    .products {
        width: 70%; 
        margin: 60px auto; 
    }
</style>
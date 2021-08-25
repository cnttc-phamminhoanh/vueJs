<template>
    <div class="products">
        <LeftRightProduct :products="products" /> 
        <PaginationTable :sonHotTable="sonHotTable" :perPage="perPage" :currentPage="currentPage" :items="items" />
    </div>
</template>
<script>
import LeftRightProduct from './LeftRightProduct.vue';
import PaginationTable from '../PaginationTable.vue';

export default {
    name: 'Products',
    components: {
        LeftRightProduct,
        PaginationTable,
    },
    data() {
        return {
            products: [
                {
                    img: 'https://placekitten.com/600/300',
                    content: 'Choose an appropriate box. Make sure your cat has plenty of room to move around and can get in and out of the litter box easily.',
                },
                {
                    img: 'https://placekitten.com/300/300',
                    content: 'Give him the pick of the litter. Experiment by offering a choice of litters in side-by-side boxes to see which type your cat prefers.',
                },
            ],
            sonHotTable: 'Son Hot !',  
            perPage: 4,
            currentPage: 1,
            items: [
                { id: 1, name: 'MAC Ruby Woo 707', brand: 'MAC Cosmetics', price: '480.000VNĐ' },
                { id: 2, name: 'YSL Vinyl Cream Lip Stain 416', brand: 'Yves Saint Laurent (YSL)', price: '860.000 VNĐ' },
                { id: 3, name: 'Chanel Rouge Coco Flash 106', brand: 'Chanel', price: '900.000VNĐ' },
                { id: 4, name: 'MAC Chili 602', brand: 'MAC Cosmetics', price: '480.000VNĐ' },
                { id: 5, name: 'Dior addict lip glow 004', brand: 'Christian Dior S.A ( Dior)', price: '750.000VNĐ' },
                { id: 6, name: 'Giorgio Armani Lip Maestro Liquid Lipstick - 200 Terra', brand: 'Giorgio Armani', price: '880.000VNĐ' },
                { id: 7, name: 'Giorgio Armani Lip Maestro Liquid Lipstick - 405 Sultan', brand: 'Giorgio Armani', price: '880.000VNĐ' },
                { id: 8, name: 'Shu Uemura Rouge Unlimited Supreme Matte - M BR 785', brand: 'Shu Uemura', price: '700.000VNĐ' },
                { id: 9, name: 'Dior Rouge 999 Matte', brand: 'Christian Dior S.A ( Dior)', price: '800.000 VNĐ' },
                { id: 10, name: '3CE Lily Maymac Holy Rose màu 118', brand: '3CE', price: '350.000VNĐ' },
            ],
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
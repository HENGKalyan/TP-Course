<template>
  <div class="container">
    <div class="titleFeatured">
      <h2 class="menu-title">Featured Categories</h2>
      <Menu :menuItems="store.groups" />
    </div>
    <div class="category-ls">
      <Category v-for="(category, index) in categories" :key="index" :image="category.image" :name="category.name"
        :product-count="category.productCount" :color="category.color" />
    </div>
    <div class="promotionProduct">
      <Promotion v-for="(promotion, index1) in promotions" :key="index1" :image="promotion.image"
        :title="promotion.title" :color="promotion.color" />
    </div>
    <div class="titleFeature productContainer">
      <h2 class="menu-title">Popular Products</h2>
      <Menu :menuItems="store.groups" />
    </div>
    <product class="productContainer"/>
  </div>
</template>

<script>

import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';
import product from './components/Product.vue';
import Menu from './components/Menu.vue';
import { useProductStore } from './stores/product_store';
import { mapState } from 'pinia';


export default {
  name: 'App',
  components: {
    Category,
    Promotion,
    Menu,
    product
  },
  setup() {
    const store = useProductStore();
    return {
      store
    };
  },
  async mounted() {
    await this.store.fetchCategories();
    await this.store.fetchPromotions();
    await this.store.fetchProducts();
    await this.store.fetchGroups();
    },
    computed:{
      ...mapState(useProductStore,{
        categories: 'categories',
        promotions: 'promotions',
        product: 'product',
        groups: 'groups'
      })
    }
};
</script>

<style>
.container {
  
  width: 1200px;
  height: 2000px;
  padding: 10px;
  background-color: white;

}

.category-ls {
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  height: 200px;
  padding: 10px;
  
}
.promotionProduct {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  padding: 10px;
  margin-top: 0px;
}
.titleFeatured{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px; 
}
.productContainer{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px; 
  position: relative;
  bottom: 250px;
  
}

.menu-title {
  
  font-size: 26px;
  font-weight: 600;
  color: #333;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  padding-top: 20px;
  

}
</style>
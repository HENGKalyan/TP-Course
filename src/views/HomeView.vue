<template>
    <div class="container">
      <menu-item/>
      <ShowCase/>
      <div class="titleFeatured">
        <h2 class="menu-title">Featured Categories</h2>
        <Menu :menuItems="store.groups" @menuItemSelected="handleCategoryGroupClick" />
      </div>
      <div class="category-ls">
        <Category v-for="(category, index) in categories" :key="index" :image="category.image" :name="category.name"
          :product-count="category.productCount" :color="category.color" />
      </div>
      <div class="promotionProduct">
        <Promotion v-for="(promotion, index1) in promotions" :key="index1" :image="promotion.image"
          :title="promotion.title" :color="promotion.color" />
      </div>
      <div class="productContainer">
        <h2 class="menu-title">Popular Products</h2>
        <Menu :menuItems="store.groups"  @menuItemSelected="handleProductGroupClick"/>
      </div>
      <div class="product-grid">
        <product v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
    </div>
  </template>
  
  <script>
  import Category from '../components/Category.vue';
  import Promotion from '../components/Promotion.vue';
  import product from '../components/Product.vue';
  import Menu from '../components/Menu.vue';
  import ShowCase from '@/components/ShowCase.vue';
  import { useProductStore } from '../stores/product_store';
  import { mapState } from 'pinia';
  import { computed, ref } from 'vue';
  import MenuItem from '@/views/MenuItem.vue';
  
  
  export default {
    name: 'App',
    components: {
      Category,
      Promotion,
      Menu,
      product,
      ShowCase,
      MenuItem,
    },

    setup() {
      const store = useProductStore();
      const selectedCategoryGroup = ref(null);
      const selectedProductGroup = ref(null);

      const resetProductSelection = () => {
      selectedProductGroup.value = null;
    };
      // Handle group click and set selected group
      const handleCategoryGroupClick = (group) => {
        selectedCategoryGroup.value = selectedCategoryGroup.value === group ? null : group;
      };
  
      const handleProductGroupClick = (group) => {
        selectedProductGroup.value = selectedProductGroup.value === group ? null : group;
      };
     // Filter categories by selected group
     const filteredCategories = computed(() =>
        selectedCategoryGroup.value
          ? store.categories.filter((category) => category.group === selectedCategoryGroup.value)
          : store.categories
      );
  
      // Filter products by selected group
      const filteredProducts = computed(() =>
        selectedProductGroup.value
          ? store.products.filter((product) => product.group === selectedProductGroup.value)
          : store.products,
          console.log(store.products)
      );
  
      return {
        store,
        selectedCategoryGroup,
        selectedProductGroup,
        handleCategoryGroupClick,
        handleProductGroupClick,
        filteredCategories,
        filteredProducts,
        resetProductSelection,
      };
    },
    async mounted() {
      await this.store.fetchCategories();
      await this.store.fetchPromotions();
      await this.store.fetchProducts();
      await this.store.fetchGroups();
    },
    computed: {
      ...mapState(useProductStore, {
        categories: 'categories',
        promotions: 'promotions',
        products: 'products',
        groups: 'groups',
      }),
    },
  };
  </script>
  
  <style>
  .container {
    
    width: 1200px;
    height: 2000px;
    padding: 10px;
    background-color: white;
    margin: 0;
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
    height: 225px;
    padding: 10px;
    
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
    margin-bottom: 10px;
    margin-top: 30px;
 
    
  }

  .menu-title {
    font-size: 26px;
    font-weight: 600;
    color: #333;
   
    
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust 250px as needed */
    gap: 10px;

    
    
  }
  
  </style>
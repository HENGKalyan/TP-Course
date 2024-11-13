<template>
  <div class="container">
    <div class="row1">
      <Category v-for="(category, index) in categories" :key="index" :image="category.image" :title="category.title" :productCount="category.productCount" :color="category.color" />
    </div>
    <div class="row2">
      <Promotion v-for="(promotion, index) in promotions" :key="index" :image="promotion.image" :color="promotion.color" :title="promotion.title" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Category from './components/Category.vue';
import Promotion from './components/Promotion.vue';
import { useProductStore } from './stores/productStore';

export default {
  name: 'App',

  setup() {
    const productStore = useProductStore();
    productStore.initializeData();

    return { productStore };
  },
  
  mounted() {
    axios.get('http://localhost:3000/api/categories')
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        this.error = 'Error fetching categories: ' + (error.response ? error.response.data : error.message); // Set error message
      });

    axios.get('http://localhost:3000/api/promotions')
      .then(response => {
        this.promotions = response.data;
      })
      .catch(error => {
        this.error = 'Error fetching promotions: ' + (error.response ? error.response.data : error.message); // Set error message
      });
  },
};
  </script>

  <style>
  .container{
    width: 75rem;
    height: 35rem;
    background-color: white;
    padding: 1rem;
  }
  .row1{
    width: 100%;
    height: 31%;
    padding: 7px;
    display: flex;
    justify-content: space-between;
  }
  .row2{
    width: 100%;
    height: 69%;
    /* background-color: rgb(241, 246, 173); */
    display: flex;
    justify-content: space-between;
  }
  </style>

// src/stores/productStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: []
  }),

  actions: {
    async loadGroups() {
      try {
        const response = await axios.get('http://localhost:3000/api/groups');
        this.groups = response.data;
      } catch (error) {
        console.error("Failed to load groups:", error);
      }
    },

    async loadPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.promotions = response.data;
      } catch (error) {
        console.error("Failed to load promotions:", error);
      }
    },

    async loadCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.categories = response.data;
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    },

    async loadProducts() {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        this.products = response.data;
      } catch (error) {
        console.error("Failed to load products:", error);
      }
    },

    async initializeData() {
      await Promise.all([this.loadGroups(), this.loadPromotions(), this.loadCategories(), this.loadProducts()]);
    }
  }
});
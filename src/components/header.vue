<template>
    <header class="header">
      <div class="header1">
        <router-link to="/page1">Header</router-link>
      </div>
      <div class="page">
        <router-link to="/page1" class="page-link" :class="{ active: isPageActive('/page1') }">Page 1</router-link>
        <router-link to="/page2" class="page-link" :class="{ active: isPageActive('/page2') }">Page 2</router-link>
        <router-link to="/page3" class="page-link" :class="{ active: isPageActive('/page3') }">Page 3</router-link>
      </div>
    </header>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
  
      const isPageActive = (path) => route.path === path;
  
      return { isPageActive };
    },
  };
  </script>
  
  <style scoped>
  .header1 {
    margin-right: 60%;
  }
  
  .header {
    padding: 10px;
    border-bottom: 1px solid #0e0303;
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between; /* Distribute space between header and pages */
  }
  
  .page-link {
    padding: 5px 10px;
    text-decoration: none;
    color: #333; /* Default color */
    margin-left: 10px;
  }
  
  .page-link.active {
    color: red; /* Active color */
  }
  
  /* Responsive adjustments for smaller screens */
  @media (max-width: 768px) {
    .header {
      flex-direction: column; /* Stack header elements vertically */
    }
    .page {
      flex-direction: column; /* Stack page links vertically */
    }
    .page-link {
      margin-bottom: 5px;
    }
  }
  </style>
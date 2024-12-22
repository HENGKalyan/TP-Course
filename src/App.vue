<template>
  <div class="app" id="app">
    <Header />
    <div class="layout">
      <Menu :currentPage="currentPage" />
      <div class="content">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Menu from './components/menu.vue';
import Footer from './components/footer.vue';

export default {
  components: { Header, Menu, Footer },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    setPage(page) {
      this.currentPage = page;
    },
  },
  watch: {
    $route(to) {
      const pageMatch = to.path.match(/\/page(\d+)/);
      if (pageMatch) {
        this.currentPage = Number(pageMatch[1]);
      }
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.layout {
  display: flex;
  flex: 1;
}

.content {
  flex: 1;
  padding: 20px;
  border-left: 1px solid #ddd;
}
</style>

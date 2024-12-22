<template>
  <aside class="menu">
    <ul>
      <li>Menu</li>
      <li><router-link :to="`/page${currentPage}/section1`">Section 1</router-link></li>
      <li><router-link :to="`/page${currentPage}/section2`">Section 2</router-link></li>
      <li><router-link :to="`/page${currentPage}/section3`">Section 3</router-link></li>
      <li><router-link :to="`/page${currentPage}/section4`">Section 4</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: ['currentPage'],
};
</script>

<style scoped>
.menu {
  width: 200px;
  padding: 10px;
  background-color: #f9f9f9;
  border-right: 1px solid #ddd;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu li {
  margin-bottom: 10px;
}

.menu a {
  text-decoration: none;
  color: black;
}
</style>

<template>
  <div>
    <header>
      <nav>
        <button @click="setPage(1)">Page 1</button>
        <button @click="setPage(2)">Page 2</button>
        <button @click="setPage(3)">Page 3</button>
        <button @click="setPage(4)">Page 4</button>
      </nav>
    </header>
    
    <aside>
      <button @click="setSection(1)">Section 1</button>
      <button @click="setSection(2)">Section 2</button>
      <button @click="setSection(3)">Section 3</button>
      <button @click="setSection(4)">Section 4</button>
    </aside>
    
    <main>
      <h1>Welcome to Page {{ currentPage }}</h1>
      <p>This is Section {{ currentSection }} of Page {{ currentPage }}</p>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      currentSection: 1,
    };
  },
  methods: {
    setPage(page) {
      this.currentPage = page;
    },
    setSection(section) {
      this.currentSection = section;
    }
  }
}
</script>

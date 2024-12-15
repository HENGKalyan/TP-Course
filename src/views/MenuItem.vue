<template>
    <div class="Bcontainer">
        <div class="navbar">
            <img  src="../image/icons/logo.png" alt="Logo icon"> <SearchBox class="searchbar" />
            <div class="setting">
                <div class="content">
                    <img src="../image/icons/acc.png" alt="Account Icon">
                    <p>Account</p>
                </div>
                <div class="content">
                    <img src="../image/icons/compare.png" alt="Compare Icon">
                    <p>Compare</p>
                </div>
                <div class="content">
                    <img src="../image/icons/wishlist.png" alt="Wishlist Icon">
                    <p>Wishlist</p>
                </div>
                <div class="content">
                    <img src="../image/icons/carts.png" alt="Cart Icon">
                    <p>Cart</p>
                </div>
            </div>
        </div>
        <hr>
        <nav class="contain">
            <div class="category-dropdown">
                <img src="../image/icons/browse.png" alt="Dropdown Icon">
                <select v-model="categorySelected" id="browse" @change="goToCategory">
                    <option disabled value="">Browse all the categories</option>
                    <option value="all">All Categories</option>
                    <option value="food">Food</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="meat-seafood">Meat & Seafood</option>
                    <option value="bakery">Bakery</option>
                </select>
            </div>
            <!-- Category Dropdown -->

            <ul class="nav-links">
                <li>
                    <router-link :to="{ name: 'categoryview', params: { id: 'hot' } }">
                        <img src="../image/icons/flame.png" alt="Hot Deals Icon">Hot Deals
                    </router-link>
                </li>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'categoryview', params: { id: 'food' } }">
                        Food
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'categoryview', params: { id: 'vegetables' } }">
                        Vegetables
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'categoryview', params: { id: 'drink' } }">
                        Drink
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'categoryview', params: { id: 'cookies' } }">
                        Cookies
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'categoryview', params: { id: 'meat-seafood' } }">
                        Meat & Seafood
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'categoryview', params: { id: 'bakery' } }">
                        Bakery
                    </router-link>
                </li>
            </ul>
        </nav>
        <hr>
    </div>
</template>

<script>
import SearchBox from "../components/SearchBox.vue";

export default {
    name: "MenuItem",
    components: { SearchBox },
    data() {
        return {
            categorySelected: "", // Selected category from dropdown
        };
    },
    methods: {
    goToCategory() {
        if (this.categorySelected) {
            console.log(`Navigating to category: ${this.categorySelected}`); // Debugging log
            this.$router.push({ name: "categoryview", params: { id: this.categorySelected } });
        } else {
            console.error("No category selected");
        }
    },
},

};
</script>

<style>
.Bcontainer{
    width: 100%;
    height: 200px;
}

p {
    font-size: 18px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
hr {
    border-top: 2px solid rgb(177, 177, 177);
    margin-top: 5px;
}
.contain {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    font-size: 18px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    width: 100%;
    height: 80px;
}

.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    font-size: 18px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    width: 100%;
    height: 50px;
}

.navbar img {
    width: 10%;
    display: flex;
    justify-content: start;
}

.searchbar {
    position: relative;
    margin-left: 10px;
}

.setting {
    display: flex;
    flex-direction: row;
    gap: 30px;
}

.setting img {
    width: 100%;
    height: 50%;
}

.content {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
}

.nav-links li {
    display: flex;
    align-items: center;
    gap: 8px;
}

.nav-links a {
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-size: large;
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    white-space: nowrap;
}

.nav-links a:hover {
    text-decoration: underline;
    background: rgb(63, 201, 148);
    border-radius: 10px;
}

.nav-links img {
    width: 20%;
    height: 20%;
    margin-right: 10px;
}

.category-dropdown {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 230px;
    font-size: 1rem;
    border: 1px solid #ffffff;
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    background: rgb(28, 206, 144);
    display: flex;
    flex-direction: row;
    align-items: center;
}

.category-dropdown:hover {
    background: rgb(57, 190, 139);
}

.category-dropdown img {
    width: 60%;
    height: 60%;
}
</style>

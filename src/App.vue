<template>
    <div class="container">
      <div class="row1">
        <Category v-for="(products, index) in products"
        :key="index"
        :imgSrc="products.img"
        :title="products.title"
        :items="products.item"
        :bgColor="products.bgColor"
        />
      </div>
      <div class="row2">
        <Promotion v-for="(Promotions,second) in Promotions"
        :key="second"
        :bgImage="Promotions.bgImage"
        :bgColorSecond="Promotions.bgColorSecond"
        :TittlePromotion="Promotions.TittlePromotion"
        />
      </div>
    </div>
  </template>
  <script>
  import Category from './components/Category.vue';
  import Promotion from './components/Promotion.vue';

  export default{
    name: 'App',
    components: {
      Category,
      Promotion,
    },
    data(){
      return{
        products:[
          {img:'src/image/category/burger.png', title:"Cake & Mile",item:14+"items",bgColor:'#F2FCE4'},
          {img:'src/image/category/peach.png', title:"Peach",item:17+"items", bgColor:'#FFFCEB'},
          {img:'src/image/category/kiwi.png', title:"Oganic Kiwi",item:68+"items", bgColor:'#ECFFEC'},
          {img:'src/image/category/apple.png', title:"Red Apple",item:34+"items", bgColor:'#FEEFEA'},
          {img:'src/image/category/soy.png', title:"Snack",item:25+"items", bgColor:'#FFF3EB'},
          {img:'src/image/category/grap.png', title:"Black plum",item:10+"items", bgColor:'#FFF3FF'},
          {img:'src/image/category/gabbage.png', title:"Vegetable",item:65+"items", bgColor:'#F2FCE4'},
          {img:'src/image/category/headset.png', title:"Headphone",item:33+"items", bgColor:'#FFFCEB'},
          {img:'src/image/category/cookies.png', title:"Cake & Mile",item:54+"items", bgColor:'#F2FCE4'},
          {img:'src/image/category/orange.png', title:"Orange",item:63+"items", bgColor:'#FFF3FF'},
        ],
        Promotions:[
          {bgImage:'src/image/promotion/onion.png',bgColorSecond:'#F0E8D5',TittlePromotion:"Everyday Fresh & Clean with Our Products"},
          {bgImage:'src/image/promotion/milk.png',bgColorSecond:'#F3E8E8',TittlePromotion:"Make your Breakfast Healthy and Easy"},
          {bgImage:'src/image/promotion/vegetable.png',bgColorSecond:'#E7EAF3',TittlePromotion:"The best Organic Products Online"},
        ],

        
      //TP02
      Category: [], // Data from API
      promotion: [], // Data from API
      loading: true, // Flag to indicate loading state
      error: false, // Flag to indicate an error
      };
    },
    computed: {
    displayedProducts() {
      return this.loading ? this.products : this.category.length > 0 ? this.category : this.products;
    },
    displayedPromotions() {
      return this.loading ? this.promotions : this.promotion.length > 0 ? this.promotion : this.promotions;
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      Promise.all([
        axios.get('http://localhost:3000/api/categories'),
        axios.get('http://localhost:3000/api/promotions'),
      ])
        .then(([categoriesResponse, promotionsResponse]) => {
          this.category = categoriesResponse.data;
          this.promotion = promotionsResponse.data;
          this.loading = false;
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          this.error = true;
          this.loading = false; // Set loading to false even on error
        });
    },
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

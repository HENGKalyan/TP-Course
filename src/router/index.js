import { createRouter, createWebHistory } from 'vue-router';
import Page1 from '../components/Page1.vue';
import Page2 from '../components/Page2.vue';
import Page3 from '../components/Page3.vue';

const routes = [
  {
    path: '/page1',
    component: Page1,
    children: [
      { path: 'section1', name: 'page1-section1', component: () => import('../components/page1Section1.vue') },
      { path: 'section2', name: 'page1-section2', component: () => import('../components/page1Section2.vue') },
      { path: 'section3', name: 'page1-section3', component: () => import('../components/page1Section3.vue') },
      { path: 'section4', name: 'page1-section4', component: () => import('../components/page1Section4.vue') },
    
    ],
  },
  { 
    path: '/page2', 
    component: Page2, 
    children: [ 
      { path: 'section1', name: 'page2-section1', component: () => import('../components/page2Section1.vue') },
      { path: 'section2', name: 'page2-section2', component: () => import('../components/page2Section2.vue') },
      { path: 'section3', name: 'page2-section3', component: () => import('../components/page2Section3.vue') },
      { path: 'section4', name: 'page2-section4', component: () => import('../components/page2Section4.vue') },
    
    ], 
  },

  { 
    path: '/page3', 
    component: Page3, 
    children: [ 
      { path: 'section1', name: 'page3-section1', component: () => import('../components/page3Section1.vue') },
      { path: 'section2', name: 'page3-section2', component: () => import('../components/page3Section2.vue') },
      { path: 'section3', name: 'page3-section3', component: () => import('../components/page3Section3.vue') },
      { path: 'section4', name: 'page3-section4', component: () => import('../components/page3Section4.vue') },
    
    ], 
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
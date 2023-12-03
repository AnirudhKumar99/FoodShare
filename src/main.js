import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



createApp(App).use(router).mount('#app')


// import Vue from 'vue';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faHome);

// CreateComponentPublicInstance('font-awesome-icon', FontAwesomeIcon);

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import toastr from 'toastr';
import 'toastr/build/toastr.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBars);
library.add(faCirclePlus);
library.add(faBan);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');

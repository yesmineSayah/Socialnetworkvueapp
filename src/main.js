// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import resource from 'vue-resource'
Vue.use(resource)

// Vue Bootstrap
import bootstrap from 'bootstrap-vue'
Vue.use(bootstrap);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Modal
import vmodal from 'vue-js-modal'
vmodal.template = "test";
Vue.use(vmodal)

// Vuex Store
import store from './store'

//Date Filter
import moment from 'moment'

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
    }
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users.module'
import projects from './modules/projects.module'

Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        users,
        projects
    }
})
import { getAll, getById } from '../../api/project.service';
export default {
    state: {
        projects: [],
        current: {}
    },
    getters: {
        getAllProjects: function(state) {
            return state.projects;
        },
        getCurrentProject: function(state) {
            return state.current;
        }
    },
    mutations: {
        setAllProjects: function(state, projects) {
            state.projects = projects;
        },
        setProject: function(state, project) {
            for (var i = 0; i < state.projects.length; i++) {
                if (state.projects[i]._id === project._id) {
                    state.projects.splice(i,1);
                    break;
                }
            }
            state.projects.push(project);
        },
        setCurrentProject: function(state, project) {
            state.current = project;
        }
    },
    actions: {
        setAllProjects: function(context, projects) {
            return new Promise((resolve, reject) => {
                getAll().then(data => {
                    context.commit('setAllProjects', data.body.data);
                    resolve(data.body.data);
                }).catch(err => {
                    reject(err);
                });
            });
        },
        getProjectById: function(context, id) {
            return new Promise((resolve, reject) => {
                getById(id).then(res => {
                    context.commit('setProject', res.body.data);
                    context.commit('setCurrentProject', res.body.data);
                    resolve(res.body.data);
                }).catch((err) => {
                    reject(err);
                });;
            });
        }
    }
}
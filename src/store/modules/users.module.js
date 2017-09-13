export default {
    state: {
        user: {}
    },
    mutations: {
        setUser: function(state, user) {
            state.user = user;
        }
    },
    getters: {
        getCurrent: function(state) {
            return state.user;
        }
    },
    actions: {
        setUser: function(context, user) {
            context.commit('setUser', user);
        }
    }
}
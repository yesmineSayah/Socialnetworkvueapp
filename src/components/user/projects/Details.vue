<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-xs-12 col-md-12 col-ld-12 sn-header">
                <h2 class="hidden-sm-down float-left" v-if="project">{{project.title}}</h2>
                <router-link :to="{path:'../'}" append>
                    <button class="btn btn-primary float-right">retour</button>
                </router-link>
                <router-link :to="{path:'edit'}" append>
                    <button class="btn float-right">Modifier</button>
                </router-link>
            </div>
            <div class="col-sm-12 col-xs-12 col-md-12 col-ld-12 " v-if="project">
                <h3 class="hidden-md-up">{{project.title}}</h3>
                <p>{{project.description}}</p>
                <p>Chef du Projet : {{project.author.firstName}} {{project.author.lastName}}</p>
                <p>Du {{ project.startDate | formatDate}} au {{ project.endDate | formatDate}}</p>
                <!--Contributors-->
                <div v-if="!project.contributors"><p>Aucun Contibuteur dans ce projet</p></div>
                <!--Sprints-->
                <div v-if="!project.sprints"><p>Aucun Sprint dans ce projet</p></div>
                <div v-if="project.sprints">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        project() {
            return this.$store.getters.getAllProjects.find(p => this.$route.params.id === p._id);
        }
    },
    created: function () {
        this.$store.dispatch('getProjectById', this.$route.params.id);
    }
}
</script>

<style scoped>

</style>

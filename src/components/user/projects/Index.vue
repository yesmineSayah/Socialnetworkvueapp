<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-xs-12 col-md-12 col-ld-12 sn-header">
                <h2 class="hidden-sm-down float-left">Liste des Projects</h2>
                <router-link :to="{path:'new'}" append>
                    <button class="btn btn-primary float-right">Nouveau</button>
                </router-link>
            </div>
            <div class="col-sm-12 col-xs-12 col-md-4 col-ld-3" v-for="p in projects">
                <Card :title="p.title" :description="author(p)" :buttonText="'Details'" v-on:clicked="goToDetails(p)"></Card>
            </div>
        </div>
    </div>
</template>


<script>
import Card from '../../shared/bootstrapcard.vue';
export default {
    components: {
        "Card": Card
    },
    computed: {
        projects() {
            return this.$store.getters.getAllProjects;
        }
    },
    methods: {
        goToDetails: function (project) {
            this.$router.push({ name: "detailsprojects", params: { id: project._id } });
        },
        author: function (project) {
            return project.author.firstName + " " + project.author.lastName;
        }
    },
    created: function () {
        this.$store.dispatch('setAllProjects');
    }
}

</script>
<style scoped>

</style>


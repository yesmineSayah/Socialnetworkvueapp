<template>
    <div class="container">
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label>Titre du Projet</label>
                <input class="form-control" type="text" v-model="project.title" name="title" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea class="form-control" type="text" v-model="project.description" name="description" required></textarea>
            </div>
            <div class="form-group">
                <label>Date de Debut</label>
                <Datepicker :inline="true"  v-model="project.startDate" name="startDate"></Datepicker>
            </div>
            <div class="form-group">
                <label>Date de Fin</label>
                <Datepicker :inline="true"  v-model="project.endDate" name="endDate"></Datepicker>
            </div>
            <div class="form-group">
                <input class="btn btn-primary" type="submit" name="submit">
                <router-link :to="{path:'../'}" append>
                    <input class="btn btn-secondary" type="button" name="back" value="Retour">
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import { update } from '../../../api/project.service.js';
export default {
    data() {
        return {
            project: {}
        }
    },
    components: {
        Datepicker
    },
    created: function () {
        if (this.$store.getters.getCurrentProject.title) {
            this.project = this.$store.getters.getCurrentProject;
        } else {
            this.$store.dispatch('getProjectById', this.$route.params.id).then(() => {
                this.project = this.$store.getters.getCurrentProject;
                console.log(this.project);
            });
        }
    },
    methods: {
        onSubmit: function () {
            update(this.project._id, this.project).then(data => {
                this.$router.go(-1);
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>

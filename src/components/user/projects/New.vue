<template>
    <div class="container">
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label>Titre du Projet</label>
                <input class="form-control" type="texy" v-model="project.title" name="title" required>
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
import { add } from '../../../api/project.service.js';
export default {
    data() {
        return {
            project: {
                title: ""
            }
        }
    },
    methods: {
        onSubmit: function () {
            this.project.author = this.$store.getters.getCurrent;
            add(this.project).then(data => {
                this.$router.go(-1);
            }).catch(err => {
                console.log(err);
            })
        }
    }
}
</script>

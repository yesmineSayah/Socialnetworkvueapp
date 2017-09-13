<template>
    <div>
        <form class="container">
            <h2> Login </h2>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" type="email" name="email" v-model="user.email">
            </div>
            <div class="form-group">
                <label>Password</label>
                <input class="form-control" type="password" name="password" v-model="user.password">
            </div>
            <div class="form-group">
                <button class="btn btn-primary" type="button" v-on:click="login" :disabled="!interact"> Login </button>
                <router-link :to="{path:'registration'}">
                    <button class="btn btn-primary" type="button" :disabled="!interact"> Register </button>
                </router-link>
            </div>
        </form>
    </div>
</template>



<script>
    import {
        login
    } from '../api/auth.service.js';
    export default {
    
        data() {
            return {
                msg: "",
                user: {
    
                },
                interact: true
            }
        },
        methods: {
            login: function() {
                this.interact = false;
                login(this.user).then(data => {
                    this.interact = true;
                    this.$store.dispatch('setUser', data);
                    this.$router.push({
                        name: 'indexprojects'
                    });
                }).catch(err => {
                    this.msg = err.message;
                    this.$modal.show('err');
                    this.interact = true;
                });
            },
            close: function() {
                this.$modal.hide('err');
            }
        }
    }
</script>

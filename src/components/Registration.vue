<template>
  <div>
    <modal name="err" :adaptive="true">
      <div class="text-center">
        <h3>Error</h3>
        <p> {{msg}} </p>
        <div>
          <button class="btn btn-primary" v-on:click="close()">Clear</button>
        </div>
      </div>
    </modal>
    <form class="container">
      <h2> Registration </h2>
      <div class="form-group">
        <label>First Name</label>
        <input class="form-control" type="text" name="firstname" v-model="user.firstName">
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input class="form-control" type="text" name="lastname" v-model="user.lastName">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input class="form-control" type="email" name="email" v-model="user.email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input class="form-control" type="password" name="password" v-model="user.password">
      </div>
      <div class="form-group">
        <label>Confirm Password</label>
        <input class="form-control" type="password" name="password" v-model="confirm">
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="button" v-on:click="register" :disabled="!interact"> Register </button>
        <button class="btn btn-danger" type="reset" :disabled="!interact"> Reset </button>
        <router-link :to="{path:'login'}">
          <button class="btn btn-primary" type="button" :disabled="!interact"> Login </button>
        </router-link>
      </div>
    </form>
  </div>
</template>


<script>
import { register } from '../api/auth.service.js';

export default {
  name: 'Registration',
  data() {
    return {
      user: {
      },
      confirm: "",
      interact: true,
      msg: ""
    }
  },

  methods: {
    register: function () {
      this.interact = false;
      register(this.user).then(data => {
        this.interact = true;
        this.$store.dispatch('setUser', data);
        this.$router.push({name:'indexprojects'});
      }).catch(err => {
        this.msg = err.message;
        this.$modal.show('err');
        this.interact = true;
      });
    },
    close: function () {
      this.$modal.hide('err');
    }
  }

}
</script>

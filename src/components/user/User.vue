<template>
  <div>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>



<script>
import { getInfo } from '../../api/auth.service.js';
export default {
  created: function () {
    let user = this.$store.getters.getCurrent;
    if (localStorage.sn_token && !user._id) {
      getInfo(localStorage.getItem('sn_token')).then(data => {
        this.$store.dispatch('setUser', data);
      }).catch(err => {
        console.log(err);
        this.$router.replace('/login');
      });
    } else if (!user._id){
      this.$router.replace('/login');
    }
  }
}
</script>

<template>
  <div id="app">
    <header>
      <span>Social Network</span>
    </header>
    <main>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    user() {
      return this.$store.getters.getCurrent;
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

.slide-fade-enter-active {
  transition-delay: .2s;
  transition-duration: .2s;
}

.slide-fade-leave-active {
  transition-duration: .2s;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(15px);
  opacity: 0;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #4fc08d;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.sn-header {
  margin-bottom: 20px;
}
</style>

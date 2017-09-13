<template>
  <div class="hello">
    <h1> Social Network </h1>
    <hr>
    <h4> Vos Competence Mondialement Reconnus</h4>
    <hr>
    <router-link :to="{path:'login'}">
      <button class="btn btn-primary custom"> Commencez </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
hr {
  width: 50%;
  margin-top: 32px;
  margin-bottom: 32px;
}

.custom {
  font-size: 1.8em;
}
</style>

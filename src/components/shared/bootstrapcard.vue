<template>
    <div class="card">
        <div class="card-block">
            <h4 class="card-title">{{title}}</h4>
            <p class="card-text">{{description}}</p>
            <button class="btn btn-primary" v-on:click="click()">{{buttonText}}</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'description', 'buttonText'],
    methods: {
        click: function () {
            this.$emit('clicked');
        }
    }
}
</script>

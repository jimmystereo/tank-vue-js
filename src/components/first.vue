<template>
<div>
    <input type="text" v-on:keyup.enter="plus" v-model="input" placeholder="type in your name"/>
    <button v-on:keydown. enter="plus"/>
    <p>{{input}} {{a}}</p></div>
</template>

<script>
export default {
    data() {
        return{
            a: 0,
            input:''}
    },
    methods: {
        plus : function () {
                this.a = 1}
    },
    computed: {}
}
</script>
<template>
<div style="display= inline-flex">
    <div id="weapon1" v-bind:class="{weapon_block:true,chosed_weapon:this.type1}">1</div>
    <div id="weapon2" v-bind:class="{weapon_block:true,chosed_weapon:this.type2}">2</div>
    <div id="weapon3" v-bind:class="{weapon_block:true,chosed_weapon:this.type3}">3</div>
</div>
</template>

<script>
export default {
    name:'inform1',
    data() {
        return{
           }
    },
    methods: {
        plus : function () {
                this.a = 1}
    },
    computed: {
        type1: function (){
           
                return this.$store.state.bullet1.type==1;
        },type2: function (){
           
                return this.$store.state.bullet1.type==2;
        },type3: function (){
           
                return this.$store.state.bullet1.type==3;
        }
    }
}
</script>
<style scoped>
.weapon_block{ 
    border-radius: 10%;
    display: inline-block;
    margin:0 auto;
    z-index: 10000;
    position: relative;
    background-color: brown;
    width:40px;
    height:40px;
}
.chosed_weapon{
    background-color: rgb(9, 238, 112);
    width:40px;
    height:40px;
}
#weapon1{
   margin-left: 1200px;
}
#weapon2{
   margin-left: 10px;
}
#weapon3{
   margin-left: 10px;
}
</style>
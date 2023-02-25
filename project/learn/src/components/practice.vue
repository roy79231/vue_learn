<script setup>
const props = defineProps({
    names1:{
        type:String,
    },
    ages1:{
        type:Number,
    }
});
const emit = defineEmits(["add-int"]);

const addsum = (a=1,b=2) =>{
    const coin = a+b;
    emit("add-int",coin);
};


</script>
<template>
    <div>
        <h1>{{ props.names1 }}的年紀是{{props.ages1}}</h1>
        <button @click="addsum">點我</button>
    </div>
</template>
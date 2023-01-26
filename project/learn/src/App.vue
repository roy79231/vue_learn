<script setup>
import{computed} from "@vue/reactivity";
import{ref , reactive,watch} from "vue";

const name = ref("roy");

const people= reactive({
  name : name,
  age : 12,

});

const data = computed({
  get:()=>{
    return people.age+1;
  },
  set:(val)=>{
    people.age = val*2;
  }
})
console.log(data.value);
data.value = 15;
console.log(data.value);


</script>

<template>
  <div>
  </div>
</template>

<style></style>

<script setup>
import{computed} from "@vue/reactivity";
import{ref , reactive,watch} from "vue";
import PracticeVue from "./components/practice.vue";

const name = ref("roy");

const people= reactive({
  name : name,
  age : 12,

});
const callback=(res)=>{
  console.log(res);
}

const data = computed({
  get:()=>{
    return people.age+1;
  },
  set:(val)=>{
    people.age = val*2;
  }
})
const data2 = computed(()=>{
  return `${people.name}`
})

console.log(data.value);
data.value = 15;
console.log(data.value);


</script>

<template>
  <div>
    {{ data2 }}
    <PracticeVue :names1="people.name" :ages1=10 @add-int="callback"/>
  </div>
</template>

<style></style>

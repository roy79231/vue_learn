<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    console.log(route);
</script>
<template>
     <h1>{{ useRoute().path }}</h1>
     <h1>{{ route.path }}</h1>
</template>
<style>

</style>
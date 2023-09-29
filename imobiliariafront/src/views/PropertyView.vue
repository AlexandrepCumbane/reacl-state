<template>
    <HeaderComp />
    <router-view></router-view>
</template>

<script>
    import HeaderComp from "@/components/partials/HeaderComp.vue";
    export default {
        components: {
            HeaderComp,
        },
    };
</script>
<style scoped></style>

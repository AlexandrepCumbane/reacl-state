<template >
    <HeaderComp class=" bg-white"/>
    
    <router-view></router-view>
    <FooterComp />
</template>

<script>
    import HeaderComp from "@/components/partials/HeaderComp.vue";
    import FooterComp from "./../components/partials/FooterComp.vue";

    export default {
        components: {
            FooterComp,
            HeaderComp,
        },
    };
</script>
<style scoped></style>


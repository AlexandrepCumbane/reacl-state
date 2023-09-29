<template >
    <HeaderComp />
    <Search />
    <PropertiesComp />
    <FooterComp />
</template>

<script>
    import PropertiesComp from "@/components/PropertiesComp.vue";
    import HeaderComp from "@/components/partials/HeaderComp.vue";
    import Search from "@/components/partials/SearchComp.vue";
    import FooterComp from "./../components/partials/FooterComp.vue";

    export default {
        components: {
            FooterComp,
            HeaderComp,
            Search,
            PropertiesComp,
        },
    };
</script>
<style scoped></style>

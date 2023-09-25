<template>
    <div class="">
        <HeaderComp />
        <section>

        </section>
        <Search />

        <FooterComp />
    </div>
</template>

<script>
    import HeaderComp from "./partials/HeaderComp.vue";
    import Search from "./partials/SearchComp.vue";
    import FooterComp from "./partials/FooterComp.vue";

    export default {
        components: {
            FooterComp,
            HeaderComp,
            Search,
        },
    };
</script>
<style scoped></style>

<template>
    <HelloComp />
</template>

<script>
    // @ is an alias to /src
    import HelloComp from "@/components/HelloComp.vue";

    export default {
        components: {
            HelloComp,
        },
    };
</script>
<style scoped></style>

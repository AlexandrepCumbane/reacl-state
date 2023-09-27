<template>
    <div class="w-full h-full flex flex-col border border-black">
        <HeaderComp />
        <Search />
        <section class="p-4 flex-1 flex gap-5 overflow-auto border border-black flex-wrap justify-center">
            
            <template v-if="properties.length > 0">
                <PropertyComp
                    v-for="property in properties"
                    :key="property.id"
                    :title="property.title"
                    :price="property.price"
                    :localization="property.localization"
                    :category="property.category"
                    :rooms="property.rooms"
                    :baths="property.baths"
                    :area="property.area"
                    :purpose="property.purpose"
                    :url="property._id" />
            </template>
        </section>


        <FooterComp />
    </div>
</template>

<script>
    import HeaderComp from "./partials/HeaderComp.vue";
    import Search from "./partials/SearchComp.vue";
    import FooterComp from "./partials/FooterComp.vue";
    import PropertyComp from "./partials/PropertyComp.vue";
    import axios from "axios";

    export default {
        components: {
            FooterComp,
            HeaderComp,
            Search,
            PropertyComp,
        },
        data() {
            return {
                properties: [],
            };
        },
        async created() {
            try {
                const response = await axios.get("http://localhost:9090/propriedades");
                this.properties = response.data;
                console.info("all proprietes" + " " + response.status, response.statusText);
                // console.log(this.properties)
            } catch (error) {
                console.error(error);
            }
        },
    };
</script>

<style scoped></style>

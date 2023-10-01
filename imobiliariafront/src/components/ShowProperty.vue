<template>
    <div class="border-2 border-rose-100 overflow-auto flex-1 dark:text-[#ffffff73]">
        <div class="w-full h-full">
            <v-img  aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                property: {},
            };
        },
        async created() {
            try {
                const response = await axios.get(`http://localhost:9090/propriedade/${this.$route.params.id}`);
                this.property = response.data;
                console.log(this.property);
            } catch (error) {
                console.error(error);
            }
        },
    };
</script>

<style scoped></style>

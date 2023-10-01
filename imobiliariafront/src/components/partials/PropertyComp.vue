<template>
    <div class="h-max dark:text-[#ffffff73]">
        <div class="relative h-full">
            <v-img src="../../../src/assets/images/foto.jpg" cover class="rounded-t-lg" />

            <div class="absolute top-0 right-0">
                <v-img
                    src="../../../src/assets/images/price.png"
                    class="w-32" />
                    <p class="flex w-[65px] h-[20px] items-center text-lg  font-bold text-black justify-center absolute top-[65px] right-[18px] rotate-45 ">{{ purpose }}</p>
            </div>
            <p class="absolute bottom-2 p-1  rounded-md left-2 text-lg font-semibold bg-[#e9e6e64f]">{{ price }} <span class="font-normal text-base">mzn</span></p>
        </div>
        <div class="border rounded-b-lg">
            <div class="flex p-1 flex-row justify-between px-2">
                <p class="title">{{ title }}</p>
                <p class="category">{{ category }}</p>
            </div>
            <div class="border-t h-[35px] flex flex-row justify-evenly">
                <div class="flex flex-none items-center rooms">
                    <span>{{ rooms }}</span>
                    <span class="material-symbols-outlined"> bed </span>
                </div>
                <div class="flex flex-none items-center baths">
                    <span>{{ baths }}</span>
                    <span class="material-symbols-outlined"> shower </span>
                </div>
                <div class="flex flex-none items-center area">
                    <span class="material-symbols-outlined"> pinch </span>
                    <span>{{ area }} m^2</span>
                </div>
                <div class="flex flex-none items-center mobilia">
                    <span class="material-symbols-outlined"> chair </span>
                </div>
            </div>
            <p class="border-t p-1">{{ localization }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: String,
            title_en: String,
            state: Boolean,
            purpose: String,
            price: Number,
            productLabel: String,
            rentFrequency: String,
            description: String,
            description_en: String,
            slug: String,
            slug_en: String,
            category: String,
            rooms: Number,
            baths: Number,
            area: Number,
            photoCount: Number,
            photos: Array,
            amenities: Array,
            furnishingStatus: String,
            localization: String,
        },
        methods: {
            beforeEnter(to, from, next) {
                // Sua lógica personalizada aqui
                console.log("Antes da navegação");
                // Continuar a navegação
                setTimeout(() => {
                    next();
                }, 5000);
            },
        },
    };
</script>
<style scoped></style>

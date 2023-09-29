<template>
    <router-link :to="{ name: 'detalhes', params: { id: url } }" class="w-full sm:max-w-[450px] h-max ">
        <div class="relative h-full">
            <v-img src="../../assets/images/foto.jpg" cover  class="rounded-t-lg"  />
            <p class="absolute bottom-0">{{ price }}mzn</p>
        </div>
        <div class="border rounded-b-lg">
            <div class="flex p-1 flex-row justify-between px-2">
                <p class="title">{{ title }}</p>
                <p class="category">{{ category }}</p>
            </div>
            <div class="border-t h-[35px] flex flex-row justify-evenly">g
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
                    <span>{{ area }}</span>
                </div>
                <div class="flex flex-none items-center mobilia">
                    <span class="material-symbols-outlined"> chair </span>
                </div>
            </div>

            <p class="border-t p-1 ">{{ localization }}</p>
        </div>
    </router-link>
</template>
<script>
    export default {
        props: {
            price: Number,
            localization: String,
            title: String,
            category: String,
            rooms: Number,
            baths: Number,
            area: Number,
            purpose: String,
            url: String,
            frontImage: String,
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

<template>
    <router-link  :to="{ name: 'property', params: { id: url } }" class="w-full md:max-w-[380px] border h-max flex-none">
        <div class="relative h-[250px] border px-2">
            <p class="absolute bottom-0">{{ price }}mzn</p>
        </div>
        <div class="flex flex-row justify-between px-2">
            <p class="title">{{ title }}</p>
            <p class="category">{{ category }}</p>
        </div>
        <div class="h-[35px] border flex flex-row justify-evenly">
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
        <p>{{ localization }}</p>
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

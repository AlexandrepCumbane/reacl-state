<template>
    <div class="home h-screen flex flex-col inicial">
        <header class="border p-5 flex-none">
            <router-link to="/login" class="flex justify-end items-center text-center">Entrar <v-icon icon="mdi-login"></v-icon></router-link>

        </header>

        <div class="flex flex-1 justify-end">
            <div class="md:w-max max-w-[800px] px-9 flex flex-col justify-center items-center">
                <div class="mb-7 flex flex-col gap-1">
                    <h1 class="text-4xl md:text-7xl">O seu lar ideal está a um clique de distância</h1>
                </div>

                <router-link to="/properties"> <v-btn size="large" :loading="loading" @click="load" elevation="8" class=" hover:bg-[rgba(253,253,253,0.31)]"> Ver Propriedades </v-btn></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({ loading: false }),

        methods: {
            load() {
                this.loading = true;
                setTimeout(() => (this.loading = false), 3000);
            },
        },
    };
</script>
<style scoped lang="scss">
    .inicial {
        background-image: url("./../assets/images/casa.jpg");
        background-size: cover; /* Tamanho da imagem de fundo */
        background-position: center bottom; /* Posição da imagem de fundo */
        background-repeat: no-repeat; /* Repetição da imagem de fundo */
    }
</style>

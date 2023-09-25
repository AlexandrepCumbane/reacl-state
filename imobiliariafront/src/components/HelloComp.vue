<template>
    <div class="home h-screen">
        <div class="h-full inicial flex justify-end">
            <div class="md:w-max max-w-[800px] px-9 flex flex-col justify-center items-center">
                <div class="mb-7 flex flex-col gap-1">
                    <h1 class="text-4xl md:text-7xl">O seu lar ideal está a um clique de distância</h1>
                </div>

                <router-link to="/properties">Ver Propriedades</router-link>
                <c-button variant-color="green">Button</c-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { CButton } from "chakra-ui/vue";
    export default {
        components: {
            CButton,
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

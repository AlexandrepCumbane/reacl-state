<template>
    <div class="home h-screen">
        <div class="h-full inicial flex justify-end">
            <div class="md:w-max max-w-[800px] px-9 flex flex-col justify-center items-center">
                <div class="mb-7 flex flex-col gap-1">
                    <h1 class="text-4xl md:text-7xl">O seu lar ideal está a um clique de distância</h1>
                </div>

                <router-link to="/properties" class="bg-slate-400 py-1 px-2 transition-all duration-500 hover:bg-slate-300 rounded-md w-max">Ver Propriedades</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>
<style scoped lang="scss">
    .inicial {
        background-image: url("./../assets/images/casa.jpg");
        background-size: cover; /* Tamanho da imagem de fundo */
        background-position: center bottom; /* Posição da imagem de fundo */
        background-repeat: no-repeat; /* Repetição da imagem de fundo */
    }
</style>

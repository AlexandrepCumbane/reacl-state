<template lang="">
    <header class="py-2 px-4 flex flex-row justify-between items-center sticky top-0">
        <nav>
            <router-link class="flex flex-row items-center" to="/"><span class="material-symbols-outlined"> home </span></router-link>
        </nav>
        <div class="flex flex-row gap-4 items-center">
            <!-- <button class="sm:hidden material-symbols-rounded">menu</button> -->

            <div class="flex flex-row items-center">
                <button class="material-symbols-outlined">light_mode</button>
                <button class="material-symbols-outlined">dark_mode</button>
            </div>
            <div>
                <button class="bg-slate-400 py-1 px-2 transition-all duration-500 hover:bg-slate-300 rounded-md w-max">Entrar</button>
            </div>
        </div>
    </header>
</template>
<script>
    export default {};
</script>
<style lang=""></style>

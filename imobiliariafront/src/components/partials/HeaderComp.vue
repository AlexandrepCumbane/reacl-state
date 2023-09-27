<template lang="">
    <header class="border dark:bg-slate-500  border-black p-5 flex flex-row justify-between items-center sticky top-0">
        <nav>
            <router-link class="flex flex-row items-center" to="/"><span class="material-symbols-outlined"> home </span></router-link>
        </nav>
        <div class="flex flex-row gap-4 items-center">
            <div class="flex flex-row items-center">
                <button v-if="mode" @click="changeMode" class="material-symbols-outlined">light_mode</button>
                <button v-else @click="changeMode" class="material-symbols-outlined">dark_mode</button>
            </div>
            <div>
                <router-link to="/login" class="flex justify-end items-center text-center">Entrar <span class="material-symbols-outlined"> login </span></router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                mode: true,
                isDarkMode: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
                html: document.querySelector("html").classList,
            };
        },
        methods: {
            changeMode() {
                this.mode = !this.mode;
                this.html.toggle("dark");
            },
            loadPage() {
                if (this.isDarkMode) {
                    this.mode = true;
                    this.html.add("dark");
                } else {
                    this.mode = false;
                    this.html.remove("dark");
                }
            },
        },
        created() {
            this.loadPage();
        },
    };
</script>

<style lang=""></style>

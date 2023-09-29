<template lang="">
    <v-sheet class="bg-purple-950 flex flex-row justify-center items-center h-full border-8">
        <v-card class="px-6 py-8 w-[340px]">
            <v-form v-model="form" @submit.prevent="onSubmit">
                <v-text-field v-model="email" variant="solo" :readonly="loading" :rules="[required]" class="mb-2" clearable label="Email"></v-text-field>

                <v-text-field v-model="password" :readonly="loading" :rules="[required]" clearable variant="solo" label="Password" placeholder="Enter your password"></v-text-field>

                <br />

                <v-btn :disabled="!form" :loading="loading" block color="success" size="large" type="submit" variant="elevated">Entrar </v-btn>
            </v-form>
        </v-card>
    </v-sheet>
</template>

<script>
    import axios from "axios";
    export default {
        data: () => ({
            form: false,
            email: null,
            password: null,
            loading: false,
        }),

        methods: {
            onSubmit() {
                if (!this.form) return;
                this.loading = true;
                axios({
                    method: "post",
                    url: "http://localhost:9090/login",
                    data: {
                        email: this.email,
                        password: this.password,
                    },
                }).then((res) => {
                    console.log(res);
                    // if (res.statusCode == 200) {
                        
                    // }
                });
            },

            required(v) {
                return !!v || "Field is required";
            },
        },
    };
</script>
<style lang=""></style>

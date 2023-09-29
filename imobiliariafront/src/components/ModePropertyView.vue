<template lang="">
    <form>
        <v-autocomplete label="Propósito" :items="['Venda', 'Alugável', 'Venda e Aluguer']"></v-autocomplete>

        <v-autocomplete label="Categoria" :items="['Residencial', 'Comercial', 'Industrial', 'Terreno', 'Lazer']"> </v-autocomplete>

        <v-autocomplete label="Comodidades" multiple :items="['Piscina', 'Academia', 'Estacionamento', 'Segurança', 'Área de lazer', 'Terraço', 'Ar-Condicionado', 'Mobília', 'Cozinha equipada']">
        </v-autocomplete>

        <v-text-field label="Área" solo type="number" ></v-text-field>

        <v-autocomplete label="Mobília" :items="['Com mobília', 'Alguma mobília', 'Não inclui mobília', 'Mobília negociável']"> </v-autocomplete>

        <v-file-input chips accept="image/*" counter multiple clearable label="Selecione as imagens" prepend-icon="mdi-camera"></v-file-input>
    </form>
</template>
<script>
    export default {};
</script>
<style lang=""></style>
<!-- {
        title: {
            type: String,
            required: true,
        },
        title_en: {
            type: String,
            required: true,
        },
        state: {
            type: Boolean,
            required: true,
        },
        purpose: {
            type: String,
            required: true,
            enum: ["Venda", "Alugavel", "Venda e Alugavel"],
        },
        price: {
            type: Number,
            required: true,
        },
        productLabel: {
            type: String,
            enum: ["Novo", "Destaque", "Promoçao"],
        },
        rentFrequency: {
            type: String,
            required: false,
            enum: ["mensal", "semanal", "trimestral", "anual", null],
        },
        description: {
            type: String,
            required: true,
        },
        description_en: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        slug_en: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["Residencial", "Comercial", "Industrial", "Terreno", "Lazer" /*(resorts, hoteis)*/],
        },
        rooms: {
            type: Number,
        },
        baths: {
            type: Number,
        },
        area: {
            type: Number,
        },
        photoCount: {
            type: Number,
            required: true,
        },
        photos: [
            {
                _id: {
                    type: String,
                    default: uuidv4, // Gera um ID único automaticamente
                },
                url: String, // URL da imagem
            },
        ],
        amenities: {
            type: [String], // array de strings
            required: false,
            enum: ["Piscina", "Academia", "Estacionamento", "Segurança", "Área de lazer para crianças", "Terraço", "Ar-Condicionado", "CozinhaEquipada", null],
        },
        furnishingStatus: {
            type: String,
            required: false,
            enum: ["com mobília", "algumas mobílias", "não inclui mobília", "mobília é negociável", null],
        },
        localization: {
            type: String,
            required: true,
        }
    }, -->

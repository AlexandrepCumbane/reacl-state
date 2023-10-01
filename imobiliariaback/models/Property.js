const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const PropertySchema = new mongoose.Schema(
    {
        title: {
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
        slug: {
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
            enum: ["Piscina", "Academia", "Estacionamento", "Segurança", "Área de lazer para crianças", "Terraço", "Ar-Condicionado", "Mobília", "CozinhaEquipada", null],
        },
        furnishingStatus: {
            type: String,
            required: false,
            enum: ['Mobilada', 'Alguma Mobília', 'Sem Mobília', 'Mobília Negociável'],
        },
        localization: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("property", PropertySchema, "properties");

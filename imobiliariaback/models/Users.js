const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: tru,
            min: [6, "NomeDoUsuário deve ter no minimo 6 letras"],
        },
        password: {
            type: String,
            required: true,
            min: [6, "Senha deve ter no minimo 6 letras"],
        },
        Email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", UsersSchema, "users");

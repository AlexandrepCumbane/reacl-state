const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            // unique: true,
        },
        password: {
            type: String,
            required: true,
            // min: [6, "Senha deve ter no minimo 6 letras"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("user", UsersSchema, "users");

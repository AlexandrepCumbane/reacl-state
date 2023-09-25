const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/imobiliaria", {
        serverSelectionTimeoutMS: 30000,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Conectado ao MongoDB");
    })
    .catch((err) => {
        console.error({ err, msg: "Erro na conexão" });
    });

module.exports = mongoose;

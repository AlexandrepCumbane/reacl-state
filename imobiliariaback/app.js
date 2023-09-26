const express = require("express");
const app = express();
const router = require("./routes/routes");
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(cors())
// Body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use("/", router);

// Serve application
try {
    app.listen(9090, () => {
        console.log(`Servidor ouvindo na porta 9090`);
    });
} catch (error) {
    console.error(`Erro ao iniciar o servidor: ${error.message}`);
}

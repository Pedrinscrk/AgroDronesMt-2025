const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const routes = require("./routes/index");

const app = express();

// Configura o Handlebars como view engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Configura os diretórios estáticos
app.use(express.static(path.join(__dirname, 'public'))); // Arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'views')));  // Pasta views (se necessário)

// Conecta as rotas ao servidor
app.use("/", routes);

const port = 9999;
app.listen(port, () => {
    console.log(`aquapulse in running on 127.0.0.1:${port}`);
});

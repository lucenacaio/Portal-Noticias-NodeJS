//Created by Caio Lucena
var app = require("./config/server");

require("./app/routes/formulario_inclusao_noticia")(app);
require("./app/routes/home")(app);
require("./app/routes/noticias")(app);


app.listen(3000, function() {
    console.log("Servidor ON");
});
module.exports = function(app) {
    app.get('/noticia', function(req, res) {
        let connection = app.config.dbConnection();
        connection.query('select * from noticias where id_noticia = 1', function(error, result) {
            res.render("noticias/noticia", { noticias: result });
        });

    });
}
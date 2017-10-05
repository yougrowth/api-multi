module.exports.curso = function(app, req, res){
    var connection = app.config.database();
    var clientesModel = new app.app.models.clientesDAO(connection);

    clientesModel.getClientes(function (error, result) {
      res.render('clientes/clientes', {clientes: result});
    });
}
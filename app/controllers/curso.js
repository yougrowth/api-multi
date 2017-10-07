module.exports.getCursos = function(app, req, res){
  var connection = app.config.database();
  var cursoModel = new app.app.models.cursoDAO(connection);

  cursoModel.getCursos(function (error, result) {
    res.format({
      json: function(){res.json(result)},
      html: function(){res.render('cursos/ver-cursos.ejs', {cursos: result})}
    })
  });

}
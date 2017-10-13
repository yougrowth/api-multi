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

module.exports.formularioCursos = function(app, req, res){
    res.render('cursos/cadastrar-curso.ejs', {validacao: {}});
}

module.exports.insertCurso = function(app, req, res){

  var curso = req.body;

  req.assert('nome', 'Nome é obrigatório').notEmpty();
  req.assert('descricao', 'Descrição é obrigatória').notEmpty();
  req.assert('autor', 'Autor é obrigatório').notEmpty();
  req.assert('categoria', 'Categoria é obrigatória').notEmpty();
  req.assert('nivel', 'Nivel é obrigatório').notEmpty();
  req.assert('privacidade', 'Privacidade é obrigatória').notEmpty();
  req.assert('duracao', 'Duracao é obrigatória').notEmpty();
  req.assert('preco', 'Preco é obrigatória').notEmpty();

  var erros = req.validationErrors();

  if(erros){
      res.render('cursos/cadastrar-curso.ejs', {validacao : erros, curso : curso});
      return;
  }

  var connection = app.config.database();
  var cursosModel = new app.app.models.cursoDAO(connection);

  cursosModel.insertCurso(curso, function(error, result){
      console.log(error);
      res.redirect('/todos-cursos');
  });
}
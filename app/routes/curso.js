module.exports = function(app){
  app.get('/todos-cursos', function(req, res){
		app.app.controllers.curso.getCursos(app, req, res);
	});

  app.get('/formulario-curso', function(req, res){
		app.app.controllers.curso.formularioCursos(app, req, res);
	});

	app.post('/inserir-curso', function(req, res){
		app.app.controllers.curso.insertCurso(app, req, res);
	});
}
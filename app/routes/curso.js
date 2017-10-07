module.exports = function(app){
  app.get('/todos-cursos', function(req, res){
		app.app.controllers.curso.getCursos(app, req, res);
	});

  app.get('/cadastrar-curso', function(req, res){
		res.send('Cadastre Curso!');
	});

  app.get('/atualizar-curso', function(req, res){
		res.send('Atualizar Curso!');
	});
}
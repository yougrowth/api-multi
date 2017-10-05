module.exports = function(application){

    application.get('/todos-cursos', function(req, res){
		res.send('Ver Cursos!');
	});

    application.get('/cadastrar-curso', function(req, res){
		res.send('Cadastre Curso!');
	});

    application.get('/atualizar-curso', function(req, res){
		res.send('Atualizar Curso!');
	});

}
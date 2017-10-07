function CursosDAO(connection){
    this._connection = connection;
}

CursosDAO.prototype.getCursos = function(callback){
    this._connection.query('SELECT * FROM cursos', callback);
}

CursosDAO.prototype.insertCurso = function(curso, callback){
    this._connection.query('INSERT INTO cursos SET ?', curso, callback);
}

module.exports = function() {
    return CursosDAO;
}
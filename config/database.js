var mysql = require('mysql');

var conecMySQL = function(){
  console.log('Conexão estabelecida');
  return mysql.createConnection(
  {
    host : 'localhost',
    user : 'root',
    password : 'fiap',
    database : 'multi_database'
  }
);
}

module.exports = function(){ // abre funcao
  console.log('Fez o autoload do modulo de conexao');
  return conecMySQL;
} // fecha funcao

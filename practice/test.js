var mysql      = require('mysql');
var http = require('http');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'shareapp',
  port: 3306
});
connection.connect();
var a;
connection.query('select * from user', 
    function (error, results, fields) {
        if (error) throw error;
        a = results;
        console.log(a);
});

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(a+'\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
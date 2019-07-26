
var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
	host : '192.168.0.26',
	user : 'root',
	password : '1q2w3e4r!',
	port: 3306,
	database : 'Wifi_data'
});

//Express web server create and excute
var app = express();
http.createServer(app).listen(8000, function(){
	console.log('server running');
});

// list.html
app.get('/', function(req, res){
	fs.readFile('list.html', 'utf8', function(error, data){
		if(error){
			console.log('readFile Error');
			}
		// 데이터 조회 후 결과를 'results' 매개변수 저장
		else{
			connection.query('select * from test_input2', function(error, results){
				if(error)
					console.log('error:', error.message);
				else{
					// 조회결과를 'prodList' 변수에 할당한 후 'list.html'에 전달
					res.send(ejs.render(data, {
						prodList:results}
					));
				}
			});
		}
	})
});
		
/*

connection.connect();

connection.query('SELECT * from test_input2', function(err, rows, fields){
	if(!err)
		console.log(rows);
	else
		console.log(err);
});

connection.end();
*/

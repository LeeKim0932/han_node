
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : '192.168.0.26',
	user : 'root',
	password : '1q2w3e4r!',
	port: 3306,
	database : 'Wifi_data'
});

connection.connect();

connection.query('SELECT * from test_input2', function(err, rows, fields){
	if(!err)
		console.log(rows);
	else
		console.log(err);
});

connection.end();


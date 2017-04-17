var express = require('express');
var router = express.Router();
const mysql = require('mysql');


/* GET users listing. */
router.get('/', function(req, res, next) {
	const connection = mysql.createConnection({
		host: 'localhost',
		user: 'hoge',
		password: 'hogehoge',
		database: 'node_test'
	});
	connection.connect(function(err) {
		if (err) {
			console.error(`error connecting: ${err.stack}`);
			return;
		}
		console.log(`connected as id : ${connection.threadId}`);
	});


	connection.query('select * from user;', function(err, results, filelds) {
		console.log(results);
		res.render('users', {users: results });
	});

	connection.end();
});




module.exports = router;

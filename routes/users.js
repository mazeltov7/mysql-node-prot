var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


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

router.post('/create', function(req, res, next) {
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

	connection.query('insert into user set ?', {name: req.body.name, birth: '2017-4-4'}, function(err, results, filelds) {
		console.log(`error: ${err}`);
		console.log(results);
		res.redirect(302, '/users');
	});

	connection.end();
});



module.exports = router;

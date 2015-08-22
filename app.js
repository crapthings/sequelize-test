// require

var	bodyParser = require('body-parser');
var	express = require('express');
var	app = express();

var sequelize = require('./db');

var Authors = require('./models/authors');
var Posts = require('./models/posts');

//

app.set('view engine', 'ejs');

//

app.use(bodyParser.urlencoded({ extended: true }));


// drop db 创建表和内容

sequelize.sync({ force: true });

//

app.get('/', function(req, res) {
	Authors.findAll().then(function(authors) {
		res.render('pages/index', {
			authors: authors
		});
	});
});

//

app.post('/authors/new', function(req, res, next) {
	Authors.create(req.body).then(function(author) {
		res.redirect('/');
	}).catch(function(err) {
		if (err) {
			res.render('pages/error', {
				error: err
			});
		}
	});
});

//

app.get('/:name', function(req, res) {
	res.render('pages/author', {
		name: req.params.name
	});
});

//

var server = app.listen(3000, function() {
	console.log('server is running at ' + server.address().port);
});

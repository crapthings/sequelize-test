// require

var path = require('path'),
	express = require('express'),
	app = express();

var Sequelize = require('sequelize');

// db名test、空用户名和密码，不pass那两个参数会报错。

var sequelize = new Sequelize('test', null, null, {
	dialect: 'sqlite', // 使用 sqlite
	storage: path.join(__dirname + '/test.db') // 数据库存储的位置，不指定不知道数据库存哪儿了？系统临时文件？
});

// 定义作者

var Author = sequelize.define('author', {
	name: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	}
});

// 定义文章

var Post = sequelize.define('post', {
	title: {
		type: Sequelize.STRING,
		allowNull: false

	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	authorId: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: Author,
			key: 'id'
		}
	}
});

// drop db 创建表和内容

sequelize.sync({ force: true }).then(function() {
	return Author.create({
		name: 'demo'
	});
}).then(function(author) {
	return Post.create({
		title: 'this is a title',
		content: 'this is post content.',
		authorId: author.id
	});
}).then(function(post) {
	console.log(post.get());
});

//

app.get('/', function(req, res) {
	Author.findAll().then(function(authors) {
		res.send(authors);
	});
});

//

var server = app.listen(3000, function() {
	console.log('server is running at ' + server.address().port);
});
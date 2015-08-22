//

var Sequelize = require('sequelize');
var sequelize = require('../db');
var Authors = require('./authors');

// 定义文章

var Posts = sequelize.define('post', {
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
			model: Authors,
			key: 'id'
		}
	}
});

//

module.exports = Posts;

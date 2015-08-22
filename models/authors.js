//

var Sequelize = require('sequelize');
var sequelize = require('../db');

// 定义作者

var Authors = sequelize.define('author', {
	name: {
		type: Sequelize.STRING,
		unique: true,
		allowNull: false
	}
});

module.exports = Authors;

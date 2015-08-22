//

var path = require('path');

//

var Sequelize = require('sequelize');

//

var sequelize = new Sequelize('test', null, null, {
	dialect: 'sqlite', // 使用 sqlite
	storage: path.join(__dirname + '/test.db') // 数据库存储的位置，不指定不知道数据库存哪儿了？系统临时文件？
});

module.exports = sequelize;

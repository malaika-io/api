"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.database = new sequelize_1.Sequelize('malaika', 'root', 'Lyna2009', {
    host: 'localhost',
    dialect: 'mysql'
});
//# sourceMappingURL=database.js.map
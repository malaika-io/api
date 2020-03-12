"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class Node extends sequelize_1.Model {
}
exports.Node = Node;
Node.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    serial: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    uuid: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
}, {
    tableName: "nodes",
    sequelize: database_1.database // this bit is important
});
Node.sync({ force: true }).then(() => console.log("Node table created"));
//# sourceMappingURL=node.model.js.map
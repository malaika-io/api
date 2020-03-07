import {Sequelize} from "sequelize";

export const database = new Sequelize('malaika', 'root', 'libheros', {
    host: 'localhost',
    dialect: 'mysql'
});
